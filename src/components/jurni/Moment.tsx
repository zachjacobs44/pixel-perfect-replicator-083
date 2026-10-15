import { Photo } from "./Photo";
import { PhotoBubble, StakBubble } from "./Bubbles";

/* One photograph, one exchange. The moment the product exists for. */
export function Moment() {
  return (
    <section aria-label="A moment with Stak" className="content-column pb-6 pt-4 md:pb-10">
      <div className="relative">
        <Photo name="fridge-wide" alt="An open refrigerator at night" ratio="16 / 9" className="hidden md:block" priority />
        <Photo name="fridge" alt="An open refrigerator at night" ratio="4 / 5" className="md:hidden" priority />
        <div className="night-screen absolute bottom-4 left-4 right-4 flex max-w-[520px] flex-col gap-2.5 rounded-[18px] p-4 md:bottom-8 md:left-8 md:right-auto">
          <PhotoBubble photo="fridge" alt="The inside of the fridge" text="what can i make with this. not hungry but i know i should eat" />
          <StakBubble>Eggs, spinach, feta, cherry tomatoes, olives, Greek yogurt. Make a two-egg scramble with the spinach and feta, tomatoes and olives on the side. About 30g of protein, and small enough that it goes down easy. Want me to turn the rest into a shopping list for the week?</StakBubble>
        </div>
      </div>
    </section>
  );
}