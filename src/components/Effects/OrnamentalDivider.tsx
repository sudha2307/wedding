/** Delicate ornamental divider: gold flourishes around a blush lotus motif. */
export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-3 text-gold ${className}`}
    >
      <svg width="120" height="14" viewBox="0 0 120 14" fill="none" className="opacity-80">
        <line x1="0" y1="7" x2="96" y2="7" stroke="currentColor" strokeWidth="1" className="text-gold-soft" />
        <circle cx="104" cy="7" r="2.4" fill="currentColor" className="text-rose" />
        <circle cx="112" cy="7" r="1.4" fill="currentColor" />
      </svg>
      <svg width="30" height="26" viewBox="0 0 30 26" fill="none" className="text-rose">
        <path
          d="M15 2c2.6 3.2 6.4 4.2 8.4 8.2 2.2 4.4-1 11.8-8.4 13.8C7.6 22 4.4 14.6 6.6 10.2 8.6 6.2 12.4 5.2 15 2Z"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="rgba(232,93,142,0.08)"
        />
        <circle cx="15" cy="12.5" r="2.2" fill="currentColor" opacity="0.7" />
      </svg>
      <svg width="120" height="14" viewBox="0 0 120 14" fill="none" className="scale-x-[-1] opacity-80">
        <line x1="0" y1="7" x2="96" y2="7" stroke="currentColor" strokeWidth="1" className="text-gold-soft" />
        <circle cx="104" cy="7" r="2.4" fill="currentColor" className="text-rose" />
        <circle cx="112" cy="7" r="1.4" fill="currentColor" />
      </svg>
    </div>
  );
}
