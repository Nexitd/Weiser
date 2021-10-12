import React from "react";
import styles from "./Footer.module.css";

const Footer = ({text}) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<p className={styles.footer__text}>{text}</p>
			</div>
		</footer>
	);
};

export default Footer;
