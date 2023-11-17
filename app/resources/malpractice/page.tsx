import styles from "./style.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <h1>Malpractice Insurance</h1>
      <h2>State of Missouri Malpractice Link:</h2>
      <a href="https://insurance.mo.gov/industry/filings/stats/medmalinstr.php">
        https://insurance.mo.gov/industry/filings/stats/medmalinstr.php
      </a>
      <h2>State of Kansas Malpractice Link:</h2>
      <a href="http://www.kslegislature.org/li_2020/b2019_20/measures/documents/supp_note_hb2066_01_0000.pdf">
        http://www.kslegislature.org/li_2020/b2019_20/measures/documents/supp_note_hb2066_01_0000.pdf
      </a>
    </div>
  );
};

export default page;
