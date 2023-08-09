import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center gap-4">
      <Link href="/payment">
        <button className="border border-black w-[8rem] p-4">
          Click to Payment
        </button>
      </Link>
      <Link href="/details">
        <button className="border border-black w-[8rem] p-4">
          Click to Details
        </button>
      </Link>
    </div>
  );
}
