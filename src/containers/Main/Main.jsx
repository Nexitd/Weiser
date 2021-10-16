import React from "react";
import Header from "../../components/Header";
import AboutCard from "../../components/AboutCard/AboutCard";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";
import classNames from "classnames";
import "../../utils/translation";
import vec1 from "../../assets/images/General/Vector (1).svg";
import vec2 from "../../assets/images/General/Vector (2).svg";
import vec from "../../assets/images/General/Vector.svg";
import fril from "../../assets/images/General/фрилансер.png";
import shest from "../../assets/images/About/иконка шестеренка.png";
import brack from "../../assets/images/About/иконка {} 1.png";
import programs from "../../assets/images/About/иконка програм.png";
import chel from "../../assets/images/About/programming11 1.png";
import bigCl from "../../assets/images/Contact/облако большое.svg";
import plane from "../../assets/images/Contact/самолетик.svg";
import smlCl from "../../assets/images/Contact/облако маленькое.svg";
import comp from "../../assets/images/Contact/комп.png";
import styles from "./Main.module.css";

const Main = ({ locale }) => {
  console.log(locale);

  return (
    <div>
      <Header locale={locale} />
      <div className={styles.main}>
        <div className={styles.main__container}>
          <div className={styles.general} id='general'>
            <div className={styles.general__container}>
              <div className={styles.general__item}>
                <h2 className={styles.general__title}>{locale.mainTitle}</h2>
                <h2 className={styles.general__title}>{locale.mainSubtitle}</h2>
                <p className={styles.general__text}>{locale.mainText}</p>
                <p className={styles.general__text}>{locale.mainSubtext}</p>

                <button className={styles.general__send}>
                  {[locale].mainBtn}
                </button>
              </div>
              <div className={styles.general__item}>
                <div className={styles.dollar}>
                  <img src={vec} alt='' />
                  <img src={vec1} alt='' />
                  <img src={vec2} alt='' />
                </div>
                <img className={styles.general__img} src={fril} alt='' />
              </div>
            </div>
          </div>
          <div className={styles.about} id='about'>
            <div className={styles.about__container}>
              <div
                className={classNames(styles.about__item, styles.about__cards)}>
                {locale.aboutCards.map((card) => (
                  <AboutCard
                    key={card.id}
                    text={card.aboutText}
                    title={card.aboutSubTitle}
                    image={card.image}
                  />
                ))}
              </div>
              <div className={styles.about__item}>
                <div className={styles.about__item_content}>
                  <div className={styles.image__block}>
                    <img className={styles.icon__first} src={shest} alt='' />
                    <img className={styles.icon__second} src={brack} alt='' />
                    <img className={styles.icon__third} src={programs} alt='' />
                    <img className={styles.main__pict} src={chel} alt='' />
                  </div>
                  <div className={styles.content__block}>
                    <h3 className={styles.content__block_title}>
                      {locale.aboutTitle}
                    </h3>
                    <p className={styles.content__block_text}>
                      {locale.aboutMainText1}
                    </p>
                    <p className={styles.content__block_text}>
                      {locale.aboutMainText2}
                    </p>
                    <div className={styles.content__block_data}>
                      <div className={styles.data__item}>
                        <p className={styles.data__num}>5</p>
                        <p className={styles.data__text}>
                          {locale.aboutSubText1}
                        </p>
                      </div>
                      <div className={styles.data__item}>
                        <p className={styles.data__num}>58</p>
                        <p className={styles.data__text}>
                          {locale.aboutSubText2}
                        </p>
                      </div>
                      <div className={styles.data__item}>
                        <p className={styles.data__num}>240</p>
                        <p className={styles.data__text}>
                          {locale.aboutSubText3}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.works} id='works'>
            <h3 className={styles.works__title} style={{ textAlign: "center" }}>
              {locale.worksTitle}
            </h3>
            <Slider locale={locale}/>
          </div>
          <div className={styles.contact} id='contact'>
            <div className={styles.contact__container}>
              <div className={styles.contact__head}>
                <h3 className={styles.contact__container_title}>
                  {locale.contactsTitle}
                </h3>
                <span className={styles.contact__container_text}>
                  {locale.contactsSubtitle}
                </span>
              </div>
              <div className={styles.form__cont}>
                <div className={styles.contact__container_item}>
                  <div className={styles.contact__item_block}>
                    <p className={styles.contact__text}>{locale.phone}:</p>
                    <a href='tel:89604437856'>8 (960) 443-78-56</a>
                  </div>
                  <div className={styles.contact__item_block}>
                    <p className={styles.contact__text}>E-Mail:</p>
                    <a href='mailto:weiser_info@mail.com'>
                      weiser_info@mail.com
                    </a>
                  </div>

                  <h2 className={styles.contact__container_title}>
                    {[locale].socialNetworks}
                  </h2>

                  <div className={styles.contact__item_block}>
                    <div className={styles.contact__inform}>
                      <img
                        src='https://img.icons8.com/wired/50/000000/vk-com.png'
                        alt=''
                      />
                      <a href='#'>vk.com/</a>
                    </div>
                    <div className={styles.contact__inform}>
                      <img
                        src='https://img.icons8.com/wired/50/000000/facebook-new.png'
                        alt=''
                      />
                      <a href='#'>facebook.com/</a>
                    </div>
                    <div className={styles.contact__inform}>
                      <img
                        src='https://img.icons8.com/wired/50/000000/telegram-app.png'
                        alt=''
                      />
                      <a href='#'>telegram.org/</a>
                    </div>
                  </div>
                </div>
                <div className={styles.contact__container_item}>
                  <img
                    className={classNames(styles.cloud, styles.first__cloud)}
                    src={bigCl}
                    alt=''
                  />
                  <img
                    className={classNames(styles.cloud, styles.second__cloud)}
                    src={smlCl}
                    alt=''
                  />
                  <img className={styles.plane} src={plane} alt='' />
                  <img className={styles.main__pict} src={comp} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer text={locale.footer} />
    </div>
  );
};

export default Main;
