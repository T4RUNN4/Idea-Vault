import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold text-lime-500">404!</h1>
      <p className="text-lg text-gray-600 ml-4">
        Page Not Found. The page you are looking for does not exist.
      </p>
      <Link className="btn bg-lime-500 text-white" href="/">
        Return to Home
      </Link>
    </div>
  );
}
