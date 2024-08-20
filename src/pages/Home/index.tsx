import Navigation from "../../components/Navigation";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

export default function Home() {
  return (
    <>
      <Navigation/>
      <main className="w-full h-full">
        <FirstSection/>
        <SecondSection/>
      </main>
    </>
  )
}