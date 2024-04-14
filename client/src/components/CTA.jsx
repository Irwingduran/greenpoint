import styles from "../style";


const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow `}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-white`}>Thanks to each and every one of you</h2>
      <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
        Text text and more text
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>

    </div>
  </section>
);

export default CTA;