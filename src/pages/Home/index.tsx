import Navigation from "../../components/Navigation";
import FirstSection from "./FirstSection";

export default function Home() {
  return (
    <>
      <Navigation/>
      <main className="w-full h-full">
        <FirstSection/>
      </main>
    </>
  )
}