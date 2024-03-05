// "use client";
// import HidrationTest from "@/components/hidrationTest";
// import dynamic from "next/dynamic";
import styles from "./contact.module.css";
import Image from "next/image";

// const HidrationTestNoSSR = dynamic(() => import("@/components/hidrationTest"), {
//   ssr: false,
// });
export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const Contact = () => {
  const a = Math.random();
  console.log(a);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <HidrationTestNoSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and surname" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone number(optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
