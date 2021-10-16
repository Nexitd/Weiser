import React from "react";
import { Slider } from "antd";
import { useSelector } from "react-redux";
import styles from "./PortfolioFull.module.css";

const PortfolioFull = () => {
  const { portfolioData } = useSelector((state) => state.portfolio);

  return (
    <div>
      <h2>{portfolioData[0].title}</h2>
      <div>
        <div>
          <Slider>
            {portfolioData[0].images.map((slide) => {
              console.log(slide);
            })}
          </Slider>
        </div>
        <div>
          <p className={styles.text}>{portfolioData[0].subText}</p>
          <p className={styles.text}>{portfolioData[0].bodyText}</p>
          <p className={styles.text}>{portfolioData[0].footText}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFull;
