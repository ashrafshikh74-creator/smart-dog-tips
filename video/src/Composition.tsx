import {
  AbsoluteFill,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Img,
  Sequence,
} from "remotion";
import React from "react";

// ─── Helpers ────────────────────────────────────────────────────────────────

function useFadeIn(startFrame: number, durationFrames = 15) {
  const frame = useCurrentFrame();
  return interpolate(frame - startFrame, [0, durationFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function useSlideUp(startFrame: number, fps: number) {
  const frame = useCurrentFrame();
  const progress = spring({
    fps,
    frame: frame - startFrame,
    config: { damping: 14, stiffness: 120 },
  });
  return interpolate(progress, [0, 1], [60, 0]);
}

// ─── Scene 1 – Problem hook (0-5s, frames 0-149) ────────────────────────────

const SceneProblem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1Opacity = useFadeIn(0);
  const line1Y = useSlideUp(0, fps);

  const line2Opacity = useFadeIn(20);
  const line2Y = useSlideUp(20, fps);

  const line3Opacity = useFadeIn(50);
  const line3Y = useSlideUp(50, fps);

  const pulseScale = 1 + 0.04 * Math.sin((frame / fps) * 2 * Math.PI * 1.2);

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(ellipse at center, #0d0d1a 0%, #000000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 60px",
      }}
    >
      {/* Pulsing red glow circle */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(220,30,30,0.15) 0%, transparent 70%)",
          transform: `scale(${pulseScale})`,
        }}
      />

      {/* Battery dead emoji */}
      <div
        style={{
          fontSize: 180,
          marginBottom: 40,
          opacity: useFadeIn(0),
          filter: "drop-shadow(0 0 30px rgba(255,0,0,0.4))",
        }}
      >
        🔋
      </div>

      <div
        style={{
          fontSize: 68,
          fontWeight: 900,
          color: "#FFFFFF",
          textAlign: "center",
          lineHeight: 1.2,
          opacity: line1Opacity,
          transform: `translateY(${line1Y}px)`,
          fontFamily: "'Arial Black', sans-serif",
          textShadow: "0 0 30px rgba(255,80,80,0.6)",
        }}
      >
        Dead Battery.
      </div>

      <div
        style={{
          fontSize: 68,
          fontWeight: 900,
          color: "#FF4444",
          textAlign: "center",
          lineHeight: 1.2,
          marginTop: 16,
          opacity: line2Opacity,
          transform: `translateY(${line2Y}px)`,
          fontFamily: "'Arial Black', sans-serif",
        }}
      >
        No Backup.
      </div>

      <div
        style={{
          fontSize: 50,
          fontWeight: 700,
          color: "#AAAAAA",
          textAlign: "center",
          marginTop: 40,
          opacity: line3Opacity,
          transform: `translateY(${line3Y}px)`,
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.4,
        }}
      >
        Camping · Power Outage · Road Trip{"\n"}We've all been there.
      </div>
    </AbsoluteFill>
  );
};

// ─── Scene 2 – Product Reveal (5-10s, frames 150-299) ───────────────────────

