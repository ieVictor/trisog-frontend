import CenteredSubtitle from "../CenteredSubtitle"

type CenteredTitleProps = {
  title: string
  subtitle: string
}

export default function CenteredTitle(props: CenteredTitleProps) {
  return (
    <hgroup className="w-full self-center flex flex-col gap-2">
      <CenteredSubtitle content={props.subtitle}/>
      <h2 className='font-bold text-blue-950 font-display text-4xl text-center'>
        {props.title} 
      </h2>
    </hgroup>
  )

}