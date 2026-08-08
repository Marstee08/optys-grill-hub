import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsun from "../assets/hero-asun.jpg";
import menuSuya from "../assets/menu-suya.jpg";
import menuRibs from "../assets/menu-ribs.jpg";
import menuCroaker from "../assets/menu-croaker.jpg";
import reviewsHero from "../assets/reviews-hero.jpg";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Demo Tour — Grills by Opty Barbecue" },
      {
        name: "description",
        content:
          "Take a guided demo tour of Grills by Opty: sample menu, live-fire kitchen, customer ratings and WhatsApp ordering in Abeokuta.",
      },
      { property: "og:title", content: "Demo Tour — Grills by Opty Barbecue" },
      {
        property: "og:description",
        content:
          "A guided walkthrough of the Grills by Opty experience with sample menu data and ordering flow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DemoPage,
});

const steps = [
  {
    n: "01",
    title: "Browse the fire",
    body: "Every cut is listed with its price and spice level so you know exactly what lands on your plate.",
    image: menuSuya,
    alt: "Nigerian ram suya skewers dusted with yaji spice",
  },
  {
    n: "02",
    title: "Pick your platter",
    body: "Mix signature grills, seafood and sides into a sharing platter for two, four or a full table.",
    image: menuRibs,
    alt: "Glazed smoked spare ribs resting on a dark board",
  },
  {
    n: "03",
    title: "Order on WhatsApp",
    body: "Send your order, get a confirmation with pickup time, and collect it hot off the grill in Ibara.",
    image: menuCroaker,
    alt: "Grilled croaker fish served with plantain and pepper sauce",
  },
];

const sampleOrder = [
  { item: "Ram Suya (large)", qty: 2, price: 6000 },
  { item: "Spicy Croaker", qty: 1, price: 7500 },
  { item: "Grilled Plantain", qty: 2, price: 2000 },
  { item: "Chapman", qty: 2, price: 3000 },
];

function DemoPage() {
  const total = sampleOrder.reduce((sum, l) => sum + l.price, 0);

  return (
    <div className="bg-charcoal text-bone">
      <section className="px-6 pb-12 pt-10">
        <div className="mx-auto max-w-5xl">
          <span className="inline-block rounded-full border border-ember/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ember">
            Demo Tour
          </span>
          <h1 className="mt-4 font-serif text-5xl leading-tight lg:text-7xl">
            See how <span className="text-ember">Opty</span> serves.
          </h1>
          <p className="mt-4 max-w-md text-sm italic leading-relaxed text-bone/60">
            A guided walkthrough of the Grills by Opty experience — sample menu,
            sample order, real fire.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl bg-ash">
            <img
              src={heroAsun}
              alt="Platter of spicy grilled goat meat with onions and peppers"
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="rounded-t-[32px] bg-white px-6 py-12 text-charcoal">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl italic">How it works</h2>
          <p className="mt-1 text-xs uppercase tracking-widest text-charcoal/50">
            Three steps to smoke
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="overflow-hidden rounded-2xl border border-charcoal/10"
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  width={600}
                  height={400}
                  className="aspect-[3/2] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="font-serif text-2xl text-ember">{s.n}</div>
                  <h3 className="mt-1 font-serif text-lg">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal/60">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-bone/5 bg-ash/50 p-6">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ember">
              Sample order
            </h2>
            <p className="mt-2 text-xs text-bone/50">
              Example only — nothing is charged here.
            </p>

            <ul className="mt-5 divide-y divide-bone/10">
              {sampleOrder.map((line) => (
                <li
                  key={line.item}
                  className="flex items-baseline justify-between py-3 text-sm"
                >
                  <span className="text-bone/80">
                    {line.item}{" "}
                    <span className="text-bone/40">×{line.qty}</span>
                  </span>
                  <span className="font-serif">
                    ₦{line.price.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-baseline justify-between border-t border-bone/20 pt-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-bone/50">
                Total
              </span>
              <span className="font-serif text-2xl text-ember">
                ₦{total.toLocaleString()}
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/2348137102651"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-xl bg-ember py-4 text-center font-semibold text-ember-foreground transition-colors hover:bg-ember/90"
              >
                Try ordering on WhatsApp
              </a>
              <Link
                to="/menu"
                className="flex w-full items-center justify-center rounded-xl border border-bone/10 bg-white/5 py-4 text-center font-semibold text-bone transition-colors hover:bg-white/10"
              >
                See the full menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl">
          <div className="relative">
            <img
              src={reviewsHero}
              alt="Charcoal grill glowing with meat cooking over open flames"
              width={1200}
              height={600}
              className="aspect-[2/1] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal/70 px-6 text-center">
              <div className="font-serif text-4xl text-ember">4.6</div>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-bone/60">
                Rated by 11 guests
              </p>
              <Link
                to="/reviews"
                className="mt-4 text-sm font-semibold text-bone underline underline-offset-4 hover:text-ember"
              >
                Read the reviews
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
