import Navigation from "../../components/Navigation";
import FirstSection from "./FirstSection";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
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
      </main>
    </>
  )
}