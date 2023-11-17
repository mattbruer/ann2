import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/cv">CV</Link>
      <Link href="/resources">Resources</Link>
    </div>
  );
};

export default Navbar;
