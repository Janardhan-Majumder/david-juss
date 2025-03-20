import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center gap-4">
      <h2 className="text-lg lg:text-2xl font-medium">Not Found!!</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
