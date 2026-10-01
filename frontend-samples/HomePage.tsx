{/* ── Sticky Navbar ──────────────────────────────────────────────── */}
      <nav
  className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  style={{
    background: scrolled ? 'rgba(8,8,8,0.88)' : 'rgba(0,0,0,0.08)',
    backdropFilter: scrolled ? 'blur(14px)' : 'blur(4px)',
    borderBottom: '1px solid rgba(255,255,255,0.12)',
  }}
>
  <div className="max-w-7xl mx-auto px-5 sm:px-8 py-2.5 md:py-4 flex items-center justify-between">

    {/* Brand */}
    <button
      onClick={() => scrollTo('hero')}
      className="flex items-center gap-1.5 text-white hover:opacity-80 transition-opacity"
    >
      <img
        src="/images/performa-white-logo.png"
        alt="Performa"
        className="h-8 w-auto object-contain md:h-11"
      />

      <span className="font-black text-lg md:text-xl tracking-[0.18em] uppercase">
        PERFORMA
      </span>
    </button>

    {/* Desktop nav */}
    <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-white/80">
      <button
        onClick={() => scrollTo('hero')}
        className="relative uppercase hover:text-white transition-colors after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
      >
        Home
      </button>

      <button
        onClick={() => scrollTo('first-drop')}
        className="relative uppercase hover:text-white transition-colors after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
      >
        First Drop
      </button>

      <button
        onClick={() => scrollTo('about')}
        className="relative uppercase hover:text-white transition-colors after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
      >
        About
      </button>

      <button
        onClick={() => scrollTo('contact')}
        className="relative uppercase hover:text-white transition-colors after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
      >
        Contact
      </button>
    </div>

    {/* Right side */}
    <div className="flex items-center gap-3">

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
            menuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
            menuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
            menuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>
    </div>
  </div>

  {/* Mobile menu */}
  {menuOpen && (
    <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-5 py-6 flex flex-col gap-5">
      {[
        { label: 'Home', id: 'hero' },
        { label: 'First Drop', id: 'first-drop' },
        { label: 'About', id: 'about' },
        { label: 'Contact', id: 'contact' },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="text-left text-zinc-300 hover:text-white text-sm font-semibold uppercase tracking-widest transition-colors"
        >
          {item.label}
        </button>
      ))}
    </div>
  )}
</nav>

{/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
  id="hero"
  className="relative min-h-screen overflow-hidden bg-black"
>
  {/* New hero background image */}
  <picture className="absolute inset-0">
  <source
    media="(max-width: 767px)"
    srcSet="/images/Background-performa-sunset-mobile.png"
  />
  <img
    src="/images/Background-performa-sunset.png"
    alt=""
    className="absolute inset-0 h-full w-full object-cover object-center"
  />
  </picture>

  {/* Light overlay for contrast */}
<div className="absolute inset-0 bg-black/15 pointer-events-none" />

{/* Clickable buttons overlay */}
<div className="relative z-20 flex min-h-screen items-center">
  <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

    <div className="max-w-xl pt-40 sm:pt-32">
      <div
  className="
    absolute left-6 top-[34%] z-20
    flex w-[46%] max-w-[300px] flex-col gap-2
    sm:static sm:w-auto sm:max-w-none sm:flex-row sm:gap-4
  "
>
        <button
  onClick={() => scrollTo('first-drop')}
  className="
    w-full rounded-full bg-white
    px-3 py-2
    text-[11px] font-bold uppercase tracking-[0.12em] text-black
    transition hover:bg-zinc-200
    sm:w-auto sm:px-8 md:py-4 sm:text-sm
  "
>
  Shop First Drop →
</button>

<Link
  to="/products/$productId"
  params={{ productId: '1200' }}
  className="
    w-full rounded-full border border-white/80 bg-black/20
    px-3 py-2
    text-[11px] font-bold uppercase tracking-[0.12em] text-white
    backdrop-blur-sm transition hover:bg-white hover:text-black
    sm:w-auto sm:px-8 sm:py-4 sm:text-sm
  "
>
  Explore Colors →
</Link>
      </div>
    </div>

  </div>
</div>

  {/* Scroll indicator */}
  <div
    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
    style={{ animation: 'bounce 2s infinite' }}
  >
    <div className="w-px h-12 bg-gradient-to-b from-transparent to-zinc-400" />
  </div>
</section>

{/* ── Product Preview ────────────────────────────────────────────── */}
      <section id="first-drop" className="py-28 px-5 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.4em] text-zinc-500 uppercase mb-5">First Drop</p>
          </RevealSection>
          <RevealSection delay={100}>
            <h2
              className="font-black uppercase leading-none mb-6 text-white"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', letterSpacing: '-0.02em' }}
            >
              The First Drop.
            </h2>
          </RevealSection>
          <RevealSection delay={180}>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-14">
              Our debut product is a premium water bottle — engineered for performance, designed for lifestyle. Clean lines, premium materials, built to carry you through every part of your day.
            </p>
          </RevealSection>

          <RevealSection delay={260}>
            <div className="w-full">

              {/* Choose bottle size */}
<div className="w-full max-w-5xl mx-auto">
  <div className="mb-10 text-center">
    <p className="text-[10px] font-semibold tracking-[0.35em] text-zinc-500 uppercase mb-3">
      First Drop
    </p>

    <h2 className="text-white text-3xl sm:text-4xl font-black tracking-tight">
      Choose Your Size
    </h2>

    <p className="mt-3 text-zinc-400">
      Pick the capacity that fits your day.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* 500 ML */}
    <a
      href="/products/500"
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-all duration-300 hover:border-white/30 hover:-translate-y-1"
    >
      <div className="aspect-[4/5] bg-[#111] p-6">
        <img
          src="/images/performa-bottle-pink.png"
          alt="Performa 500 ml bottle"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-2">
          Performa Bottle
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white text-2xl font-black">
              500 ML
            </h3>

            <p className="text-zinc-400 text-sm mt-1">
              Everyday hydration.
            </p>
          </div>

          <span className="text-white text-sm font-semibold">
            View Colors →
          </span>
        </div>
      </div>
    </a>

    {/* 1200 ML */}
    <a
      href="/products/1200"
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-all duration-300 hover:border-white/30 hover:-translate-y-1"
    >
      <div className="aspect-[4/5] bg-[#111] p-6">
        <img
          src="/images/performa-1200ml-bottle-black.png"
          alt="Performa 1200 ml bottle"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-2">
          Performa Bottle
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white text-2xl font-black">
              1200 ML
            </h3>

            <p className="text-zinc-400 text-sm mt-1">
              Maximum hydration.
            </p>
          </div>

          <span className="text-white text-sm font-semibold">
            View Colors →
          </span>
        </div>
      </div>
    </a>

  </div>
</div>
            </div>
          </RevealSection>
        </div>
      </section>

