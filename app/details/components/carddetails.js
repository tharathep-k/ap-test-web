export default function CardDetails({ data }) {
  return (
    <>
        <div className="border border-black w-[48vw] h-[10rem] flex flex-col gap-2 px-1 rounded-lg">
          PaymentId: {data.id}
          <br />
          <div className="grid grid-cols-6">
            <div className="col-start-1 col-end-3">
              บ้านเลขที่: {data.housenumber}
            </div>
            <div className="col-start-3 col-end-4">หมู่: {data.moo}</div>
            <div className="col-start-4 col-end-7">
              หมู่บ้าน/อาคาร: {data.village}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>ซอย: {data.soi}</div>
            <div>ถนน: {data.road}</div>
            <div>จังหวัด: {data.province}</div>
            <div>อำเภอ/เขต: {data.district}</div>
            <div>ตำบล/แขวง: {data.subdistrict}</div>
            <div>รหัสไปรษณีย์: {data.code}</div>
          </div>
        </div>
    </>
  );
}
