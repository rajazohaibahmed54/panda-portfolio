import styles from "@/styles/Home.module.css";

export default function SkillTag({ topic, level }) {
  return (
    <span className={styles.tag}>
      {topic} ({level})
    </span>
  );
}