import PlatformIcon from './PlatformIcon.jsx'

export default function WhatsAppButton({ link }) {
  return (
    <a
      className="whatsapp-button group fixed z-20 flex size-[58px] items-center justify-center rounded-full"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Trenvo Media on WhatsApp (opens in a new tab)"
      data-link-id={link.id}
      data-platform={link.platform}
    >
      <PlatformIcon platform="whatsapp" className="size-7" />
      <span className="whatsapp-tooltip pointer-events-none absolute right-0 bottom-[calc(100%+14px)] whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium" aria-hidden="true">
        Let’s talk on WhatsApp
      </span>
    </a>
  )
}
