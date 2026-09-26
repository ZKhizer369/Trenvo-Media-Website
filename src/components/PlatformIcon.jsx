export default function PlatformIcon({ platform, className = '' }) {
  const shared = { className, viewBox: '0 0 24 24', 'aria-hidden': true, focusable: false }
  if (platform === 'website') return (
    <svg {...shared} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18M4.6 7.5h14.8M4.6 16.5h14.8" />
    </svg>
  )
  if (platform === 'instagram') return (
    <svg {...shared} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
  const paths = {
    facebook: 'M13.7 22v-9.1h3.1l.5-3.6h-3.6V7c0-1 .3-1.7 1.8-1.7h1.9V2.1C17.1 2 16 2 14.8 2c-2.7 0-4.5 1.6-4.5 4.6v2.7h-3v3.6h3V22h3.4Z',
    linkedin: 'M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.6v12H3.4V9Zm5.8 0h3.5v1.6h.1a3.9 3.9 0 0 1 3.5-1.9c3.8 0 4.5 2.4 4.5 5.5V21h-3.6v-6c0-1.4 0-3.2-2-3.2s-2.4 1.5-2.4 3.1V21H9.2V9Z',
    tiktok: 'M16.4 2c.3 2.5 1.7 4 4.1 4.2v3.3a8 8 0 0 1-4.1-1.2v7.1a6.4 6.4 0 1 1-5.5-6.3v3.4a3.1 3.1 0 1 0 2.1 2.9V2h3.4Z',
    x: 'M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.7-8.9L2 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.5 3.9H5.7L17.8 20Z',
    whatsapp: 'M20.5 3.5A11.9 11.9 0 0 0 1.8 17.8L.1 24l6.3-1.7A11.9 11.9 0 0 0 24 11.9c0-3.2-1.2-6.2-3.5-8.4ZM12.1 22a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.7-.2-.4A9.9 9.9 0 1 1 12.1 22Zm5.4-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.8 2-1.5.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z',
  }
  return <svg {...shared} fill="currentColor"><path d={paths[platform]} /></svg>
}

export function ArrowIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  )
}
