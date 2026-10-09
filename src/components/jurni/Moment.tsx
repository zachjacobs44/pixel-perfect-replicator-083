import { Photo } from "./Photo";
import { StakBubble, UserBubble } from "./Bubbles";

/* One photograph, one exchange. The moment the product exists for. */
export function Moment() {
  return (
    <section aria-label="A moment with Stak" className="content-column pb-6 pt-4 md:pb-10">
      <div className="relative">
        <Photo name="fridge" alt="An open refrigerator at night" ratio="16 / 9" className="hidden md:block" priority />
        <Photo name="fridge" alt="An open refrigerator at night" ratio="4 / 5" className="md:hidden" priority />
        <div className="night-screen absolute bottom-4 left-4 right-4 flex max-w-[460px] flex-col gap-2.5 rounded-[18px] p-4 md:bottom-8 md:left-8 md:right-auto">
          <UserBubble text="9pm. standing in front of the fridge. not hungry, just bored" />
          <StakBubble>Then close it. You hit your protein today. Boredom isn&apos;t a meal. Text me if it turns into actual hunger in an hour.</StakBubble>
        </div>
      </div>
    </section>
  );
}