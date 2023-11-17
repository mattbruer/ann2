"use client";
import React, { useEffect, useState } from "react";
import { playfair } from "@/app/page";
import styles from "./style.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <Image
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src="/nurse4.jpg"
          alt="Nursing"
          fill
        />
      </div>
      <motion.div
        animate={{ textShadow: "8px 8px 5px black" }}
        initial={{ textShadow: "0px 0px 0px black" }}
        transition={{ duration: 2, delay: 1 }}
        className={styles.heroText}
      >
        <p className={`${styles.hi}`}>Hello, I'm</p>
        <p className={`${styles.ann} ${playfair.className}`}>Ann Bruer, RN</p>
        <p className={`${styles.np}`}>Nurse Practitioner Student</p>
      </motion.div>

      <motion.div
        animate={{
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={`${styles.stuff}`}
      >
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className={styles.headshot}
        >
          <Image
            style={{
              objectFit: "cover",
            }}
            src="/ann.webp"
            alt="Nursing"
            fill
          />
        </motion.div>

        {/* <h2 className={`${playfair.className} text-3xl `}>Ann Bruer</h2> */}
        <motion.div
          animate={{ opacity: 1, fontSize: "1rem" }}
          initial={{ opacity: 0, fontSize: "0rem" }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="text-center">
            <p className="mt-6 ">Registered Nurse</p>
            <p className="mb-6 ">Nurse Practitioner Student</p>
          </div>
          <div className="text-center">
            <p>Contact:</p>
            <div className="links">
              <a href="tel:913-710-4053">(913) 710-4053 </a>
              <a href="mailto:aebhiggywife0321@gmail.com">
                aebhiggywife0321@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
