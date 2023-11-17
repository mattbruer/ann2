import styles from "./style.module.css";

const page = () => {
  return (
    <div className={`${styles.container}`}>
      <h1>References</h1>
      <div className="card-box">
        <div className="card">
          <h2>Bridgette Goldstein,RN</h2>
          <h3>Oncology</h3>
          <p>Charge Nurse</p>
          <p>bridgette.goldstein@nkch.orgNKC</p>
          <p>Hospital 2800 Clay Edwards Drive</p>
          <p>North Kansas City, MO 64116</p>
          <p>816-691-1559</p>
        </div>

        <div className="card">
          <h2>Ladell Heyford, RN</h2>
          <h3>Emergency Department</h3>
          <p>Charge Nurse</p>
          <p>University Health</p>
          <p>7900 Lee's Summit Road</p>
          <p>Kansas City, MO. 64139</p>
          <p>816-404-7500</p>
        </div>

        <div className="card">
          <h2>Dena L. Splitter, NP</h2>
          <p>Family Care</p>
          <p>Family Nurse Practitioner</p>
          <p>Cedar County Memorial Hospital</p>
          <p>320 N. 14th St</p>
          <p>Rich Hill, MO</p>
        </div>
      </div>
    </div>
  );
};

export default page;
