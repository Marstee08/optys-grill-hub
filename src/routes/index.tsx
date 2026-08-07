import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsun from "../assets/hero-asun.jpg";
import menuCroaker from "../assets/menu-croaker.jpg";
import menuTurkey from "../assets/menu-turkey.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grills by Opty — Authentic Abeokuta Barbecue" },
      {
        name: "description",
        content:
          "Smoked to perfection. Authentic Abeokuta flavors, slow-grilled over local hardwood embers. Visit Grills by Opty in Ibara.",
      },
      {
        property: "og:title",
        content: "Grills by Opty — Authentic Abeokuta Barbecue",
      },
      {
        property: "og:description",
        content:
          "Smoked to perfection. Authentic Abeokuta flavors, slow-grilled over local hardwood embers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-charcoal text-bone">
      {/* Hero Section */}
      <section className="px-6 pb-12 pt-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6">
            <h1 className="font-serif text-5xl leading-tight lg:text-7xl">
              Smoked to <br />
              <span className="text-ember">Perfection.</span>
            </h1>
            <p className="mt-4 max-w-[320px] text-sm leading-relaxed italic text-bone/60">
              Authentic Abeokuta flavors, slow-grilled over local hardwood embers.
            </p>
          </div>

          <div className="mb-8 overflow-hidden rounded-2xl bg-ash">
            <img
              src={heroAsun}
              alt="Steaming platter of spicy grilled goat meat (Asun) with onions and peppers"
              width={800}
              height={1008}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-bone/5 bg-ash p-4">
              <div className="font-serif text-2xl text-ember">4.6</div>
              <div className="text-[10px] uppercase tracking-widest text-bone/40">
                11 Reviews
              </div>
            </div>
            <div className="rounded-xl border border-bone/5 bg-ash p-4">
              <div className="font-serif text-2xl text-ember">11:30 am</div>
              <div className="text-[10px] uppercase tracking-widest text-bone/40">
                Opens Daily
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="rounded-t-[32px] bg-white px-6 py-12 text-charcoal">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl italic">The Menu</h2>
              <p className="mt-1 text-xs uppercase tracking-widest text-charcoal/50">
                Signature Cuts
              </p>
            </div>
            <Link to="/menu" className="text-sm font-semibold text-ember">
              View All
            </Link>
          </div>

          <div className="space-y-6">
            <MenuPreviewItem
              image={menuCroaker}
              title="Spicy Croaker"
              price="₦7,500"
              description="Whole grilled fish with Opty's signature pepper sauce."
              alt="Spicy grilled croaker fish with plantain and pepper sauce"
            />
            <MenuPreviewItem
              image={menuTurkey}
              title="Smoked Turkey"
              price="₦4,200"
              description="Jumbo wings marinated in local spices for 24 hours."
              alt="Smoky grilled turkey wings with garnish and spicy sauce"
            />
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="bg-charcoal px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-bone/5 bg-ash/50 p-6">
            <div className="mb-6">
              <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ember">
                Location
              </h3>
              <p className="text-sm leading-relaxed text-bone/80">
                Housing Estate, 62/64 Edun Adila Street,
                <br />
                Ibara, Abeokuta 111101, Ogun State
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ember">
                Contact
              </h3>
              <a
                href="tel:+2348137102651"
                className="block text-sm font-medium text-bone/80 hover:text-ember"
              >
                0813 710 2651
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/2348137102651"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-ember py-4 text-center font-semibold text-ember-foreground transition-colors hover:bg-ember/90"
              >
                Order via WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=Housing+Estate,+62/64+Edun+Adila+Street,+Ibara,+Abeokuta+111101,+Ogun+State"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-xl border border-bone/10 bg-white/5 py-4 text-center font-semibold text-bone transition-colors hover:bg-white/10"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MenuPreviewItem({
  image,
  title,
  price,
  description,
  alt,
}: {
  image: string;
  title: string;
  price: string;
  description: string;
  alt: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-charcoal/5 pb-6">
      <div className="size-20 shrink-0 overflow-hidden rounded-lg bg-charcoal/5">
        <img src={image} alt={alt} width={816} height={816} className="size-full object-cover" loading="lazy" />
      </div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between font-serif text-lg">
          <span>{title}</span>
          <span>{price}</span>
        </div>
        <p className="mt-1 text-xs text-charcoal/60">{description}</p>
      </div>
    </div>
  );
}
