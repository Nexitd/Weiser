import group from "../assets/images/About/группа.svg";
import key from "../assets/images/About/ключ.svg";
import star from "../assets/images/About/звезда.svg";

export const rus = {
  lang: "rus",
  headerMain: "Главная",
  headerAbout: "О компании",
  headerWorks: "Наши работы",
  headerContacts: "Контакты",
  mainTitle: "РАЗРАБОТКА",
  mainSubtitle: "ВЕБ ПРИЛОЖЕНИЙ",
  mainText:
    "Наша компания занимается разработкой web решений различной сложности, будь то простой сайт визитка, лендинг или интернет магазин.",
  mainSubtext:
    "Для подробной консультации по вопросам, касающимся полного списка предоставляемых услуг и их стоимости обращайтесь в наш чат, либо оставьте заявку на нашу электронную почту.",
  mainBtn: "ОТСАВИТЬ ЗАЯВКУ",
  aboutCards: [
    {
      id: 0,
      image: star,
      aboutSubTitle: "Высокое качество",
      aboutText:
        "Мы используем только новые технологии при разработке, что гарантирует быстродействие и гибкость вашего web приложения.",
    },
    {
      id: 1,
      image: group,
      aboutSubTitle: "Опытная команда",

      aboutText:
        "В нашей команде только опытные разработчики. Код проходит тестирование, что положительно влияет на надежность продукта.",
    },
    {
      id: 2,
      image: key,
      aboutSubTitle: "Открытый доступ",
      aboutText:
        "Предоставляем полный отчет деятельности разработчиков с подробным описанием проделанной работы.",
    },
  ],
  aboutTitle: "О КОМПАНИИ",
  aboutMainText1:
    "Наша компания занимается разработкой web решений различной сложности, будь то простой сайт визитка, лендинг или интернет магазин. Также поможем интегрировать существующее web приложение с различными сторонними сервисами (мессенджеры, cms, платежные системы, crm и др.)",
  aboutMainText2:
    "Для подробной консультации по вопросам, касающимся полного списка предоставляемых услуг и их стоимости обращайтесь в наш чат, либо оставьте заявку на нашу электронную почту.",
  aboutSubText1: "лет в IT",
  aboutSubText2: "закрытых проектов",
  aboutSubText3: "довольных клиентов",
  worksTitle: "НАШИ РАБОТЫ",
  contactsTitle: "КОНТАКТЫ",
  contactsSubtitle: "мы ответим за 10 минут!",
  phone: "Телефон",
  socialNetworks: "МЫ В СОЦСЕТЯХ",
  footer: "© 2021 Weiser Studio. Все права защищены.",
  portfolio: [
    {
      id: 1,
      title:
        "Frontend & Backend разработка и поддержка вебсайта для крупной компании по промышленной безопасности (больше 8 лет опыта и 300+ клиентов).",
      subText: "Дизайн вебсайта был создан в соответствии с брендом клиента.",
      bodyText:
        "Особенности вебсайта: умные слайдеры, умный опрос (подбор релевантных решений на основе ответов пользователя), форма обратной связи, блок с cookie, страница настроена на максимально удобный просмотр и адаптирована под любой вид устройств.",
      footText: "Средства разработки: Symfony, HTML, SCSS, Vue.js",
      images: [
        <img
          src='/src/assets/images/Portfolio/1/screencapture-localhost-pipeFinal-2021-09-26-14_22_12.png'
          alt=''
        />,
        <img src='/src/assets/images/Portfolio/1/Screenshot_1.png' alt='' />,
        <img src='/src/assets/images/Portfolio/1/Screenshot_2.png' alt='' />,
        <img src='/src/assets/images/Portfolio/1/Screenshot_3.png' alt='' />,
        <img src='/src/assets/images/Portfolio/1/Screenshot_4.png' alt='' />,
      ],
    },
    {
      id: 2,
      title:
        "Frontend & Backend разработка и поддержка вебсайта для компании, организующей полеты на воздушных шарах.",
      subText: "Дизайн вебсайта был создан в соответствии с брендом клиента.",
      bodyText:
        "Особенности вебсайта: умные слайдеры, форма обратной связи, блок с cookie, страница настроена на максимально удобный просмотр и адаптирована под любой вид устройств.",
      footText:
        "Средства разработки: JavaScript, Yii2, HTML, Slick, jQuery, Less",
      images: [
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-localhost-balloon-2021-09-26-14_41_27'
            alt=''
          />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_5.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_6.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_7.png' alt='' />
        </div>,
      ],
    },
    {
      id: 3,
      title:
        "Frontend разработка и поддержка вебсайта для крупного конгрессно-выставочного центра в Санкт-Петербурге.",
      subText:
        "Дизайн вебсайта был создан с нуля в соответствии с требованием клиента.",
      bodyText:
        "Особенности вебсайта: автоперевод страницы на другие языки, новости и предстоящие события интегрированы с помощью API, блок с cookie, страница настроена на максимально удобный просмотр и адаптирована под любой вид устройств.",
      footText: "Средства разработки: JavaScript, HTML, CSS, jQuery, API",
      images: [
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-localhost-expoforum-main-2021-09-26-14_46_55.png'
            alt=''
          />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_8.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_9.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_10.png' alt='' />
        </div>,
      ],
    },
    {
      id: 4,
      title:
        "Frontend & Backend разработка и поддержка вебсайта для компании, занимающейся арендой технического оборудования.",
      subText: "Дизайн вебсайта был создан с нуля и принят без изменений.",
      bodyText:
        "Особенности вебсайта: форма обратной связи, форма оплаты, слайдеры и вкладки, страница настроена на максимально удобный просмотр и адаптирована под любой вид устройств.",
      footText: "Средства разработки: React, HTML, webpack, CSS, Ant, Laravel",
      images: [
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-localhost-3000-2021-09-26-10_25_04.png'
            alt=''
          />
        </div>,
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-localhost-3000-2021-09-26-10_26_15.png'
            alt=''
          />
        </div>,
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-localhost-3000-2021-09-26-10_26_47.png'
            alt=''
          />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_11.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_12.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_13.png' alt='' />
        </div>,
      ],
    },
    {
      id: 5,
      title:
        "Frontend & Backend разработка и поддержка целевой страницы для компании, предоставляющей юридические консультации.",
      subText: "Дизайн вебсайта был в соответствии с требованиями клиента.",
      bodyText:
        "Особенности вебсайта: форма обратной связи, интеграция Google Maps, интеграция внутренней CRM системы, страница настроена на максимально удобный просмотр и адаптирована под любой вид устройств.",
      footText: "Средства разработки: HTML, SCSS, CSS, Vanilla, gulp, Node.js",
      images: [
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-nexitd-github-io-Urist-2021-09-26-11_48_27.png'
            alt=''
          />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_14.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_15.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_16.png' alt='' />
        </div>,
      ],
    },
    {
      id: 6,
      title:
        "Frontend разработка и поддержка вебсайта для IT стартапа, занимающегося технической поддержкой.",
      subText: "Дизайн вебсайта был в соответствии с требованиями клиента.",
      bodyText:
        "Дизайн вебсайта был полностью переработан в соответствии с новыми требованиями стартапа. Функциональная составляющая вебсайта была полностью переписана с помощью фреймворка Vue.js.",
      footText:
        "Средства разработки: CSS, HTML, Bootstrap, SCSS, webpack, Vue.js",
      images: [
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-nexitd-github-io-Coding-on-Steroids-2021-09-28-20_06_30.png'
            alt=''
          />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_17.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_18.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_19.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_20.png' alt='' />
        </div>,
      ],
    },
  ],
};

