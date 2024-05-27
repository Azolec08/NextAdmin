import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href="/dashboard">
        <button className="text-3xl animate-bounce">Go to Dashboard</button>
      </Link>
    </main>
  );
}
