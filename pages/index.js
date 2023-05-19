import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fat burgers | Home page</title>
        <meta name="title" content="Fat burgers" />
      </Head>
      <div>
        <h1 className={`${styles.title} font-effect-fire-animation`}>
          Home page
        </h1>
        <div className={styles.mainImage}>
          <Image
            src="/fatburger.png"
            alt="fat burger"
            width={400}
            height={300}
          />
        </div>
        <p className={styles.text}>
          What is the perfect burger? Fresh lettuce leaf, soft buns, juicy meat.
          You can argue about other components of the filling, because it is a
          matter of taste.
        </p>
        <p className={styles.text}>
          There are a couple of other factors that affect appetite: prices,
          quality service, good atmosphere.
        </p>
        <Link className={styles.btn} href="/burgers">
          All burgers
        </Link>
      </div>
    </>
  );
}
