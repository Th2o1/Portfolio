import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-6 space-y-3">
      <h1 className="text-2xl font-bold">Not found</h1>
      <p>That page doesn’t exist.</p>
      <Link href="/" className="btn">
        Back to projects
      </Link>
    </main>
  );
}
