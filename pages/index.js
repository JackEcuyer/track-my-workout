import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Track My Workout</title>
        <meta name="description" content="Track your workouts easily online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Track My Workout</h1>
      <Link href="/login">
        <h1 className="text-blue-500">Login</h1>
      </Link>
    </div>
  );
}
