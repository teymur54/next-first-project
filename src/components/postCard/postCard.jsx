import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/18644057/pexels-photo-18644057/free-photo-of-sheep-and-lambs-on-pasture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          illum vel repellendus amet in assumenda doloribus quasi? Ullam sit
          dolores accusamus voluptatem, repellendus temporibus eligendi nesciunt
          mollitia dolorum? Commodi, reiciendis!
        </p>
        <Link className={styles.link} href="/blog/post">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
