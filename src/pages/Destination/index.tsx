import Footer from '../../components/Footer';
import Search from '../../components/Search';
import GaleryItem from '../Home/ThirdSection/components/GaleryItem';

export default function Destination() {
  return (
    <>
      <main className="w-full h-full bg-white">
        <section
          className={
            'w-full h-72 bg-cover bg-center' +
            " bg-[url('https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/destinationSection-bg.png?alt=media&token=384fbd00-615d-43d2-b9d7-774e4d484b47')]" +
            ' flex flex-col text-center justify-center g-16 relative text-white'
          }
        >
          <h1 className="font-bold font-display text-5xl">Destination</h1>
          <span className="font-normal text-base font-display">
            Home /<strong className="text-rose-400"> Destination</strong>
          </span>
          <Search />
        </section>

        <section className="w-full bg-gray-100 h-fit gap-8 px-32 py-32 flex flex-col items-center justify-center">
          <div className="w-full h-[432px] flex gap-8 flex-row">
            <div className="flex flex-col gap-8 w-full h-full">
              <div className="flex flex-row gap-8 h-full">
                <GaleryItem
                  img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/London-Eye-River-Thames.webp?alt=media&token=5ddf32b8-8a9d-4f78-b5d3-04fa445801b4"
                  country='United Kindom'
                  id='2e7231c2-f66f-4ec2-9f58-da99c45c3c9c'
                />
                <GaleryItem
                  img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/turkey.webp?alt=media&token=5f9fc221-2bdb-4204-b158-b29a8d29f498"
                  country="Turkey"
                  id='5ac1691a-e082-4839-b271-b44d66756ef9'
                />
                <GaleryItem
                  img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/winter-in-switzerland-final-1681881755-785X440.jpg?alt=media&token=6834e282-308f-4ca2-8118-3b06b0d7358a"
                  country="Switzerland"
                  id='1fe236f8-c32e-4638-88c3-0ff72a98f53f'
                />
              </div>
              <div className="flex flex-row gap-8 h-full">
                <GaleryItem
                  additionalClass="basis-3/4"
                  img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/thailand.jpeg?alt=media&token=44a328bd-2c2d-457c-b5a3-6d219e42b312"
                  country="Thailand"
                  id='092cb6be-f50b-45a8-a9c3-bcaea389529b'
                />
                <GaleryItem
                  img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/australia.jpg?alt=media&token=d4c179f4-2782-4535-ae83-e12fd568f081"
                  country="Australia"
                  id='0120245a-acfe-4186-a31d-28676796acbf'
                />
              </div>
            </div>
            <GaleryItem
              additionalClass="basis-1/4"
              img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/torreEifel-card.png?alt=media&token=83a2160f-3a17-4bbe-b9d7-9958f3647c46"
              country="France"
              id='d4c7f54a-06e7-4c84-830b-ebf58c023053'
            />
          </div>

          <div className="w-full h-[432px] flex gap-8 flex-row-reverse">
            <div className="flex flex-col gap-8 w-full h-full">
              <div className="flex flex-row gap-8 h-full ">
                <GaleryItem
                  img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/italy-coliseum.avif?alt=media&token=1303edcc-2262-4b2a-94d2-3fa34f4470d9"
                  country="Italy"
                  id='e5fa853c-2bcf-436a-b3da-3f4872cddf6c'
                />
                <GaleryItem
                  img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/bangladesh-tg.png?alt=media&token=05f8a18d-d27f-49ca-a41e-544930289ddf"
                  country="Bangladesh"
                  id='cac323b4-1ba9-4dfb-8e32-6a0885ac5b5a'
                />
                <GaleryItem
                  img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/Egypt-History-Egypt-Tours-Portal.jpg?alt=media&token=e313c4e7-2eec-4dc2-b282-4abef804a273"
                  country="Egypt"
                  id='02b322d9-f4be-499b-a8db-cf61d7bb3a4f'
                />
              </div>
              <div className="flex flex-row gap-8 h-full">
                <GaleryItem
                  additionalClass="basis-3/4"
                  img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/cidades-da-india.jpg?alt=media&token=2d5d3bf1-518b-46f1-a974-6b6cb99866d3"
                  country="India"
                  id='3751266f-319e-4b73-b78e-dfe2e6cb6c73'
                />
                <GaleryItem
                  img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/china.jpg?alt=media&token=8feeca6c-d969-4dcf-b741-ef4335f1187d"
                  country="China"
                  id='b44fe5ae-ce7d-49d0-9b18-c3b61df05add'
                />
              </div>
            </div>
            <GaleryItem
              additionalClass="basis-1/4"
              img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/view-Dubai-foreground-Burj-al-Arab-Hotel-United.webp?alt=media&token=938db238-4cae-4efa-91f8-9937ed371026"
              country="United Arab Emirates"
              id='1ae9afec-3d53-4871-b198-e8eebbf2bdb5'
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
