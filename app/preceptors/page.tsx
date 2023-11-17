import styles from "./style.module.css";

const page = () => {
  return (
    <div className={`${styles.container}`}>
      <h1>Preceptors</h1>
      <div className="card-box">
        <div className="card">
          <h2>Justin Halberstadt, APRN</h2>
          <h3>KU MedWest</h3>
          <h3>7405 Renner Rd.</h3>
          <h3>Shawnee, KS 66217</h3>

          <h3>
            Phone: <a href="tel:(913)588-1227">(913)588-1227</a>
          </h3>
          <h3>
            Email:
            <a href="mailto:jhalberstadt@kumc.edu">jhalberstadt@kumc.edu</a>
          </h3>
        </div>
        <div className="card">
          <h2>Ruth Steward, CNM</h2>
          <h3>Kansas City Women&apos;s Clinic</h3>
          <h3>2340 East Meyer Blvd Ste 598</h3>
          <h3>Kansas City, MO 64132</h3>

          <h3>
            Phone: <a href="tel:(816)444-6888">(816)444-6888</a>
          </h3>
        </div>
        <div className="card">
          <h2>Dena L. Splitter</h2>
          <h3>Cedar County Memorial Hospital</h3>
          <h3>320 N. 14th St</h3>
          <h3>Rich Hill, MO</h3>
        </div>
        <div className="card">
          <h2>April E. Kimball</h2>
          <h3>Kansas City hospice and Palliative Care</h3>
          <h3>2800 Clay Edwards Dr.</h3>
          <h3>North Kansas City, MO</h3>
        </div>
        <div className="card">
          <h2>Walter Ingram, MD</h2>
          <h3>Reed Internal Medicine Lawrence Memorial Hospital</h3>
          <h3>404 Maine</h3>
          <h3>Lawrence, KS 66044</h3>
          <h3>
            Phone: <a href="tel:(785)505-5635">(785)505-5635</a>
          </h3>
          <h3>
            Email:
            <a href="mailto:Walter.Ingram@lmh.org">Walter.Ingram@lmh.org</a>
          </h3>
        </div>
        <div className="card">
          <h2>Sherri Quick, RN, MSN, CPNP</h2>
          <h3>KU MedWest</h3>
          <h3>241 NW McNary Ct</h3>
          <h3>Lee&apos;s Summit, MO 64086</h3>

          <h3>
            Phone: <a href="tel:(816)347-0064">(816)347-0064</a>
          </h3>
          <h3>
            Website:
            <a href="https://www.preferredpediatrics-ls.com/sherri-quick-rn-msn-cpnp/">
              https://www.preferredpediatrics-ls.com/sherri-quick-rn-msn-cpnp/
            </a>
          </h3>
        </div>
        <div className="card">
          <h2>Crystal A. Sheets, APRN</h2>
          <h3>
            Website:
            <a href="https://providerdirectory.universityhealthkc.org/provider/Crystal+A.+Sheets/2237794">
              https://providerdirectory.universityhealthkc.org/provider/Crystal+A.+Sheets/2237794
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default page;
