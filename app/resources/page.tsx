import Link from "next/link";
import styles from "./style.module.css";

const page = () => {
  return (
    <div className={styles.links}>
      <Link className={styles.link} href="/resources/malpractice">
        Malpractice
      </Link>
      <Link className={styles.link} href="/resources/scope">
        Scope
      </Link>
      <Link className={styles.link} href="/resources/standards">
        Standards
      </Link>
      <Link className={styles.link} href="/resources/exams">
        Exams/License Applications/NPI
      </Link>
      <Link
        className={styles.link}
        href="/resources/collaborative-practice-agreement"
      >
        Collaborative Practice Agreement
      </Link>
    </div>
  );
};

export default page;
