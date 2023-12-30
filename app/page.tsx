import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import SideBar from "./Components/Common/SideBar";
import Categories from "./Components/Home/Categories";
import HeroSection from "./Components/Home/HeroSection";
import MenuSection from "./Components/Home/MenuSection";
import Promos from "./Components/Home/Promos";

export default function Home() {
  return (
    <main className="">
      <Header />
      <SideBar />
      <HeroSection />
      <Promos />
      <Categories/>
      <MenuSection/>
      <Footer/>
    </main>
  );
}
