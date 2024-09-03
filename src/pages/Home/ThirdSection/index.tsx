import CenteredTitle from '../../../components/CenteredTitle';
import GaleryItem from './components/GaleryItem';

export default function ThirdSection() {
  return (
    <section className="w-full bg-gray-100 h-[772px] gap-16 px-32 py-16 flex flex-col items-center justify-center">
      <CenteredTitle
        title="Top Atractions Destination"
        subtitle="Destination"
      />
      <div className="w-full h-[432px] flex gap-8 flex-row">
        <div className="flex flex-col gap-8 w-full h-full">
          <div className="flex flex-row gap-8 h-full">
            <GaleryItem
              img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/London-Eye-River-Thames.webp?alt=media&token=5ddf32b8-8a9d-4f78-b5d3-04fa445801b4"
              country="United Kindom"
              id="2e7231c2-f66f-4ec2-9f58-da99c45c3c9c"
            />
            <GaleryItem
              img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/turkey.webp?alt=media&token=5f9fc221-2bdb-4204-b158-b29a8d29f498"
              country="Turkey"
              id="5ac1691a-e082-4839-b271-b44d66756ef9"
            />
            <GaleryItem
              img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/winter-in-switzerland-final-1681881755-785X440.jpg?alt=media&token=6834e282-308f-4ca2-8118-3b06b0d7358a"
              country="Switzerland"
              id="1fe236f8-c32e-4638-88c3-0ff72a98f53f"
            />
          </div>
          <div className="flex flex-row gap-8 h-full">
            <GaleryItem
              additionalClass="basis-3/4"
              img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/thailand.jpeg?alt=media&token=44a328bd-2c2d-457c-b5a3-6d219e42b312"
              country="Thailand"
              id="092cb6be-f50b-45a8-a9c3-bcaea389529b"
            />
            <GaleryItem
              img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/australia.jpg?alt=media&token=d4c179f4-2782-4535-ae83-e12fd568f081"
              country="Australia"
              id="0120245a-acfe-4186-a31d-28676796acbf"
            />
          </div>
        </div>
        <GaleryItem
          additionalClass="basis-1/4"
          img="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/torreEifel-card.png?alt=media&token=83a2160f-3a17-4bbe-b9d7-9958f3647c46"
          country="France"
          id="d4c7f54a-06e7-4c84-830b-ebf58c023053"
        />
      </div>
    </section>
  );
}
