import React from "react";
import styles from "./Style.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.line1}></div>
            <span>Criado por Marcelo Lima</span>
            <div className={styles.line2}></div>
        </div>
    );
};

export default Footer;
