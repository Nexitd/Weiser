import React, { useState } from "react";
import classNames from "classnames";
import { Anchor } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
	translateToRus,
	translateToEng,
} from "../../store/reducers/translationReducer";
import "../../utils/translation";
import rus from "../../assets/images/Header/Russia.png";
import eng from "../../assets/images/Header/Unitedkingdom.png";
import styles from "./Header.module.css";

const Header = ({ locale }) => {
	const [isMenuVisible, setMenuVisible] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();
	const { Link } = Anchor;

	const changeLang = lang => {
		lang === "rus"
			? dispatch(translateToRus(lang))
			: dispatch(translateToEng(lang));
	};

	const backMain = () => {
		history.push("/");
	};

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
						? classNames(
								styles.navbar__container_menu,
								styles.show__menu,
								styles.animate
						  )
						: styles.navbar__container_menu
				}
			>
				<header>
					<div className={styles.header__container}>
						<div className={styles.nav__item} onClick={backMain}>
							<p className={styles.logo} style={{ cursor: "pointer" }}>
								<span>&lt;/&gt;</span>Weiser studio
							</p>
						</div>
						<div className={styles.nav__item}>
							<Anchor className={styles.nav__list}>
								<Link
									href="#general"
									title={locale.headerMain}
									className={styles.list__link}
								/>
								<Link
									href="#about"
									title={locale.headerAbout}
									className={styles.list__link}
								/>
								<Link
									href="#works"
									title={locale.headerWorks}
									className={styles.list__link}
								/>
								<Link
									href="#contact"
									title={locale.headerContacts}
									className={styles.list__link}
								/>
							</Anchor>
						</div>
						<div className={styles.nav__item}>
							<div className={styles.header__select}>
								<div className={styles.header__select_items}>
									<div
										className={classNames(
											styles.select__item,
											locale.lang === "rus" ? styles.active : ""
										)}
										onClick={() => changeLang("rus")}
									>
										<img src={rus} alt="" />
										<span>RU</span>
									</div>
									<div
										className={classNames(
											styles.select__item,
											locale.lang === "eng" ? styles.active : ""
										)}
										onClick={() => changeLang("eng")}
									>
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
