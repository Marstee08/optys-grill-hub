import { createFileRoute } from "@tanstack/react-router";
import reviewsHero from "../assets/reviews-hero.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Grills by Opty" },
      {
        name: "description",
        content:
          "Read what customers love about Grills by Opty. Rated 4.6 stars from 11 reviews. Authentic Abeokuta barbecue.",
      },
      {
        property: "og:title",
        content: "Reviews — Grills by Opty",
      },
      {
        property: "og:description",
        content: "Read what customers love about Grills by Opty. Rated 4.6 stars from 11 reviews.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    name: "Tunde Adebayo",
    role: "Local Guide",
    rating: 5,
    text: "The best suya in Abeokuta, hands down. The smokiness is deep and the spice level is just right. Opty knows the craft.",
  },
  {
    name: "Aisha Bello",
    role: "Diner",
    rating: 5,
    text: "Their Asun platter is unmatched. Tender, spicy, and perfectly charred. My go-to spot for weekend grills.",
  },
  {
    name: "Kola Ogunlesi",
    role: "Local Guide",
    rating: 4,
    text: "Great grilled fish and friendly service. The pepper sauce is the real star. Worth the drive from anywhere in Abeokuta.",
  },
  {
    name: "Femi Adesanya",
    role: "Diner",
    rating: 5,
    text: "Consistently good. The turkey wings are massive and flavorful. Highly recommend ordering ahead on weekends.",
  },
  {
    name: "Nkechi Obi",
    role: "Diner",
    rating: 4,
    text: "Lovely atmosphere and delicious barbecue. The ribs fall off the bone. Will definitely come back with friends.",
  },
];

function ReviewsPage() {
  return (
    <div className="bg-charcoal text-bone">
      {/* Hero */}
      <section className="px-6 pb-6 pt-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-4xl leading-tight lg:text-5xl">
            What People <span className="text-ember">Say</span>
          </h1>
          <p className="mt-2 max-w-md text-sm text-bone/60">
            Real reviews from real guests. See why Abeokuta keeps coming back to Grills by Opty.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl bg-ash">
            <img
              src={reviewsHero}
              alt="Overhead view of a Nigerian barbecue grill with skewers over glowing charcoal"
              width={944}
              height={704}
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="rounded-t-[32px] bg-white px-6 py-12 text-charcoal">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-6xl font-bold text-ember">4.6</span>
                <span className="text-xl text-charcoal/50">/ 5</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <StarRating rating={4.6} />
                <span className="text-sm text-charcoal/60">Based on 11 reviews</span>
              </div>
            </div>
            <a
              href="https://www.google.com/search?q=Grills+by+Opty+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ember"
            >
              Read on Google
            </a>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="bg-charcoal px-6 py-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-bone/5 bg-ash/50 p-6 text-center">
          <h2 className="font-serif text-2xl italic">Visit Us Today</h2>
          <p className="mt-2 text-sm text-bone/60">
            Housing Estate, 62/64 Edun Adila Street, Ibara, Abeokuta
          </p>
          <p className="mt-1 text-sm text-bone/60">Open from 11:30 am daily</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+2348137102651"
              className="inline-flex items-center justify-center rounded-xl border border-bone/10 bg-white/5 px-8 py-4 text-center font-semibold text-bone transition-colors hover:bg-white/10"
            >
              Call 0813 710 2651
            </a>
            <a
              href="https://wa.me/2348137102651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-ember px-8 py-4 text-center font-semibold text-ember-foreground transition-colors hover:bg-ember/90"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex text-ember" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="text-lg">
          ★
        </span>
      ))}
      {hasHalf && <span className="text-lg">★</span>}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className="text-lg text-charcoal/20">
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({
  name,
  role,
  rating,
  text,
}: {
  name: string;
  role: string;
  rating: number;
  text: string;
}) {
  return (
    <div className="border-b border-charcoal/5 pb-6">
      <div className="mb-2 flex items-center gap-1 text-ember">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-sm">
            ★
          </span>
        ))}
      </div>
      <p className="font-serif text-lg italic leading-snug text-charcoal">"{text}"</p>
      <div className="mt-3 flex items-center gap-2">
        <div className="flex size-8 items-center justify-center rounded-full bg-charcoal/10 font-serif text-xs font-bold text-charcoal">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-charcoal">{name}</p>
          <p className="text-[10px] text-charcoal/50">{role}</p>
        </div>
      </div>
    </div>
  );
}
