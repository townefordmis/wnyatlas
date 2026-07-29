import { ImageResponse } from "next/og";

export const alt =
  "WNYAtlas — Western New York Industrial and Environmental Atlas";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#f7f1e5",
          background:
            "linear-gradient(135deg, #172720 0%, #233b30 58%, #9d4b32 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: "0.08em",
          }}
        >
          <span
            style={{
              display: "flex",
              padding: "10px 14px",
              color: "#172720",
              background: "#f7f1e5",
            }}
          >
            WNY
          </span>
          ATLAS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              maxWidth: 950,
              fontFamily: "Georgia",
              fontSize: 76,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
            }}
          >
            What happened here?
          </div>
          <div
            style={{
              maxWidth: 900,
              color: "#e2dacb",
              fontSize: 30,
              lineHeight: 1.35,
            }}
          >
            Western New York&apos;s documented industrial and environmental
            history
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#dfc6b8",
            fontSize: 22,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Evidence · History · Cleanup · Recovery
        </div>
      </div>
    ),
    size,
  );
}
