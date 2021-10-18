import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Carousel } from "antd";
import pic1 from "../../assets/images/Slider/артко.png";
import pic2 from "../../assets/images/Slider/код.png";
import pic3 from "../../assets/images/Slider/опо.png";
import pic4 from "../../assets/images/Slider/экспо.png";
import pic5 from "../../assets/images/Slider/юрконсульт.png";
import pic6 from "../../assets/images/Slider/Полёт (1).png";
import left from "../../assets/images/Slider/кнопка листать.svg";
import right from "../../assets/images/Slider/кнопка листать 2.svg";
import styles from "./Slider.module.css";

const contentStyle = {
	height: "100%",
	maxWidth: "1440px",
	margin: "0 auto",
	padding: "20px",
};

const Slider = () => {
	const carousel = React.createRef();
	const history = useHistory();

	const [windowSize, setWindowSize] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", handleResize);
	}, []);

	const handleResize = () => {
		setWindowSize(window.innerWidth);
	};

	const next = () => {
		carousel.current.next();
	};

	const previous = () => {
		carousel.current.prev();
	};

	const getFullPortfolio = id => {
		history.push(`/portfolio/${id}`);
	};

	return (
		<div className={styles.container}>
			<Carousel
				ref={carousel}
				autoplay
				dots={false}
				style={contentStyle}
				draggable
				slidesToScroll={1}
				slidesToShow={
					windowSize > 500 && windowSize < 1100 ? 3 : windowSize > 1100 ? 4 : 1
				}
			>
				<div className={styles.sliderRow}>
					<img src={pic1} alt="" onClick={() => getFullPortfolio(4)} />
				</div>
				<div className={styles.sliderRow}>
					<img src={pic2} alt="" onClick={() => getFullPortfolio(6)} />
				</div>
				<div className={styles.sliderRow}>
					<img src={pic3} alt="" onClick={() => getFullPortfolio(1)} />
				</div>
				<div className={styles.sliderRow}>
					<img src={pic4} alt="" onClick={() => getFullPortfolio(3)} />
				</div>
				<div className={styles.sliderRow}>
					<img src={pic5} alt="" onClick={() => getFullPortfolio(5)} />
				</div>

				<div className={styles.sliderRow}>
					<img src={pic6} alt="" onClick={() => getFullPortfolio(2)} />
				</div>
			</Carousel>
			<button onClick={previous} className={styles.prev}>
				<img src={left} alt="" />
			</button>
			<button onClick={next} className={styles.next}>
				<img src={right} alt="" />
			</button>
		</div>
	);
};

export default Slider;
