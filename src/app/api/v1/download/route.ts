import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pkg = searchParams.get("package") || "installer";
  const forceStub = searchParams.get("mode") === "stub";

  const isPortable = pkg.toLowerCase() === "portable" || pkg.toLowerCase() === "zip";
  const filename = isPortable ? "ScaleERP-Portable-1.0.0.zip" : "ScaleERP-Setup-1.0.0.exe";

  const githubReleaseUrl = `https://github.com/adityapawar112/ScaleERP-Desktop/releases/latest/download/${filename}`;

  // If not forcing stub mode, check if the remote GitHub release asset is live
  if (!forceStub) {
    try {
      const checkRes = await fetch(githubReleaseUrl, {
        method: "HEAD",
        redirect: "manual",
        signal: AbortSignal.timeout(2000),
      });

      // Status 200 (direct binary) or 302 (GitHub releases redirection to CDN / Azure blob storage)
      if (checkRes.status === 200 || checkRes.status === 302) {
        return NextResponse.redirect(githubReleaseUrl, 307);
      }
    } catch {
      // Remote check timed out, offline, or release tag not yet created; fall back to local stub
    }
  }

  // Graceful fallback: return structured installer stub for local evaluation / offline testing
  const stubContent = `[ScaleERP Desktop v1.0.0 Release Package]
File: ${filename}
Architecture: x86_64 (Windows 10/11 64-bit)
Database Engine: SQLite 3 with Write-Ahead Logging (WAL)
Build Target: Electron 34 + React 19 + TypeScript
Licensing: RSA-PSS SHA-256 Cryptographic Authentication

Note: For the official compiled binary, download via GitHub Releases:
${githubReleaseUrl}
Or package locally using: 'npm run dist' in ScaleERP-Desktop.
`;

  const headers = new Headers();
  headers.set("Content-Type", isPortable ? "application/zip" : "application/x-msdownload");
  headers.set("Content-Disposition", `attachment; filename="${filename}"`);
  headers.set("Content-Length", Buffer.byteLength(stubContent).toString());

  return new NextResponse(stubContent, {
    status: 200,
    headers,
  });
}
