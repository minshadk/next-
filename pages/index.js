import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {

  return (
    <>
      <Head>
        <title>Lists | Home</title>
        <meta name="keywords" content="lists" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          lorem19fdsdsdsdsdsds sd f asdf asd f asd fasdf asd fa sdf s
          asdfasdfasdf sa dfasdfasdfasdf sdf
        </p>
        <p className={styles.text}>
          lorem19fdsdsdsdsdsds sd f asdf asd f asd fasdf asd fa sdf s
          asdfasdfasdf sa dfasdfasdfasdf sdf
        </p>
        <Link href="/lists">
          <a className={styles.btn}>See Listing</a>
        </Link>
      </div>
    </>
  );
}
