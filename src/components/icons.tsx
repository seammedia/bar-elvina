export function ForumLogo({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18 Q14 12, 22 12 Q26 12, 26 16 Q26 20, 22 20 Q26 20, 26 24" />
      <path d="M46 18 Q46 12, 38 12 Q34 12, 34 16 Q34 20, 38 20 Q34 20, 34 24" />
      <line x1="12" y1="24" x2="48" y2="24" />
      <line x1="20" y1="24" x2="20" y2="46" />
      <line x1="40" y1="24" x2="40" y2="46" />
      <line x1="26" y1="24" x2="26" y2="46" strokeWidth="1.2" opacity="0.55" />
      <line x1="34" y1="24" x2="34" y2="46" strokeWidth="1.2" opacity="0.55" />
      <line x1="30" y1="24" x2="30" y2="46" strokeWidth="1.2" opacity="0.55" />
      <line x1="12" y1="46" x2="48" y2="46" />
      <line x1="10" y1="50" x2="50" y2="50" />
    </svg>
  );
}

export function Arrow({ size = 12 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

export function IconCoffee({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h13v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
      <path d="M16 10h2a3 3 0 0 1 0 6h-2" />
      <path d="M6 4c0 1 1 1 1 2s-1 1-1 2M10 4c0 1 1 1 1 2s-1 1-1 2M14 4c0 1 1 1 1 2s-1 1-1 2" />
    </svg>
  );
}

export function IconPastry({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14c0-4 3-7 8-7s8 3 8 7c0 1.5-1 3-3 3H7c-2 0-3-1.5-3-3z" />
      <path d="M8 11c1-1 2-1 3 0M13 11c1-1 2-1 3 0" />
      <line x1="6" y1="17" x2="18" y2="17" />
    </svg>
  );
}

export function IconSmoothie({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 8h10l-1 12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2L7 8z" />
      <line x1="6" y1="8" x2="18" y2="8" />
      <path d="M11 5v3M11 5c0-1 1-2 2-2" />
    </svg>
  );
}

export function IconJuice({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="6" width="8" height="15" rx="1" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <path d="M10 6V4h4v2" />
    </svg>
  );
}

export function IconFood({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14c0-3 4-6 9-6s9 3 9 6H3z" />
      <line x1="3" y1="17" x2="21" y2="17" />
      <path d="M9 10c0-1 1-2 3-2s3 1 3 2" />
    </svg>
  );
}

export function IconShake({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 9h10l-1 11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2L7 9z" />
      <path d="M7 9c0-2 2-4 5-4s5 2 5 4" />
      <path d="M11 3c0 1 1 1 1 2" />
    </svg>
  );
}

export function IconStar({ size = 14, filled = true }: { size?: number; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
    </svg>
  );
}

export function IconPin({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-7-7-7-13a7 7 0 0 1 14 0c0 6-7 13-7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function IconClock({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12,7 12,12 16,14" />
    </svg>
  );
}

export function IconPhone({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function IconMail({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3,7 12,13 21,7" />
    </svg>
  );
}

export function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function IconFacebook({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2a1 1 0 0 1 1-1z" />
    </svg>
  );
}
