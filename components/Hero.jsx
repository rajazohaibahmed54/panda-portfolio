import styles from "@/styles/Home.module.css";
import HelloCard from "@/components/HelloCard";

export default function Hero() {
  return (
    <main className={styles.hero}>
      <h1>Zohaib Ahmed</h1>
      <HelloCard name="Zohaib" />
      <HelloCard name="Panda" />
      <HelloCard name="I am learning next.Js" />
      <p>
        I am a Computer Science graduate passionate about Artificial
        Intelligence, Machine Learning, and building smart chatbot and web
        applications.
      </p>
    </main>
  );
}