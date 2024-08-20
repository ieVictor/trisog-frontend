type CenteredSubtitleProps = {
  content: string;
}

export default function LeftSubtitle(props: CenteredSubtitleProps) {
  return (
    <div className="w-full flex flex-row gap-2 items-center">
      <h6 className="text-2xl text-rose-400 font-script">{props.content}</h6>
      <div className="flex-1 h-px bg-gray-400"/>
    </div>
  )
}