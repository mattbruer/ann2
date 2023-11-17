import React from "react";

import styles from "./style.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={` ${styles.about}`}>
      <h2>About Me</h2>
      <p>
        I'm Ann Bruer, a certified family nurse practitioner based in Kansas
        City, Missouri. Prior to nursing, I had a 15-year career in victim
        advocacy, mainly focusing on intimate partner violence. At 40, I
        switched careers, first becoming an EMT and eventually earning my BSN
        and MSN.
      </p>

      <p>
        Alongside my studies, I worked at North Kansas City Hospital in various
        departments, gaining diverse experience with orthopedic, oncology,
        rehabilitation, telemetry, and neurology patients. This broadened my
        understanding of chronic health conditions and their treatments.
      </p>

      <p>
        I bring a unique perspective to patient care as a congenital heart
        defect patient who underwent three open-heart surgeries. I understand
        the uncertainty of long-term health care. Additionally, my husbands's
        diagnosis with Stage IV lung cancer during my BSN program taught me to
        navigate life's unexpected challenges.
      </p>

      <p>
        I'm happily married with two children, two stepdaughters, and two
        grandsons. Our furry family members include three dogs—Miller, Laila,
        and Chico. Outside of work, I cherish family time, travel, and have a
        keen interest in true crime documentaries.
      </p>
      <Link href="./philosophy">
        <button>Read about my Nursing philosophy</button>
      </Link>
    </div>
  );
};

export default About;
