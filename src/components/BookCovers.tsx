export default function BooksCover(props) {
  function selectedBookHandler(book) {
    console.log(props.info);
    props.onClick(props.info);
  }
  return (
    <>
      <div
        className="border-2 border-black "
        onClick={() => selectedBookHandler(props.book)}
      >
        <img className="w-full h-full" src={props.cover} alt={props.title} />
      </div>
    </>
  );
}
