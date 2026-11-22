import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import SkillTag from "@/components/SkillTag";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zohaib Ahmed</title>
      </Head>

      <Header/>
      

      <Hero />
      <SkillTag topic="Python" level="Advanced" />
     <SkillTag topic="Machine Learning" level="Intermediate" />
<SkillTag topic="Next.js" level="Learning" />

      <Footer/>
      </div>
  );
}