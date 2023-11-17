import styles from "./style.module.css";

const page = () => {
  return (
    <div className={styles.content}>
      <div className={styles.section}>
        <h2 className={styles.heading}>EXAM</h2>
        <ul>
          <li>
            <a
              href="https://www.aanpcer.org/certifications
      "
            >
              American Nurse Credentialing Center (ANNC)
            </a>
          </li>
          <li>
            <a href="https://www.aanpcert.org/certifications">
              American Academy of Nurse Practitioner Certification Board (AANP)
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>LICENSE APPLICATION</h2>
        <ul>
          <li>
            <a href="http://pr.mo.gov/boards/nursing/APRN%20App%20and%20Auth%20to%20Release.pdf">
              State of Missouri APN Application Link
            </a>
          </li>
          <li>
            <a href="https://ksbn.kansas.gov/aprn-initital-application/">
              State of Kansas APN Application Link
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>
          NATIONAL PLAN & PROVIDE ENUMERATION IDENTIFIER (NPI)
        </h2>
        <ul>
          <li>
            <a href="https://nppes.cms.hhs.gov/#/">Application</a>
          </li>
          <li>
            <a href="https://www.cms.gov/Medicare/CMS-Forms/CMS-Forms/downloads/CMS10114.pdf">
              National Plan & Provide Enumeration Identifier (NPI) Paper
              Application Form
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
