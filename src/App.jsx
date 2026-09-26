import BrandHeader from './components/BrandHeader.jsx'
import SocialLink from './components/SocialLink.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import { mainLinks, whatsappLink } from './data/links.js'

export default function App() {
  return (
    <div className="page-shell relative isolate min-h-svh overflow-x-clip">
      <div className="page-atmosphere pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="background-frame background-frame-left" />
        <div className="background-frame background-frame-right" />
      </div>
      <main className="mx-auto w-full max-w-[650px] px-5 pb-8 pt-10 sm:px-7 sm:pt-14">
        <BrandHeader />
        <nav aria-label="Connect with Trenvo Media" className="links-enter mt-8 sm:mt-9">
          <ul className="flex flex-col gap-3">
            {mainLinks.map((link) => <li key={link.id}><SocialLink link={link} /></li>)}
          </ul>
        </nav>
        <footer className="footer-space mt-9 text-center text-sm tracking-wide text-muted sm:text-[15px]">
          <span className="footer-line mx-auto mb-5 block h-px w-8" aria-hidden="true" />
          © {new Date().getFullYear()} Trenvo Media
        </footer>
      </main>
      <WhatsAppButton link={whatsappLink} />
    </div>
  )
}
