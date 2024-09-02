type ReviewsListProps = {
  children: JSX.Element[];
};

export default function ReviewsList(props: ReviewsListProps) {
  return (
    <div className="flex flex-col gap-3">
      <h6 className="text-h6 text-blue-950">
        Showing {props.children.length}{' '}
        {props.children.length == 1 ? ' review' : ' reviews'}
      </h6>
      <div className="w-full flex flex-col gap-2">{props.children}</div>
    </div>
  );
}
