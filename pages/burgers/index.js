import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Burgers.module.css";
import Head from "next/head";

const Burgers = ({ burgers }) => {
  return (
    <div>
      <Head>
        <title>Fat burgers | All burgers page</title>
        <meta name="title" content="Fat burgers" />
      </Head>
      <h1>Our Burgers</h1>
      {burgers.map((burger) => (
        <Link
          className={styles.burgerCard}
          href={`/burgers/${burger.id}`}
          key={burger.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={`${burger.image}`}
              alt={`${burger.name}`}
              width={0}
              height={0}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div>
            <h3>{burger.name}</h3>
            <p>{burger.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  return { props: { burgers: data } };
}

export default Burgers;
