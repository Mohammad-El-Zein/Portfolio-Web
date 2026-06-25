const PARTICLES = Array.from({ length: 24 }).map((_, i) => ({
  left: `${(i * 4.2) % 100}%`,
  size: 2 + ((i * 7) % 4),
  duration: 18 + ((i * 5) % 22),
  delay: -(i * 1.7),
  drift: `${((i % 2 === 0 ? 1 : -1) * (10 + (i * 3) % 30))}px`,
}));

export function SiteBackground() {
  return (
    <div aria-hidden className="site-background">
      <div className="mesh-blob mesh-blob-1" />
      <div className="mesh-blob mesh-blob-2" />
      <div className="mesh-blob mesh-blob-3" />
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="bg-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `particle-float ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            ["--drift" as string]: p.drift,
          }}
        />
      ))}
    </div>
  );
}
