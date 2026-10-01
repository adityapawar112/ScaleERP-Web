import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://scaleerp.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/v1/admin/"],
      },
      {
        // Explicit permissions for AI search engines and answer assistants
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Applebot-Extended"],
        allow: ["/", "/docs/", "/resources/", "/product", "/pricing", "/download", "/llms.txt", "/llms-full.txt"],
        disallow: ["/admin/", "/api/v1/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
