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
        <button className="btn">Login</button>
      </Link>
    </div>
  );
}
