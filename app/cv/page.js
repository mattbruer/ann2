import React from "react";
import { playfair } from "../page";
import Link from "next/link";
import styles from "./style.module.css";

const page = () => {
  return (
    <div className={`cv`}>
      <div className="header">
        <div className="contact">
          <h1>Ann Bruer, RN, BSN, MS</h1>
          <h3>1601 S Lakestone Drive</h3>
          <h3>Olathe, KS 66061</h3>
          <div className="links">
            <a href="tel:913-710-4053">(913) 710-4053 </a>
            <a href="mailto:aebhiggywife0321@gmail.com">
              aebhiggywife0321@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.links} card-box`}>
        <Link href="./references">
          <button>References</button>
        </Link>
        <Link href="preceptors">
          <button>Preceptors</button>
        </Link>
        <Link href="cover-letter">
          <button>Cover Letter</button>
        </Link>
        <Link href="presentations">
          <button>Presentations</button>
        </Link>
      </div>
      <div className="page">
        <div className="section">
          <h2 className="section-title">Education</h2>
          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Bachelor of Science in Nursing-Accelerated Program</h3>
              </div>
              <div className="section-right">
                <h3>Dec 2019</h3>
              </div>
            </div>
            <h4 className="section-subtext">
              Research College of Nursing and Rockhurst University—Kansas City,
              MO
            </h4>
          </div>

          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>EMT-B Training (EMT Certified)</h3>
              </div>
              <div className="section-right">
                <h3>Jan 2016</h3>
              </div>
            </div>
            <h4 className="section-subtext">
              UMKC School of Medicine - Kansas City, MO
            </h4>
          </div>

          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Master of Science-Human Development and Family Studies</h3>
              </div>
              <div className="section-right">
                <h3>May 1998</h3>
              </div>
            </div>
            <h4 className="section-subtext">
              University of Arkansas-Fayetteville, AR
            </h4>
          </div>

          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Bachelor of Science-Child and Family Development</h3>
              </div>
              <div className="section-right">
                <h3>May 1996</h3>
              </div>
            </div>

            <h4 className="section-subtext">
              Missouri State University—Springfield, MO
            </h4>
          </div>

          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Master of Science-Human Development and Family Studies</h3>
              </div>
              <div className="section-right">
                <h3>May 1998</h3>
              </div>
            </div>

            <h4 className="section-subtext">
              University of Arkansas-Fayetteville, AR
            </h4>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Clinical Experience</h2>
          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Rehabilitation Unit</h3>
              </div>
              <div className="section-right">
                <h3>May – Jun 2019</h3>
              </div>
            </div>
            <h4 className="section-subtext">
              Research Medical Center- Kansas City, MO
            </h4>
          </div>

          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Labor and Delivery Unit</h3>
              </div>
              <div className="section-right">
                <h3>Jun - Jul 2019</h3>
              </div>
            </div>
            <h4 className="section-subtext">
              Centerpoint Medical Center - Independence, MO
            </h4>
          </div>

          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Oncology Unit</h3>
              </div>
              <div className="section-right">
                <h3>Jul - Aug 2019</h3>
              </div>
            </div>
            <h4 className="section-subtext">
              Children’s Mercy Hospital - Kansas City, MO
            </h4>
          </div>

          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>MICU</h3>
              </div>
              <div className="section-right">
                <h3>Sept-Dec 2019</h3>
              </div>
            </div>
            <h4 className="section-subtext">
              Research Medical Center Kansas City, MO
            </h4>
          </div>

          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Master of Science-Human Development and Family Studies</h3>
              </div>
              <div className="section-right">
                <h3>May 1998</h3>
              </div>
            </div>
            <h4 className="section-subtext">
              University of Arkansas-Fayetteville, AR
            </h4>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Health Care Work Experience</h2>
          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Registered Nurse-Emergency Department</h3>
              </div>
              <div className="section-right">
                <h3>Mar 2020-present</h3>
              </div>
            </div>
            <ul>
              <h4 className="section-subtext">
                University Health (formerly Truman Medical Center)
              </h4>
              <li>Provide direct patient care with multiple medical issues</li>
              <li>
                Triage patients and determine priority based on presentation
              </li>
              <li>Perform focused, age specific assessments</li>
              <li>
                Monitor patients for signs of life threatening complications
              </li>
              <li>
                Administer medications as ordered, utilizing the five rights
              </li>
              <li>Evaluate patient condition and response to treatment</li>
              <li>
                Collaborate with physicians and other health care members for
                patient care
              </li>
              <li>
                Exhibit flexibility in assignments and assist nursing staff in
                ER
              </li>
              <li>Transfer patient to ICC/CCU</li>
              <li>
                Provide discharged patients with planning and aftercare
                instructions
              </li>
            </ul>
          </div>

          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Patient Care Technician</h3>
              </div>
              <div className="section-right">
                <h3>Feb 2017 - Mar 2020</h3>
              </div>
            </div>
            <ul className="list">
              <h4 className="section-subtext">
                Truman Medical Center -Lakewood Emergency Department
              </h4>
              <li>Use critical thinking to prioritize patient care</li>
              <li>Direct patient care</li>

              <ul className="sublist">
                <li>Assess vital signs</li>
                <li>Perform EKGs</li>
                <li>Collect blood/urine specimens</li>
                <li>HIV screenings</li>
                <li>Diabetes testing</li>
              </ul>

              <li>Maintain patient safety in 1:1 observation</li>
              <li>Conduct POC daily testing/stock patient rooms</li>
              <li>
                Work as patient care team member alongside nursing and physician
                staff
              </li>
            </ul>
          </div>

          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Bridge Coordinator</h3>
              </div>
              <div className="section-right">
                <h3>Jun 2003 – Nov 2007</h3>
              </div>
            </div>
            <ul className="list">
              <h4 className="section-subtext">
                Rose Brooks Center/St. Joseph Medical Center—Kansas City, MO
              </h4>
              <li>
                Provided Intimate Partner Violence (IPV) advocacy to patients in
                hospital setting
              </li>
              <li>Documented in patient charts</li>
              <li>Trained healthcare professional on IPV screening process</li>
              <li>
                Chaired Domestic Violence Task Force for St. Joseph Medical
                Center
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Activities and Honors</h2>
          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>
                  Research College of Nursing and Rockhurst University Dean’s
                  List
                </h3>
              </div>
              <div className="section-right">
                <h3>Spring 2019 Term</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Certifications</h2>
          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Basic Life Support (BLS) Certification</h3>
              </div>
              <div className="section-right">
                <h3>4/1/2022-4/1/2024</h3>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>
                  Advanced Cardiovascular Life Support (ACLS) Certification
                </h3>
              </div>
              <div className="section-right">
                <h3>4/1/2022-4/1/2024</h3>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Trauma Nursing Core Course (TNCC) Certification</h3>
              </div>
              <div className="section-right">
                <h3>8/1/2021-2/28-2025</h3>
              </div>
            </div>
          </div>

          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Emergency Nurse Pediatric Course (ENPC)</h3>
              </div>
              <div className="section-right">
                <h3>7/7/2020-7/7/2024</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Licensures</h2>
          <div className="section-content">
            <div className="section-header-date">
              <div className="section-left">
                <h3>Missouri State Board of Nursing Registered Nurse</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
