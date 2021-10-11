import React from "react";
import classNames from "classnames";
import rus from "../../assets/images/Header/Russia.png";
import eng from "../../assets/images/Header/Unitedkingdom.png";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.navbar__container}>
			<nav className={classNames(styles.navbar__container_burger, styles.fix)}>
				<span id="trigger" className={styles.trigger}></span>
			</nav>
			<div className={styles.navbar__container_menu} id="menu">
				<header>
					<div className={styles.header__container}>
						<div className={styles.nav__item}>
							<p className={styles.logo}>
								<span>&lt;/&gt;</span>Weiser studio
							</p>
						</div>
						<div className={styles.nav__item}>
							<ul className={styles.nav__list}>
								<li className={styles.list__item}>
									<a href="#general" className={styles.list__link}>
										Главная
									</a>
								</li>
								<li className={styles.list__item}>
									<a href="#about" className={styles.list__link}>
										О компании
									</a>
								</li>
								<li className={styles.list__item}>
									<a href="#works" className={styles.list__link}>
										Наши работы
									</a>
								</li>
								<li className={styles.list__item}>
									<a href="#contact" className={styles.list__link}>
										Контакты
									</a>
								</li>
							</ul>
						</div>
						<div className={styles.nav__item}>
							<div className={styles.header__select}>
								<div className={styles.header__select_items}>
									<div
										className={classNames(styles.select__item, styles.active)}
									>
										<img src={rus} alt="" />
										<span>RU</span>
									</div>
									<div className={styles.select__item}>
										<img src={eng} alt="" />
										<span>ENG</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		</div>
	);
};

export default Header;
