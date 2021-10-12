import React, { useState } from "react";
import classNames from "classnames";
import { Anchor } from "antd";
import rus from "../../assets/images/Header/Russia.png";
import eng from "../../assets/images/Header/Unitedkingdom.png";
import styles from "./Header.module.css";

const Header = () => {
	const [isMenuVisible, setMenuVisible] = useState(false);

	const { Link } = Anchor;
	return (
		<div className={styles.navbar__container}>
			<nav className={classNames(styles.navbar__container_burger, styles.fix)}>
				<span
					className={
						isMenuVisible
							? classNames(styles.trigger, styles.active)
							: styles.trigger
					}
					onClick={() => setMenuVisible(prev => !prev)}
				></span>
			</nav>
			<div
				className={
					isMenuVisible
						? classNames(styles.navbar__container_menu, styles.show__menu, styles.animate)
						: styles.navbar__container_menu
				}
			>
				<header>
					<div className={styles.header__container}>
						<div className={styles.nav__item}>
							<p className={styles.logo}>
								<span>&lt;/&gt;</span>Weiser studio
							</p>
						</div>
						<div className={styles.nav__item}>
							<Anchor className={styles.nav__list}>
								<Link
									href="#general"
									title="Главная"
									className={styles.list__link}
								/>
								<Link
									href="#about"
									title="О компании"
									className={styles.list__link}
								/>
								<Link
									href="#works"
									title="Наши работы"
									className={styles.list__link}
								/>
								<Link
									href="#contact"
									title="Контакты"
									className={styles.list__link}
								/>
							</Anchor>
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
