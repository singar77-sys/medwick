// Geometric ornament system — builder's-craft line work on golden-ratio math.
// All dimensions are Fibonacci numbers (21, 34, 55, 89, 144, 233, 377, 610).
// Stroke-only, currentColor, so ornaments inherit gold-on-navy or navy-on-paper.

// Golden-spiral construction diagram: a true φ rectangle (610×377) subdivided
// into Fibonacci squares with the quarter-arc spiral. Hero watermark.
export function GoldenSpiral({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 610 377"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="609" height="376" />
      <line x1="377" y1="0" x2="377" y2="377" />
      <line x1="377" y1="233" x2="610" y2="233" />
      <line x1="466" y1="233" x2="466" y2="377" />
      <line x1="377" y1="288" x2="466" y2="288" />
      <line x1="432" y1="233" x2="432" y2="288" />
      <path d="M 0 377 A 377 377 0 0 1 377 0 A 233 233 0 0 1 610 233 A 144 144 0 0 1 466 377 A 89 89 0 0 1 377 288 A 55 55 0 0 1 432 233" />
    </svg>
  );
}

// Section divider: compasses angle over inverted square angle with the point
// of a plumb line between — abstract builder's geometry, centered.
export function Divider({ className }) {
  return (
    <div className={`ornament-divider ${className || ''}`} aria-hidden="true">
      <span className="rule" />
      <svg viewBox="0 0 55 34" fill="none" stroke="currentColor" strokeWidth="1.5" width="55" height="34">
        <circle cx="27.5" cy="8" r="3" />
        <path d="M 24.5 10.5 L 13 27 M 30.5 10.5 L 42 27" />
        <path d="M 16 7 L 27.5 23.5 L 39 7" opacity="0.55" />
        <line x1="27.5" y1="23.5" x2="27.5" y2="31" opacity="0.55" />
      </svg>
      <span className="rule" />
    </div>
  );
}

// The three trades as alchemical / Bauhaus primaries.
// Fire-triangle reads as a roof gable; ▽ is the alchemical sign for water;
// the square is the builder's true and stable form.
export function TriangleGlyph(props) {
  return (
    <svg viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" {...props} aria-hidden="true">
      <path d="M 17 4 L 31 29 L 3 29 Z" />
      <path d="M 17 12 L 24.5 25.5 L 9.5 25.5 Z" opacity="0.45" />
    </svg>
  );
}

export function InvertedTriangleGlyph(props) {
  return (
    <svg viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" {...props} aria-hidden="true">
      <path d="M 3 5 L 31 5 L 17 30 Z" />
      <path d="M 9.5 8.5 L 24.5 8.5 L 17 22 Z" opacity="0.45" />
    </svg>
  );
}

export function SquareGlyph(props) {
  return (
    <svg viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" {...props} aria-hidden="true">
      <rect x="4" y="4" width="26" height="26" />
      <rect x="10" y="10" width="14" height="14" opacity="0.45" />
    </svg>
  );
}

// The circle: the whole, the advocacy that contains the trades.
export function CircleGlyph(props) {
  return (
    <svg viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" {...props} aria-hidden="true">
      <circle cx="17" cy="17" r="13" />
      <circle cx="17" cy="17" r="7" opacity="0.45" />
    </svg>
  );
}

// The level: balance, the fair scope. (Insurance-claim advocacy.)
export function LevelGlyph(props) {
  return (
    <svg viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" {...props} aria-hidden="true">
      <path d="M 5 27 L 17 6 L 29 27 Z" />
      <line x1="9" y1="20" x2="25" y2="20" />
      <line x1="17" y1="20" x2="17" y2="27" opacity="0.55" />
    </svg>
  );
}

// The compass rose / radiant star: the storm and the response. (Storm hub.)
export function StarGlyph(props) {
  return (
    <svg viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" {...props} aria-hidden="true">
      <path d="M 17 3 L 20 14 L 31 17 L 20 20 L 17 31 L 14 20 L 3 17 L 14 14 Z" />
      <circle cx="17" cy="17" r="3.5" opacity="0.55" />
    </svg>
  );
}

// The MW monogram (client-supplied mark, rebuilt as stroke geometry):
// M above, W below, the central diamond born where the two letters
// interlock. Sharp miters, single-weight line, currentColor.
export function MWMonogram(props) {
  return (
    <svg
      viewBox="0 0 240 252"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeMiterlimit="8"
      {...props}
      aria-hidden="true"
    >
      {/* M: two peaks whose inner strokes cross to form the diamond's upper edges */}
      <path d="M 60 142 L 60 46 L 148 140" />
      <path d="M 180 142 L 180 46 L 92 140" />
      {/* diamond lower edges */}
      <path d="M 92 140 L 120 170 L 148 140" />
      {/* W: flared outer arms down to the points, inner arms rising under the
          diamond, then the narrow center V dropping to the lowest point */}
      <path d="M 28 146 L 50 146 L 86 236 L 114 178 L 120 244" />
      <path d="M 212 146 L 190 146 L 154 236 L 126 178 L 120 244" />
    </svg>
  );
}

// The keystone: the final stone that locks the arch. (Reconstruction / completion.)
export function KeystoneGlyph(props) {
  return (
    <svg viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" {...props} aria-hidden="true">
      <path d="M 11 5 L 23 5 L 27 29 L 7 29 Z" />
      <line x1="12.5" y1="14" x2="21.5" y2="14" opacity="0.45" />
      <line x1="12" y1="20" x2="22" y2="20" opacity="0.45" />
    </svg>
  );
}
