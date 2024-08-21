import { FacebookLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react"
import WhiteLogo from "../../assets/trisog-white-logo.svg"
import TextInput from "../TextInput"
import Button from "../Button"
export default function Footer() {
  return (
    <>
      <footer className="flex pt-20 pb-28 px-32 bg-slate-950 items-center">
        <div className="w-full h-full flex flex-row gap-20">
          <div className="flex flex-col gap-5 max-w-[209px]">
            <div className="flex flex-col gap-8">
              <img src={WhiteLogo} alt="Trisog White Logo"/>
              <div className="flex flex-col g-1 text-start">
                <span className="font-script text-sm text-white">Need any help?</span>
                <span className="font-display text-lg text-white">
                  Call Us:
                  <strong className="text-rose-400">(888)1234 5678</strong>
                </span>
              </div>
            </div>
            <div className="text-white text-start items-start flex flex-col gap-7">
              <span className="text-sans text-base">Love Street, Muscat, Oman exaample@trisog.com</span>
              <nav className="flex flex-row gap-3 justify-center">
                <FacebookLogo size={20}/>
                <TwitterLogo size={20}/>
                <LinkedinLogo size={20}/>
              </nav>
            </div>
          </div>

          <div className="w-px h-60 bg-white"/>

          <div className="flex flex-row gap-16 items-center">
            <div className="flex flex-col gap-4">
              <span className="font-script text-sm text-start">Company</span>
              <ul className="flex flex-col gap-3 font-sans text-start text-base">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Travel Guides</li>
                <li>Data Policy</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-script text-sm text-start">Top Destination</span>
              <div className="flex flex-row gap-8">
                <ul className="flex flex-col gap-3 font-sans text-start text-base">
                  <li>Las Vegas</li>
                  <li>New York City</li>
                  <li>San Francisco</li>
                  <li>Hawaii</li>
                </ul>
                <ul className="flex flex-col gap-3 font-sans text-start text-base">
                  <li>Tokyo</li>
                  <li>Sydney</li>
                  <li>Melbourne</li>
                  <li>Dubai</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-px h-60 bg-white"/>

          <div className="flex flex-col gap-14">
            <form className="text-start flex flex-col gap-4">
              <span className="font-script text-sm">Sign up Newsletter</span>
              <div className="flex flex-col gap-2">
                <TextInput icon="plane" placeholder="Enter Email..."/>
                <Button text="Submit" type="button" onClick={() => {}}/>
              </div>
            </form>
            <span className="text-gray-400 text-sm">© 2023 Trisog All Rights Reserved</span>
          </div>
        </div>
      </footer>
      <div className="w-full h-1 bg-rose-500"/>
    </>
  )
}