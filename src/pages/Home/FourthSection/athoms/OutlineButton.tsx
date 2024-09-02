import { useNavigate } from "react-router"

export default function OutlineButton() {
  const navigate = useNavigate();
  return (
    <button className="px-8 w-fit py-4 rounded-lg border border-gray-300" onClick={() => navigate('/error')}>
      <span className="font-display text-black font-bold text-base text-center flex-1">Contact Us</span>
    </button>
  )
}