const SceneReveal: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const imgScale = spring({ fps, frame, config: { damping: 18, stiffness: 100 } });
  const imgFinal = interpolate(imgScale, [0, 1], [0.6, 1]);

  const textOpacity = useFadeIn(20);
  const textY = useSlideUp(20, fps);

  const glowPulse = 0.7 + 0.3 * Math.sin((frame / fps) * 2 * Math.PI);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0a0a1f 0%, #001133 60%, #002255 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 40px",
      }}
    >
      {/* Glow behind product */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0,140,255,${glowPulse * 0.25}) 0%, transparent 70%)`,
          top: "30%",
          transform: "translateY(-50%)",
        }}
      />

      {/* Small intro label */}
      <div
        style={{
          fontSize: 36,
          color: "#4DB8FF",
          fontWeight: 700,
          letterSpacing: 4,
          marginBottom: 30,
          opacity: useFadeIn(5),
          fontFamily: "Arial, sans-serif",
          textTransform: "uppercase",
        }}
      >
        ⚡ The Solution
      </div>

      {/* Product image */}
      <div
        style={{
          transform: `scale(${imgFinal})`,
          width: 860,
          height: 860,
          borderRadius: 32,
          overflow: "hidden",
          boxShadow: `0 0 60px rgba(0,140,255,${glowPulse * 0.5}), 0 30px 80px rgba(0,0,0,0.8)`,
        }}
      >
        <Img
          src={staticFile("product-main.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 60,
          fontWeight: 900,
          color: "#FFFFFF",
          textAlign: "center",
          marginTop: 50,
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          fontFamily: "'Arial Black', sans-serif",
          lineHeight: 1.2,
        }}
      >
        Portable Power{"\n"}
        <span style={{ color: "#4DB8FF" }}>Station</span>
      </div>

      <div
        style={{
          fontSize: 40,
          color: "#AACCFF",
          marginTop: 16,
          opacity: textOpacity,
          fontFamily: "Arial, sans-serif",
        }}
      >
        296Wh • 80,000mAh
      </div>
    </AbsoluteFill>
  );
};

// ─── Scene 3 – Power 13 Devices (10-15s, frames 300-449) ────────────────────

const Scene13Devices: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const imgOpacity = useFadeIn(0);
  const titleOpacity = useFadeIn(10);
  const titleY = useSlideUp(10, fps);

  const items = [
    { icon: "🔌", label: "4× AC Outlets", sub: "300W Max" },
    { icon: "⚡", label: "USB-C PD", sub: "100W" },
    { icon: "🚗", label: "Car Charger", sub: "150W" },
    { icon: "📱", label: "USB Quick Charge", sub: "18W" },
    { icon: "🔋", label: "DC Output", sub: "180W" },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #001a33 0%, #002244 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 40px",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: 72,
          fontWeight: 900,
          color: "#FFFFFF",
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontFamily: "'Arial Black', sans-serif",
          marginTop: 40,
        }}
      >
        Power{" "}
        <span
          style={{
            color: "#FFD700",
            textShadow: "0 0 20px rgba(255,215,0,0.6)",
          }}
        >
          13
        </span>{" "}
        Devices
      </div>
      <div
        style={{
          fontSize: 40,
          color: "#88BBFF",
          opacity: titleOpacity,
          marginTop: 8,
          fontFamily: "Arial, sans-serif",
        }}
      >
        at the same time
      </div>

      {/* Product ports image */}
      <div
        style={{
          width: 900,
          height: 520,
          borderRadius: 24,
          overflow: "hidden",
          marginTop: 40,
          opacity: imgOpacity,
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        }}
      >
        <Img
          src={staticFile("product-ports.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Feature pills */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          marginTop: 40,
          width: "100%",
        }}
      >
        {items.map((item, i) => {
          const itemOpacity = interpolate(
            frame,
            [20 + i * 12, 35 + i * 12],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const itemX = interpolate(
            frame,
            [20 + i * 12, 35 + i * 12],
            [-40, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "18px 28px",
                opacity: itemOpacity,
                transform: `translateX(${itemX}px)`,
                border: "1px solid rgba(77,184,255,0.2)",
              }}
            >
              <span style={{ fontSize: 40, marginRight: 20 }}>{item.icon}</span>
              <div>
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: 28,
                    color: "#4DB8FF",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {item.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ─── Scene 4 – Capacity & Use Cases (15-21s, frames 450-629) ────────────────

const SceneCapacity: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const titleOpacity = useFadeIn(0);
  const titleY = useSlideUp(0, fps);
  const imgOpacity = useFadeIn(10);

  const stats = [
    { emoji: "💡", label: "Camping Light", value: "24 hrs" },
    { emoji: "📱", label: "Smartphone", value: "22 charges" },
    { emoji: "💻", label: "Laptop", value: "5 charges" },
    { emoji: "🌬️", label: "Electric Fan", value: "5 hrs" },
    { emoji: "🚁", label: "Drone", value: "6 hrs" },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #001533 0%, #002244 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 40px",
      }}
    >
      <div
        style={{
          fontSize: 58,
          fontWeight: 900,
          color: "#FFFFFF",
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontFamily: "'Arial Black', sans-serif",
          marginTop: 20,
        }}
      >
        <span style={{ color: "#FFD700" }}>296Wh</span> Capacity
      </div>
      <div
        style={{
          fontSize: 34,
          color: "#88BBFF",
          marginTop: 8,
          opacity: titleOpacity,
          fontFamily: "Arial, sans-serif",
        }}
      >
        Power everything you need
      </div>

      <div
        style={{
          width: 900,
          height: 480,
          borderRadius: 24,
          overflow: "hidden",
          marginTop: 36,
          opacity: imgOpacity,
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        }}
      >
        <Img
          src={staticFile("product-capacity.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginTop: 36,
          width: "100%",
        }}
      >
        {stats.map((s, i) => {
          const op = interpolate(frame, [15 + i * 10, 30 + i * 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "16px 20px",
                opacity: op,
                border: "1px solid rgba(77,184,255,0.2)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 36 }}>{s.emoji}</div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#4DB8FF",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 22,
                  color: "#AAAAAA",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ─── Scene 5 – 3 Ways to Charge (21-25s, frames 630-749) ────────────────────

const SceneCharging: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const titleOpacity = useFadeIn(0);
  const titleY = useSlideUp(0, fps);

  const methods = [
    { icon: "🔌", title: "Wall Outlet", detail: "5-6 Hours Fast Charge" },
    { icon: "☀️", title: "Solar Panel", detail: "5-10 Hours (66W)" },
    { icon: "🚗", title: "Car Port", detail: "6-7 Hours" },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #001a33 0%, #00113a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 40px",
      }}
    >
      <div
        style={{
          fontSize: 62,
          fontWeight: 900,
          color: "#FFFFFF",
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontFamily: "'Arial Black', sans-serif",
          marginTop: 40,
        }}
      >
        <span style={{ color: "#4DB8FF" }}>3 Ways</span> to Recharge
      </div>
      <div
        style={{
          fontSize: 34,
          color: "#88BBFF",
          opacity: titleOpacity,
          marginTop: 8,
          fontFamily: "Arial, sans-serif",
        }}
      >
        80% in just 2 hours
      </div>

      <div
        style={{
          width: 900,
          height: 520,
          borderRadius: 24,
          overflow: "hidden",
          marginTop: 50,
          boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
          opacity: useFadeIn(8),
        }}
      >
        <Img
          src={staticFile("product-charging.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginTop: 50,
          width: "100%",
        }}
      >
        {methods.map((m, i) => {
          const op = interpolate(frame, [20 + i * 15, 35 + i * 15], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const scale = interpolate(frame, [20 + i * 15, 35 + i * 15], [0.8, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(77,184,255,0.1)",
                borderRadius: 20,
                padding: "22px 32px",
                opacity: op,
                transform: `scale(${scale})`,
                border: "1px solid rgba(77,184,255,0.3)",
              }}
            >
              <span style={{ fontSize: 48, marginRight: 24 }}>{m.icon}</span>
              <div>
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {m.title}
                </div>
                <div
                  style={{
                    fontSize: 28,
                    color: "#4DB8FF",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {m.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ─── Scene 6 – Use Cases (25-28s, frames 750-839) ───────────────────────────

const SceneUseCases: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const titleOpacity = useFadeIn(0);
  const titleY = useSlideUp(0, fps);
  const imgOpacity = useFadeIn(10);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #001122 0%, #002233 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 40px",
      }}
    >
      <div
        style={{
          fontSize: 60,
          fontWeight: 900,
          color: "#FFFFFF",
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontFamily: "'Arial Black', sans-serif",
          lineHeight: 1.2,
        }}
      >
        Ready for{" "}
        <span style={{ color: "#4DB8FF" }}>Any</span>{" "}
        Situation
      </div>

      <div
        style={{
          width: 900,
          height: 900,
          borderRadius: 32,
          overflow: "hidden",
          marginTop: 50,
          opacity: imgOpacity,
          boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
        }}
      >
        <Img
          src={staticFile("product-usecases.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 40,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {["🏕️ Camping", "🚨 Emergency", "🚐 RV Travel", "💼 Work"].map(
          (tag, i) => {
            const op = interpolate(frame, [15 + i * 8, 28 + i * 8], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={i}
                style={{
                  background: "rgba(77,184,255,0.15)",
                  border: "2px solid #4DB8FF",
                  borderRadius: 50,
                  padding: "14px 28px",
                  fontSize: 32,
                  color: "#FFFFFF",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 700,
                  opacity: op,
                }}
              >
                {tag}
              </div>
            );
          }
        )}
      </div>
    </AbsoluteFill>
  );
};

// ─── Scene 7 – CTA (28-30s, frames 840-899) ─────────────────────────────────

const SceneCTA: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const pulse = 1 + 0.04 * Math.sin((frame / fps) * 2 * Math.PI * 2);
  const fadeIn = useFadeIn(0);
  const titleY = useSlideUp(0, fps);

  const linkOpacity = useFadeIn(15);
  const linkScale = spring({ fps, frame: frame - 15, config: { damping: 12, stiffness: 150 } });
  const linkScaleFinal = interpolate(linkScale, [0, 1], [0.7, 1]);

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(ellipse at center, #001a3a 0%, #000000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 40px",
      }}
    >
      {/* Animated ring */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          border: "3px solid rgba(77,184,255,0.2)",
          transform: `scale(${pulse})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          border: "2px solid rgba(77,184,255,0.1)",
          transform: `scale(${pulse * 0.95})`,
        }}
      />

      {/* Product image small */}
      <div
        style={{
          width: 480,
          height: 480,
          borderRadius: "50%",
          overflow: "hidden",
          border: "6px solid #4DB8FF",
          boxShadow: "0 0 60px rgba(77,184,255,0.6)",
          opacity: fadeIn,
          marginBottom: 50,
        }}
      >
        <Img
          src={staticFile("product-main.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div
        style={{
          fontSize: 68,
          fontWeight: 900,
          color: "#FFFFFF",
          textAlign: "center",
          lineHeight: 1.2,
          opacity: fadeIn,
          transform: `translateY(${titleY}px)`,
          fontFamily: "'Arial Black', sans-serif",
        }}
      >
        Never Run Out
        <br />
        <span style={{ color: "#4DB8FF" }}>of Power Again</span>
      </div>

      {/* CTA Button */}
      <div
        style={{
          marginTop: 60,
          background: "linear-gradient(135deg, #4DB8FF, #0066CC)",
          borderRadius: 60,
          padding: "28px 60px",
          opacity: linkOpacity,
          transform: `scale(${linkScaleFinal})`,
          boxShadow: "0 0 40px rgba(77,184,255,0.5), 0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: "#FFFFFF",
            fontFamily: "'Arial Black', sans-serif",
            letterSpacing: 1,
          }}
        >
          🔗 Link in Bio
        </div>
      </div>

      <div
        style={{
          fontSize: 32,
          color: "#668899",
          marginTop: 30,
          opacity: linkOpacity,
          fontFamily: "Arial, sans-serif",
        }}
      >
        Get yours today ↑
      </div>
    </AbsoluteFill>
  );
};

