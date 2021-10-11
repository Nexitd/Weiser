import React from "react";
import styles from "./AboutCard.module.css";

const AboutCard = ({ image, text, title }) => {
	return (
		<div className={styles.about__item_section}>
			<img src={image} alt="" />
			<h3 className={styles.about__item_subtitle}>{title}</h3>
			<p className={styles.about__item_text}>{text}</p>
		</div>
	);
};

export default AboutCard;
