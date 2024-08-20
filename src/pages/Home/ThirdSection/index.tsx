import CenteredSubtitle from "../../../components/CenteredSubtitle";
import GaleryItem from "./components/GaleryItem";

export default function ThirdSection() {
  return (
    <section className="w-full bg-gray-100 h-[772px] gap-16 px-32 py-16 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-2 justify-center">
        <CenteredSubtitle content="Destination"/>
        <h1 className="text-4xl text-blue-950 font-display text-center font-bold">Top Atractions Destination</h1>
      </div>
      <div className="w-full h-full flex flex-row gap-8">
        <div className="flex flex-col gap-8 w-full h-full">
          <div className="flex flex-row gap-8 h-full">
            <GaleryItem/>
            <GaleryItem/>
            <GaleryItem/>
          </div>
          <div className="flex flex-row gap-8 h-full">
            <GaleryItem additionalClass="basis-3/4"/>
            <GaleryItem/>
          </div>
        </div>
          <GaleryItem additionalClass="basis-1/4"/>
      </div>
    </section>
  )
}