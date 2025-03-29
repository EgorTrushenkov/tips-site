import MainPage from "@/components/main/main";
import Cards from "@/components/cards/cards";
import Price from "@/components/price/price";
import Why from "@/components/why/why";
import Info from "@/components/info/info";
import Feedback from "@/components/feedback/feedback";
import Footer from "@/components/footer/footer";

export default function Home() {
  
  return (
    <>
      <div className="px-10 lg:px-[10px] lg:overflow-hidden">
        <MainPage />
        <Cards />
        <Price />
        <Why />
      </div>
      <div className="px-10 lg:overflow-hidden lg:px-0 lg:mt-[45px]">
        <Info />
      </div>
      <div className="px-10 lg:px-[10px] lg:overflow-hidden">
        <Feedback />
        <Footer />
      </div>
    </>
  );
}
