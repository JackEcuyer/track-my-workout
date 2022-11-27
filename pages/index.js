import Head from "next/head";
import Link from "next/link";

const Home = () => {
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
      <Link href="/dashboard">
        <button className="btn btn-primary">Dashboard</button>
      </Link>
    </div>
  );
};

export default Home;
