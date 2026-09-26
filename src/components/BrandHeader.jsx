import logo from '../assets/branding/logo.svg'

export default function BrandHeader() {
  return (
    <header className="brand-enter text-center">
      <div className="brand-mark mx-auto mb-6 size-[112px] min-[380px]:size-[128px] sm:size-[144px] lg:size-[160px]">
        <img src={logo} alt="Trenvo Media logo" width="2048" height="2048" className="block h-full w-full object-contain" fetchPriority="high" />
      </div>
      <h1 className="text-[2.375rem] font-bold leading-none tracking-[-0.055em] text-navy min-[380px]:text-[2.75rem] sm:text-[3.125rem]">
        Trenvo Media<span className="text-brand-blue">.</span>
      </h1>
      <p className="mt-4 text-[16px] leading-relaxed text-muted sm:text-[18px]">Connect with Trenvo Media</p>
    </header>
  )
}
