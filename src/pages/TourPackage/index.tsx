import DestinationForm from '../../components/DestinationForm';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import TourCard from '../../components/TourCard';
import CheckListGroup from './athoms/CheckListGroup';
import CheckListItem from './athoms/CheckListItem';
import CheckBoxList from './components/CheckBoxList';
import SearchForm from './components/SearchForm';
import SearchStats from './components/SearchStats';
import SliderForm from './components/SliderForm';

export default function TourPackage() {
  return (
    <>
      <Navigation />
      <main className="w-full h-full bg-white">
        <section
          className={
            "w-full h-72 bg-tourpackage-first-section bg-cover bg-center " +
            "flex flex-col text-center justify-center g-16 relative text-white"
          }
        >
          <h1 className="font-bold font-display text-5xl">Tour Package</h1>
          <span className="font-normal text-base font-display">
            Home /<strong className="text-rose-400"> Tour Package</strong>
          </span>
          <DestinationForm />
        </section>

        <section className="flex flex-row w-full h-full gap-8 p-28">
          <aside className="max-w-[271px] flex flex-col gap-8">
            <SearchForm />
            <SliderForm />

            <CheckBoxList title="Categories">
              <CheckListItem label="Adventure" />
              <CheckListItem label="Beaches" />
              <CheckListItem label="Boat Tours" />
              <CheckListItem label="City Tours" />
              <CheckListItem label="Food" />
              <CheckListItem label="Hiking" />
              <CheckListItem label="Honeymoon" />
              <CheckListItem label="Museum Tours" />
            </CheckBoxList>

            <CheckBoxList title="Destination">
              <CheckListGroup title="Africa">
                <CheckListItem label="Moroco" />
                <CheckListItem label="Tanzania" />
              </CheckListGroup>
              <CheckListGroup title="Americas">
                <CheckListItem label="Argentina" />
                <CheckListItem label="Canada" />
                <CheckListItem label="Colombia" />
                <CheckListItem label="Costa Rica" />
              </CheckListGroup>
              <CheckListGroup title="Asia">
                <CheckListItem label="Cambodia" />
                <CheckListItem label="Japan" />
                <CheckListItem label="Nepal" />
                <CheckListItem label="Thailand" />
                <CheckListItem label="Viet Nam" />
              </CheckListGroup>
              <CheckListGroup title="Europe">
                <CheckListItem label="France" />
                <CheckListItem label="Greece" />
              </CheckListGroup>
            </CheckBoxList>

            <CheckBoxList title="Reviews">
              <CheckListItem label="5 Stars" />
              <CheckListItem label="4 Stars & Up" />
              <CheckListItem label="3 Stars & Up" />
              <CheckListItem label="2 Stars & Up" />
              <CheckListItem label="1 Stars & Up" />
            </CheckBoxList>
          </aside>
          <div className='flex flex-col w-full gap-6'>
            <SearchStats counter={16}/>
            <div className="grid grid-cols-3 grid-rows-3 w-full h-fit gap-8 ">
              <TourCard fill/>
              <TourCard fill/>
              <TourCard fill/>
              <TourCard fill/>
              <TourCard fill/>
              <TourCard fill/>
              <TourCard fill/>
              <TourCard fill/>
              <TourCard fill/>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
