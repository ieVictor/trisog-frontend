type QuotationProps = {
  author: string;
  children: string;
}
export function Quotation(props: QuotationProps) {
  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <blockquote className='text-center flex-1 font-display font-bold text-lg text-black'>
        {props.children}
      </blockquote>
      <p className="flex-1 font-sans text-gray-400 text-center text-base">{props.author}</p>
    </div>
  )
}