import React from "react";
import { Carousel, Col, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import pic1 from "../../assets/images/Slider/Rectangle 2.png";
import pic2 from "../../assets/images/Slider/Rectangle 3.png";
import pic3 from "../../assets/images/Slider/Rectangle 4.png";
import pic4 from "../../assets/images/Slider/Rectangle 5.png";
import pic5 from "../../assets/images/Slider/Полёт (1).png";
import styles from "./Slider.module.css";

const contentStyle = {
	height: "100%",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
};

const Slider = () => {
	return (
		<Carousel
			autoplay={false}
			dotPosition="bottom"
			style={contentStyle}
			arrows
			nextArrow={<RightOutlined />}
			prevArrow={<LeftOutlined />}
		>
			<Row
				gutter={[10, 10]}
				align="middle"
				justify="center"
				className={styles.sliderRow}
			>
				<Col span={12}>
					<img src={pic5} alt="" />
				</Col>
				<Col span={12}>
					<img src={pic2} alt="" />
				</Col>
			</Row>
			<Row
				gutter={[10, 10]}
				className={styles.sliderRow}
				align="middle"
				justify="center"
			>
				<Col span={12}>
					<img src={pic3} alt="" />
				</Col>
				<Col span={12}>
					<img src={pic4} alt="" />
				</Col>
			</Row>
		</Carousel>
	);
};

export default Slider;
