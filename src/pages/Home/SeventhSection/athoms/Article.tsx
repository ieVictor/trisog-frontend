
type ArticleCardProps = {
  date: string;
  children: string;
  author: string;
}

export default function ArticleCard(props: ArticleCardProps) {
  return (
    <div className='flex flex-row items-center gap-5 max-w-[448px]'>
      <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/grandCanal.webp?alt=media&token=fa49c275-5370-42fd-b326-3bf5fba0c1a4'} alt="Article Image" className='w-44'/>
      <div className='flex flex-col gap-2 text-start'>
        <data className='flex flex-row gap-4 items-center text-base text-gray-400'>
          <span>{props.date}</span>
          <span>{"• " + props.author}</span>
        </data>
        <h3 className='text-blue-950 font-display font-bold text-lg w-full'>{props.children}</h3>
      </div>
    </div>
  )
}