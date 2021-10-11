import React from "react";
import Header from "../../components/Header";
import AboutCard from "../../components/AboutCard/AboutCard";
import Slider from "../../components/Slider";
import { data } from "../../utils/aboutData";
import classNames from "classnames";
import vec1 from "../../assets/images/General/Vector (1).svg";
import vec2 from "../../assets/images/General/Vector (2).svg";
import vec from "../../assets/images/General/Vector.svg";
import fril from "../../assets/images/General/фрилансер.png";
import shest from "../../assets/images/About/иконка шестеренка.png";
import brack from "../../assets/images/About/иконка {} 1.png";
import programs from "../../assets/images/About/иконка програм.png";
import chel from "../../assets/images/About/programming11 1.png";
import styles from "./Main.module.css";

const Main = () => {
	return (
		<div>
			<Header />
			<div className={styles.main}>
				<div className={styles.main__container}>
					<div className={styles.general} id="general">
						<div className={styles.general__container}>
							<div className={styles.general__item}>
								<h2 className={styles.general__title}>разработка</h2>
								<h2 className={styles.general__title}>веб приложений</h2>
								<p className={styles.general__text}>
									Наша компания занимается разработкой web решений различной
									сложности, будь то простой сайт визитка, лендинг или интернет
									магазин.
								</p>
								<p className={styles.general__text}>
									Для подробной консультации по вопросам, касающимся полного
									списка предоставляемых услуг и их стоимости обращайтесь в наш
									чат, либо оставьте заявку на нашу электронную почту.
								</p>

								<button className={styles.general__send} id="make__request">
									оставить заявку
								</button>
							</div>
							<div className={styles.general__item}>
								<div className={styles.dollar}>
									<img src={vec} alt="" />
									<img src={vec1} alt="" />
									<img src={vec2} alt="" />
								</div>
								<img className={styles.general__img} src={fril} alt="" />
							</div>
						</div>
					</div>
					<div className={styles.about} id="about">
						<div className={styles.about__container}>
							<div
								className={classNames(styles.about__item, styles.about__cards)}
							>
								{data.map(el => (
									<AboutCard
										key={el.id}
										text={el.text}
										title={el.title}
										image={el.image}
									/>
								))}
							</div>
							<div className={styles.about__item}>
								<div className={styles.about__item_content}>
									<div className={styles.image__block}>
										<img className={styles.icon__first} src={shest} alt="" />
										<img className={styles.icon__second} src={brack} alt="" />
										<img className={styles.icon__third} src={programs} alt="" />
										<img className={styles.main__pict} src={chel} alt="" />
									</div>
									<div className={styles.content__block}>
										<h3 className={styles.content__block_title}>О компании</h3>
										<p className={styles.content__block_text}>
											Наша компания занимается разработкой web решений различной
											сложности, будь то простой сайт визитка, лендинг или
											интернет магазин. Также поможем интегрировать существующее
											web приложение с различными сторонними сервисами
											(мессенджеры, cms, платежные системы, crm и др.)
										</p>
										<p className={styles.content__block_text}>
											Для подробной консультации по вопросам, касающимся полного
											списка предоставляемых услуг и их стоимости обращайтесь в
											наш чат, либо оставьте заявку на нашу электронную почту.
										</p>
										<div className={styles.content__block_data}>
											<div className={styles.data__item}>
												<p className={styles.data__num}>5</p>
												<p className={styles.data__text}>лет в IT</p>
											</div>
											<div className={styles.data__item}>
												<p className={styles.data__num}>58</p>
												<p className={styles.data__text}>закрытых проектов</p>
											</div>
											<div className={styles.data__item}>
												<p className={styles.data__num}>240</p>
												<p className={styles.data__text}>довольных клиентов</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.works} id="works">
						<h3 className={styles.works__title} style={{ textAlign: "center" }}>
							Наши работы
						</h3>
						<Slider />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
