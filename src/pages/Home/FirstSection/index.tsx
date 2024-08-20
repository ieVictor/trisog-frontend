import DestinationForm from "../../../components/DestinationForm";

export default function FirstSection() {
  return (
    <section className="relative w-full h-[556px] flex flex-col text-center justify-center g-16 bg-home-first-section bg-cover">
      <h2 className="font-script text-rose-500 text-4xl">Save 15% off in Worldwide</h2>
      <div className="font-display">
        <h1 className="text-[56px] font-bold">Travel & Adventures</h1>
        <span className="text-md font-semibold">Find awesome hotel, tour, car and activities in London</span>
      </div>
      <DestinationForm/>
    </section>
  )
}