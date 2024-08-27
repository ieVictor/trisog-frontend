type CenteredSubtitleProps = {
  content: string;
}

export default function CenteredSubtitle(props: CenteredSubtitleProps) {
  return (
    <div className="flex flex-row justify-center gap-1 items-center">
      <div className="w-full max-w-[130px] h-px bg-gray-400"/>
      <h6 className="text-2xl text-rose-400 font-script">{props.content}</h6>
      <div className="w-full max-w-[130px] h-px bg-gray-400"/>
    </div>
  )
}