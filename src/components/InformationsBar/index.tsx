import {
  CaretDown,
  GoogleLogo,
  LinkedinLogo,
  PinterestLogo,
  TwitterLogo,
} from '@phosphor-icons/react';

export default function InformationsBar() {
  const LOGO_SIZE = 16;
  const LOGO_COLOR = '#9ca3af';
  return (
    <div className="flex flex-row w-full h-fit justify-between items-center px-12 py-2.5">
      <div className="flex flex-row gap-4 items-center text-gray-300 font-caption">
        <span>(000)999-898-999</span>
        <span>|</span>
        <span>info@trisog.com</span>
      </div>
      <div className="flex flex-row gap-3 items-center text-caption text-gray-300">
        <div className="flex flex-row gap-1.5 items-center">
          <TwitterLogo weight="fill" size={LOGO_SIZE} color={LOGO_COLOR} />
          <LinkedinLogo weight="fill" size={LOGO_SIZE} color={LOGO_COLOR} />
          <GoogleLogo weight="fill" size={LOGO_SIZE} color={LOGO_COLOR} />
          <PinterestLogo weight="fill" size={LOGO_SIZE} color={LOGO_COLOR} />
        </div>
        <span>|</span>
        <span className="flex flex-row items-center gap-1 text-gray-400">
          EUR <CaretDown size={LOGO_SIZE} color={LOGO_COLOR} />
        </span>
      </div>
    </div>
  );
}
