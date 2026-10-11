// Et enkelt etiopisk kors: fire armer med ringer i endene og en rute i midten.
export function Kors({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M12 4.6v4.1M12 15.3v4.1M4.6 12h4.1M15.3 12h4.1" />
      <circle cx="12" cy="3" r="1.6" />
      <circle cx="12" cy="21" r="1.6" />
      <circle cx="3" cy="12" r="1.6" />
      <circle cx="21" cy="12" r="1.6" />
      <path d="M12 8.7 15.3 12 12 15.3 8.7 12Z" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8.2 8.2 9.6 9.6M15.8 8.2 14.4 9.6M8.2 15.8 9.6 14.4M15.8 15.8 14.4 14.4" strokeWidth="1" />
    </svg>
  );
}
