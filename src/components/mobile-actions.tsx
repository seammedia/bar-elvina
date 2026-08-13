import { BOOKING_URL, BUSINESS } from "@/lib/config";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Level+One%2C+50+Old+Barrenjoey+Rd%2C+Avalon+Beach+NSW+2107";

export function MobileActions() {
  return (
    <nav className="mobile-actions" aria-label="Quick actions">
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book</a>
      <a href={`tel:${BUSINESS.phoneTel}`}>Call</a>
      <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">Directions</a>
    </nav>
  );
}
