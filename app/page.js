import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Link href="/payment">
        <button className="border border-black w-[10rem] p-4">
          Click to Payment
        </button>
      </Link>
    </div>
  );
}
