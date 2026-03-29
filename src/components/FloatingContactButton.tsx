import { WHATSAPP_HREF } from "@/constants/contact";

/** Material-style contact / support icon (inline so it always matches design; avoids stale public/ cache). */
function FloatingContactIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 -960 960 960"
      fill="#e3e3e3"
      className="size-6 shrink-0"
      aria-hidden
    >
      <path d="M675-755q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35ZM80-80v-720q0-33 23.5-56.5T160-880h404q-4 20-4 40t4 40q5 23 14 43t22 37H240v80h520q32 0 63-10t57-30v360q0 33-23.5 56.5T800-240H240L80-80Zm160-440h480v-80H240v80Zm0 120h320v-80H240v80Z" />
    </svg>
  );
}

/**
 * Floating “Contact Us” — opens WhatsApp. Icon inlined so the correct glyph always ships with the component.
 */
export default function FloatingContactButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us"
      className="fixed right-4 z-40 inline-flex items-center gap-2 rounded-full bg-secondary-300 px-4 py-3 text-base font-normal leading-6 text-neutral-100 shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-colors duration-200 hover:bg-secondary-100 active:bg-secondary-500 sm:right-6 sm:px-5 motion-reduce:transition-none bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))]"
    >
      <FloatingContactIcon />
      <span>Contact Us</span>
    </a>
  );
}