// ─── Main Composition ────────────────────────────────────────────────────────

export const PowerStationVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "#000000" }}>
      {/* Scene 1: Problem hook – 0s to 5s (0-149) */}
      <Sequence from={0} durationInFrames={150}>
        <SceneProblem />
      </Sequence>

      {/* Scene 2: Product reveal – 5s to 10s (150-299) */}
      <Sequence from={150} durationInFrames={150}>
        <SceneReveal />
      </Sequence>

      {/* Scene 3: 13 devices – 10s to 15s (300-449) */}
      <Sequence from={300} durationInFrames={150}>
        <Scene13Devices />
      </Sequence>

      {/* Scene 4: Capacity – 15s to 21s (450-629) */}
      <Sequence from={450} durationInFrames={180}>
        <SceneCapacity />
      </Sequence>

      {/* Scene 5: Charging – 21s to 25s (630-749) */}
      <Sequence from={630} durationInFrames={120}>
        <SceneCharging />
      </Sequence>

      {/* Scene 6: Use cases – 25s to 28s (750-839) */}
      <Sequence from={750} durationInFrames={90}>
        <SceneUseCases />
      </Sequence>

      {/* Scene 7: CTA – 28s to 30s (840-899) */}
      <Sequence from={840} durationInFrames={60}>
        <SceneCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
