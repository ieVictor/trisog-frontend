import Search from '../../../components/Search';

export default function FirstSection() {
  return (
    <section
      className={
        'relative w-full h-[556px] flex flex-col text-center justify-center g-16' +
        " bg-[url('https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/firstSection-bg.jpg?alt=media&token=d8a01998-764e-41dc-a6d0-de768753d487')]" +
        ' bg-cover'
      }
    >
      <h2 className="font-script text-rose-500 text-4xl">
        Save 15% off in Worldwide
      </h2>
      <div className="font-display text-white">
        <h1 className="text-[56px] font-bold">Travel & Adventures</h1>
        <span className="text-md font-semibold">
          Find awesome hotel, tour, car and activities in London
        </span>
      </div>
      <Search />
    </section>
  );
}
