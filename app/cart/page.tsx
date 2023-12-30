
import FooterMobile from "../Components/Common/FooterMobile";
import CartSummer from "./CartSummer";
import CartTopSection from "./CartTopSection";

export const metadata = {
  title: "Cart",
  description: "...choose the best",
};
export default function cart() {
  return (
    <>
      <div className="flex flex-col items-center py-8 px-6 mb-24">
        <div className="w-full rounded-lg shadow-xl sm:max-w-md p-6">
          <CartTopSection />
          <div className="flex flex-col space-y-4 border-t">
            <CartSummer />
          </div>
        </div>
      </div>
      <FooterMobile />
    </>
  );
}
