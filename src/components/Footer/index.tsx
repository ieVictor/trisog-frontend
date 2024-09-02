import { FacebookLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react';
import WhiteLogo from '../../assets/trisog-white-logo.svg';
import TextInput from '../TextInput';
import Button from '../Button';

export default function Footer() {
  return (
    <>
      <footer className="flex pt-20 pb-28 px-32 bg-slate-950 items-center">
        <div className="w-full h-full flex flex-row gap-20">
          <div className="flex flex-col gap-5 max-w-[209px]">
            <div className="flex flex-col gap-8">
              <img src={WhiteLogo} alt="Trisog White Logo" />
              <div className="flex flex-col g-1 text-start">
                <span className="font-script text-sm text-white">
                  Need any help?
                </span>
                <span className="font-display text-lg text-white">
                  Call Us:
                  <strong className="text-rose-400">(888)1234 5678</strong>
                </span>
              </div>
            </div>
            <div className="text-white text-start items-start flex flex-col gap-7">
              <span className="text-sans text-base">
                Love Street, Muscat, Oman exaample@trisog.com
              </span>
              <nav className="flex flex-row gap-3 justify-center">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookLogo size={20} />
                </a>
                <a href="https://twitter.com/home" target="_blank">
                  <TwitterLogo size={20} />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <LinkedinLogo size={20} />
                </a>
              </nav>
            </div>
          </div>

          <div className="w-px h-60 bg-white" />

          <div className="flex flex-row gap-16 items-center text-white">
            <div className="flex flex-col gap-4">
              <span className="font-script text-sm text-start">Company</span>
              <ul className="flex flex-col gap-3 font-sans text-start text-base text-white">
                <li>
                  <a className="hover-bright cursor-pointer">About Us</a>
                </li>
                <li>
                  <a className="hover-bright cursor-pointer">Contact Us</a>
                </li>
                <li>
                  <a className="hover-bright cursor-pointer">Travel Guides</a>
                </li>
                <li>
                  <a className="hover-bright cursor-pointer">Data Policy</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-script text-sm text-start">
                Top Destination
              </span>
              <div className="flex flex-row gap-8">
                <ul className="flex flex-col gap-3 font-sans text-start text-base text-white">
                  <li>
                    <a className="hover-bright cursor-pointer">Las Vegas</a>
                  </li>
                  <li>
                    <a className="hover-bright cursor-pointer">New York City</a>
                  </li>
                  <li>
                    <a className="hover-bright cursor-pointer">San Francisco</a>
                  </li>
                  <li>
                    <a className="hover-bright cursor-pointer">Hawaii</a>
                  </li>
                </ul>
                <ul className="flex flex-col gap-3 font-sans text-start text-base text-white">
                  <li>
                    <a className="hover-bright cursor-pointer">Tokyo</a>
                  </li>
                  <li>
                    <a className="hover-bright cursor-pointer">Sydney</a>
                  </li>
                  <li>
                    <a className="hover-bright cursor-pointer">Melbourne</a>
                  </li>
                  <li>
                    <a className="hover-bright cursor-pointer">Dubai</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-px h-60 bg-white" />

          <div className="flex flex-col gap-14 text-white">
            <form className="text-start flex flex-col gap-4">
              <span className="font-script text-sm">Sign up Newsletter</span>
              <div className="flex flex-col gap-2">
                <TextInput
                  icon="plane"
                  placeholder="Enter Email..."
                  validate={
                    /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm
                  }
                />
                <Button text="Submit" type="button" onClick={() => {}} />
              </div>
            </form>
            <span className="text-gray-400 text-sm">
              © 2023 Trisog All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
      <div className="w-full h-1 bg-rose-500" />
    </>
  );
}
