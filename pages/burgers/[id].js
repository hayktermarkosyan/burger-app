import Image from "next/image";
import styles from "../../styles/Burgers.module.css";
import Head from "next/head";

const Details = ({ burger }) => {
  return (
    <div className={styles.singleBurger}>
      <Head>
        <title>Fat burgers | {burger.name}</title>
        <meta name="title" content="Fat burgers" />
      </Head>
      <h1>{burger.name}</h1>
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
        <p>{burger.desc}</p>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();
  const paths = data.map((burger) => ({ params: { id: burger.id } }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:5000/items/${id}`);
  const data = await res.json();

  return { props: { burger: data } };
};

export default Details;
