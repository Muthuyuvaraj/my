import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Required for static export (output: "export")
export const dynamic = "force-static";

// Auto-generated social share image (fixes the missing og-preview.png from the old site)
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          color: "#f1f5ff",
          backgroundColor: "#050510",
          backgroundImage:
            "radial-gradient(800px 500px at 20% 25%, rgba(183,138,255,.35), transparent 70%), radial-gradient(900px 600px at 85% 80%, rgba(110,168,255,.3), transparent 70%)",
        }}
      >
        <div style={{ fontSize: 28, color: "#b78aff", letterSpacing: 4, textTransform: "uppercase" }}>
          {site.jobTitle}
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 20, lineHeight: 1.05 }}>{site.name}</div>
        <div style={{ fontSize: 34, color: "#a9b4cc", marginTop: 24, maxWidth: 900 }}>
          Modern web apps, SaaS platforms, dashboards & e-commerce.
        </div>
      </div>
    ),
    size,
  );
}
