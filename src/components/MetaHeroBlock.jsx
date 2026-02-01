export default function MetaHeroBlock({ title, description }) {
  return (
    <section className="mx-10 bg-pageBg border-l border-r border-mutedOlive/25">
      <div className="mx-auto max-w-5xl px-6 pt-5 pb-10 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-deepJungleGreen">
          {title}
        </h1>
        <p className="mt-2 mb-8 max-w-3xl mx-auto font-body text-[16px] leading-7 text-charcoalBlack/75">
          {description}
        </p>
      </div>
    </section>
  );
}
