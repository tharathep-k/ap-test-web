export default function SelectPage({ pageAt, setPageAt, filterData }) {
  const capacity = 5;

  const clickPageBack = () => {
    if (pageAt > 1) {
      setPageAt(pageAt - 1);
    }
  };

  const clickNextPage = () => {
    if (pageAt < filterData.length / capacity) {
      setPageAt(pageAt + 1);
    }
  };

  return (
    <div className="w-[60vh] flex flex-col items-center pr-5 border border-t-gray-400">
      <div className="flex gap-2 mr-5 items-center">
        <div>
          <button
            onClick={clickPageBack}
            className="w-[30px] h-[30px] text-base-100 flex justify-center items-center"
          >
            &lt;
          </button>
        </div>
        <div>{pageAt}</div>
        <div>
          <button
            onClick={clickNextPage}
            className="w-[30px] h-[30px]  text-base-100 flex justify-center items-center"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
