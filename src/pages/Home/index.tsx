import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import SeventhSection from "./SeventhSection";
import ThirdSection from "./ThirdSection";

export default function Home() {
  return (
    <>
      <Navigation/>
      <main className="w-full h-full">
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <SeventhSection/>
        <Footer/>
      </main>
    </>
  )
}