import styles from "./style.module.css";

const page = () => {
  return (
    <div className={styles.content}>
      <div className={styles.section}>
        <h2 className={styles.heading}>Presentations</h2>
        <ul>
          <li>
            Abdush- Shakir Bever, Z., & Bruer, A. (2023, April). Telehealth in
            the Management of Rural Adults Living with Type 2 Diabetes Mellitus
            (poster). Presented at Research College of Nursing Bobbie Siler
            Scholarship Day
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2 className={styles.heading}>Professional Organizations</h2>
        <ul>
          <li>
            <a href="/">Association of Missouri Nurse Practitioners</a>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>CEUs</h2>
        <ul>
          <li>
            <a href="/">CEUs Link</a>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>
          PROFESSIONAL CERTIFICATIONS & LICENSURE
        </h2>
        <ul>
          <li>Basic Life Support (BLS) Certification</li>
          <li>Advanced Cardiovascular Life Support (ACLS) Certification</li>
          <li>Trauma Nursing Core Course (TNCC) Certification</li>
          <li>Emergency Nurse Pediatric Course Certification</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
