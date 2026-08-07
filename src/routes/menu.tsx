import { createFileRoute } from "@tanstack/react-router";
import menuAsun from "../assets/hero-asun.jpg";
import menuCroaker from "../assets/menu-croaker.jpg";
import menuTurkey from "../assets/menu-turkey.jpg";
import menuSuya from "../assets/menu-suya.jpg";
import menuRibs from "../assets/menu-ribs.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Grills by Opty" },
      {
        name: "description",
        content:
          "Explore the full menu at Grills by Opty: signature grilled meats, seafood, sides, and drinks. Authentic Abeokuta barbecue.",
      },
      {
        property: "og:title",
        content: "Menu — Grills by Opty",
      },
      {
        property: "og:description",
        content: "Explore the full menu at Grills by Opty: signature grilled meats, seafood, sides, and drinks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

const menuCategories = [
  {
    name: "Signature Grills",
    items: [
      {
        image: menuAsun,
        title: "Asun Platter",
        price: "₦6,500",
        description: "Spicy diced grilled goat meat tossed with onions and peppers.",
        alt: "Spicy grilled goat meat Asun with onions and peppers",
      },
      {
        image: menuSuya,
        title: "Opty's Suya",
        price: "₦4,000",
        description: "Spiced beef skewers with yaji, onions, and fresh tomatoes.",
        alt: "Nigerian spicy ram suya skewers with onions and tomatoes",
      },
      {
        image: menuRibs,
        title: "Smoked Spare Ribs",
        price: "₦12,500",
        description: "Tender ribs glazed with Opty's smoky barbecue sauce.",
        alt: "Charred smoked spare ribs with barbecue glaze",
      },
      {
        image: menuTurkey,
        title: "Smoked Turkey Wings",
        price: "₦4,200",
        description: "Jumbo wings marinated in local spices and slow-grilled.",
        alt: "Smoky grilled turkey wings with garnish and spicy sauce",
      },
    ],
  },
  {
    name: "Seafood",
    items: [
      {
        image: menuCroaker,
        title: "Spicy Croaker",
        price: "₦7,500",
        description: "Whole grilled croaker with plantain and pepper sauce.",
        alt: "Spicy grilled croaker fish with plantain and pepper sauce",
      },
      {
        image: menuTurkey,
        title: "Grilled Prawns",
        price: "₦9,000",
        description: "Large prawns basted in garlic butter and chili.",
        alt: "Grilled prawns with garlic butter and chili garnish",
      },
    ],
  },
  {
    name: "Sides & Extras",
    items: [
      {
        image: menuCroaker,
        title: "Fried Plantain",
        price: "₦1,500",
        description: "Sweet ripe plantain, golden fried.",
        alt: "Golden fried plantain slices",
      },
      {
        image: menuSuya,
        title: "Jollof Rice",
        price: "₦2,500",
        description: "Smoky party-style jollof rice.",
        alt: "Smoky Nigerian jollof rice in a bowl",
      },
      {
        image: menuCroaker,
        title: "Pepper Sauce",
        price: "₦500",
        description: "Extra spicy dipping sauce.",
        alt: "Red Nigerian pepper sauce in a bowl",
      },
    ],
  },
  {
    name: "Drinks",
    items: [
      {
        image: menuCroaker,
        title: "Chapman",
        price: "₦2,000",
        description: "Classic Nigerian mocktail.",
        alt: "Red Chapman cocktail in a glass",
      },
      {
        image: menuSuya,
        title: "Fresh Juice",
        price: "₦1,800",
        description: "Pineapple, ginger, or watermelon.",
        alt: "Fresh fruit juice in a glass",
      },
    ],
  },
];

function MenuPage() {
  return (
    <div className="bg-charcoal text-bone">
      <section className="px-6 pb-6 pt-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-4xl leading-tight lg:text-5xl">
            The <span className="text-ember">Menu</span>
          </h1>
          <p className="mt-2 max-w-md text-sm text-bone/60">
            Every dish is grilled over local hardwood, marinated in house spices, and served with Abeokuta pride.
          </p>
        </div>
      </section>

      <section className="rounded-t-[32px] bg-white px-6 py-12 text-charcoal">
        <div className="mx-auto max-w-5xl space-y-12">
          {menuCategories.map((category) => (
            <div key={category.name}>
              <h2 className="mb-6 font-serif text-2xl italic">{category.name}</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {category.items.map((item) => (
                  <MenuItem key={item.title} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal px-6 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm text-bone/60">
            Prices are subject to change. Call ahead for large orders and availability.
          </p>
          <a
            href="https://wa.me/2348137102651"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-ember px-8 py-4 text-center font-semibold text-ember-foreground transition-colors hover:bg-ember/90"
          >
            Order via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

function MenuItem({
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
    <div className="flex items-start gap-4 rounded-xl border border-charcoal/5 bg-charcoal/[0.02] p-4">
      <div className="size-24 shrink-0 overflow-hidden rounded-lg bg-charcoal/5">
        <img src={image} alt={alt} width={816} height={816} className="size-full object-cover" loading="lazy" />
      </div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2 font-serif text-lg">
          <span className="text-balance">{title}</span>
          <span className="shrink-0 text-ember">{price}</span>
        </div>
        <p className="mt-1 text-sm text-charcoal/60 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
