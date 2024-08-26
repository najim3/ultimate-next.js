"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log(router);

  const handleNavigation = () => {
    router.push("/posts");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Modern Next.js Homepage</h1>
      <Link href={"/profile"}>Link to Profile</Link>
      <Link href={"/posts/1"}>Go to post one</Link>
      <br />
      <Link href={"/profile"}>Setting</Link>
      <button onClick={handleNavigation}>
        Link to post using useRouter hoooks
      </button>
    </main>
  );
}
