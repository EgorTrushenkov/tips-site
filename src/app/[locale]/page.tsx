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
      <!-- Varioqub experiments -->
      <script type="text/javascript">
        {(function(e, x, pe, r, i, me, nt){
        e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
        me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],me.addEventListener('error',function(){function cb(t){t=t[t.length-1],'function'==typeof t&&t({flags:{}})};Array.isArray(e[i].a)&&e[i].a.forEach(cb);e[i]=function(){cb(arguments)}}),nt.parentNode.insertBefore(me,nt)})
        (window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
        ymab('metrika.98342954', 'init'/*, {clientFeatures}, {callback}*/);}
      </script>
    </>
  );
}