export const eng = {
  lang: "eng",
  headerMain: "Home",
  headerAbout: "About us",
  headerWorks: "Our works",
  headerContacts: "Contacts",
  mainTitle: "Web application",
  mainSubtitle: "development",
  mainText:
    "Our company develops web solutions by different complications, if it will be a simple business card website, landing page or online store.",
  mainSubtext:
    "For detailed information on issues related to the full list of services provided and their cost, you can refer to our chat or you can leave the request in our email.",
  mainBtn: "Conact us",
  aboutCards: [
    {
      id: 0,
      aboutSubTitle: "High quality",
      aboutText:
        "Мы используем только новые технологии при разработке, что гарантирует быстродействие и гибкость вашего web приложения.",
      image: star,
    },
    {
      id: 1,
      image: group,
      aboutSubTitle: "Experienced team",
      aboutText:
        "There are only skilled developers in our team.The code is accurately tested which positively affects on the safety of the final product.",
    },

    {
      id: 2,
      image: key,
      aboutSubTitle: "Open access",
      aboutText:
        "And the main thing - we provide the full reporton developers’ activities with a detailed description of the work done.",
    },
  ],
  aboutTitle: "ABOUT US",
  aboutMainText1:
    "Our company develops web solutions by different complications, if it will bea simple business card website, landing page or online store. Also we can help to integrate the existing web application with various third party services (messengers, cms, payment systems, crm, etc.)",
  aboutMainText2:
    "For detailed information on issues related to the full list of services providedand their cost, you can refer to our chat or you can leave the request in our email.",
  aboutSubText1: "years in IT",
  aboutSubText2: "closed projects",
  aboutSubText3: "satisfied customers",
  worksTitle: "Our works",
  contactsTitle: "CONTACTS",
  contactsSubtitle: "we will answer in 10 minutes!",
  phone: "Phone number",
  socialNetworks: "WE ARE IN A SOCIAL NETWORKS",
  footer: "© 2021 Weiser Studio. All rights reserved.",
  portfolio: [
    {
      id: 1,
      title:
        "Frontend & Backend development and support of a website for a big industrial safety company (more than 8 years of experience and 300+ clients).",
      subText:
        "The design of the website was created according to the company's branding.",
      bodyText:
        "Functionality implemented: smart sliders, smart quiz, e-mail feedback form, cookie block, comfortable page surfing.",
      footText: "Symfony, HTML, SCSS, Vue.js",
      images: [
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-localhost-pipeFinal-2021-09-26-14_22_12.png'
            alt=''
          />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_1.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_2.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_3.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_4.png' alt='' />
        </div>,
      ],
    },
    {
      id: 2,
      title:
        "Frontend & Backend development and support of a website for a company that provides balloon flights.",
      subText:
        "The design of the website was created according to the company's branding.",
      bodyText:
        "Functionality implemented: smart sliders, e-mail feedback form, cookie block, website adjusted for comfortable page surfing.",
      footText: "JavaScript, Yii2, HTML, Slick, jQuery, Less",
      images: [
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-localhost-balloon-2021-09-26-14_41_27'
            alt=''
          />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_5.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_6.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_7.png' alt='' />
        </div>,
      ],
    },
    {
      id: 3,
      title:
        "Frontend development and supporting of a website for a big convention & exhibition center in Saint-Petersburg.",
      subText:
        "The design was created from scratch according to the client's specifications.",
      bodyText:
        "Functionality implemented: comfortable page surfing, cookie block, page auto-translation, events & news pulled from API.",
      footText: "JavaScript, HTML, CSS, jQuery, API",
      images: [
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-localhost-expoforum-main-2021-09-26-14_46_55.png'
            alt=''
          />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_8.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_9.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_10.png' alt='' />
        </div>,
      ],
    },
    {
      id: 4,
      title:
        "Frontend & backend development, and support of a website for a technical equipment leasing company.",
      subText:
        "The design of the website was created from scratch and approved without revisions.",
      bodyText:
        "Functionality implemented: feedback form, payment form, portfolio section, tabs & sliders.",
      footText: "React, HTML, webpack, CSS, Ant, Laravel",
      images: [
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-localhost-3000-2021-09-26-10_25_04.png'
            alt=''
          />
        </div>,
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-localhost-3000-2021-09-26-10_26_15.png'
            alt=''
          />
        </div>,
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-localhost-3000-2021-09-26-10_26_47.png'
            alt=''
          />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_11.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_12.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_13.png' alt='' />
        </div>,
      ],
    },
    {
      id: 5,
      title:
        "Frontend & Backend development and support of a landing page for a legal consultations bureau.",
      subText:
        "The design of the website was created according to the client's requirements.",
      bodyText:
        "Functionality implemented: feedback form, Google maps integration, internal CRM integration.",
      footText: "HTML, SCSS, CSS, Vanilla, gulp, Node.js",
      images: [
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-nexitd-github-io-Urist-2021-09-26-11_48_27.png'
            alt=''
          />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_14.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_15.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_16.png' alt='' />
        </div>,
      ],
    },
    {
      id: 6,
      title:
        "Frontend development and support of a website for an IT technical support startup.",
      subText:
        "The design of the website was created according to the company's requirements.",
      bodyText:
        "Functionality implemented: feedback form and pricing package selection. The website is being rewritten in the Vue.js framework and was fully redesigned according to the new branding requirements.",
      footText: "CSS, HTML, Bootstrap, SCSS, webpack, Vue.js",
      images: [
        <div>
          <img
            src='/src/assets/images/Portfolio/1/screencapture-nexitd-github-io-Coding-on-Steroids-2021-09-28-20_06_30.png'
            alt=''
          />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_17.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_18.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_19.png' alt='' />
        </div>,
        <div>
          <img src='/src/assets/images/Portfolio/1/Screenshot_20.png' alt='' />
        </div>,
      ],
    },
  ],
};
