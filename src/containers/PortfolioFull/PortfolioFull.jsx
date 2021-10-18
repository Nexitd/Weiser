import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
	getRusFullPortfolioInfo,
	getEngFullPortfolioInfo,
} from "../../store/reducers/portfolioReducer";
import classNames from "classnames";
import pic1 from "../../assets/images/Slider/артко.png";
import pic2 from "../../assets/images/Slider/код.png";
import pic3 from "../../assets/images/Slider/опо.png";
import pic4 from "../../assets/images/Slider/экспо.png";
import pic5 from "../../assets/images/Slider/юрконсульт.png";
import pic6 from "../../assets/images/Slider/Полёт (1).png";
import styles from "./PortfolioFull.module.css";

const PortfolioFull = ({ locale }) => {
	const dispatch = useDispatch();
	const { portfolioData } = useSelector(state => state.portfolio);
	const history = useHistory();
	const { id } = useParams();

	useEffect(() => {
		locale.lang === "rus"
			? dispatch(getRusFullPortfolioInfo(id))
			: dispatch(getEngFullPortfolioInfo(id));
	}, [dispatch, id, locale.lang]);

	const changePortfolio = id => {
		history.push(`/portfolio/${id}`);
	};

	return (
		<div className={styles.container}>
			{Object.keys(portfolioData).length === 0 ? (
				console.log("")
			) : (
				<>
					<div className={styles.head}>
						<h2>{portfolioData.title}</h2>
					</div>
					<div className={styles.body}>
						<div className={classNames(styles.itemBlock, styles.slider)}>
							<Carousel autoplay={true}>
								{portfolioData.images.map((slide, index) => (
									<div key={index}>
										<img src={slide} alt="" className={styles.slideImg} />
									</div>
								))}
							</Carousel>
						</div>
						<div className={styles.section}>
							<div className={styles.itemBlock}>
								<p className={styles.text}>{portfolioData.subText}</p>
								<p className={styles.text}>{portfolioData.bodyText}</p>
								<p className={styles.text}>{portfolioData.footText}</p>
							</div>
							<div className={classNames(styles.itemBlock, styles.works)}>
								<h2>{locale.worksTitle}</h2>
								<div className={styles.worksCont}>
									<img src={pic1} alt="" onClick={() => changePortfolio(4)} />
									<img src={pic2} alt="" onClick={() => changePortfolio(6)} />
									<img src={pic3} alt="" onClick={() => changePortfolio(1)} />
									<img src={pic4} alt="" onClick={() => changePortfolio(3)} />
									<img src={pic5} alt="" onClick={() => changePortfolio(5)} />
									<img src={pic6} alt="" onClick={() => changePortfolio(2)} />
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default PortfolioFull;
