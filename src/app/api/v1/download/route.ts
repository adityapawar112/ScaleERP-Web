import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pkg = searchParams.get("package") || "installer";

  const isPortable = pkg.toLowerCase() === "portable" || pkg.toLowerCase() === "zip";
  const filename = isPortable ? "ScaleERP-Portable-1.0.0.zip" : "ScaleERP-Setup-1.0.0.exe";

  // In production, this can redirect to GitHub Releases or Cloudflare R2 / AWS S3 storage:
  // e.g., return NextResponse.redirect(`https://github.com/scaleerp/scaleerp-desktop/releases/download/v1.0.0/${filename}`, 302);

  // For seamless local evaluation, recruiter demos, and offline environments, return a downloadable installer stub
  const stubContent = `[ScaleERP Desktop v1.0.0 Release Package]
File: ${filename}
Architecture: x86_64 (Windows 10/11 64-bit)
Database Engine: SQLite 3 with Write-Ahead Logging (WAL)
Build Target: Electron 34 + React 19 + TypeScript
Licensing: RSA-PSS SHA-256 Cryptographic Authentication

Note: For the full compiled Electron binary, please build via 'npm run electron:build' in ScaleERP-Desktop or pull the release binary from the GitHub releases page.
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
