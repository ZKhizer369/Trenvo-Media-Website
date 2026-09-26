import PlatformIcon, { ArrowIcon } from './PlatformIcon.jsx'

export default function SocialLink({ link }) {
  return (
    <a
      className="social-link group relative flex min-h-[92px] w-full items-center gap-3 rounded-2xl px-4 sm:min-h-[100px] sm:gap-4 sm:px-5"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.label} (opens in a new tab)`}
      data-link-id={link.id}
      data-platform={link.platform}
    >
      <span className="platform-icon flex size-10 shrink-0 items-center justify-center rounded-xl">
        <PlatformIcon platform={link.platform} className="size-[21px]" />
      </span>
      <span className="relative flex-1">
        <span className="featured-eyebrow mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-[11px]">{link.eyebrow}</span>
        <span className="block text-[19px] font-semibold tracking-[-0.02em] sm:text-[21px]">{link.label}</span>
      </span>
      <ArrowIcon className="link-arrow relative size-[18px] shrink-0" />
    </a>
  )
}
