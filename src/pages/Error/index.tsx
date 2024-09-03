import { useNavigate } from "react-router";
import Button from "../../components/Button";

export default function Error() {
  const navigate = useNavigate();
  return (
    <main className="bg-white h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-fit gap-2 flex flex-col items-center">
          <h1 className="text-[240px] font-bold font-display text-rose-500">Oops!</h1>
          <span className="text-h6 text-rose-950 text-center text-wrap">Oops! The page you're looking for doesn't seem to exist. Please check the URL or return to the homepage.</span>
        </div>
        <Button onClick={() => navigate('/')} text="Go to home!" type="button" />
      </div>
    </main>
  );
}
