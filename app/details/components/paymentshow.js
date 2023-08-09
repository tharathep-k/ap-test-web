import CardDetails from "./carddetails";

export default function PaymentShow({ pageAt, allData }) {
  const capacity = 5;

  const startPage = (page, capacity) => page * capacity - capacity;
  const endPage = (page, capacity) => page * capacity;

  const pagination = (page, capacity, items) => {
    const start = startPage(page, capacity);
    const end = endPage(page, capacity);
    return items.slice(start, end);
  };

  const showAtPage = pagination(pageAt, capacity, allData);
  const job = showAtPage.map((el) => <CardDetails data={el} key={el.id} />);

  return (
    <div className="w-[60vh] flex flex-col gap-1 items-center pb-4">
      {job}
    </div>
  );
}
