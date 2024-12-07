import React from 'react';
import './Main1.scss';
import { useTranslation } from 'react-i18next';

const Main1 = () => {

  const { t } = useTranslation(); 

  return (
    <div className="main1">
      <div className="main1_content">
        <div className="mainText">
          <p>
            {t("main1.title")}
            <br />
          </p>
        </div>
        <div className="describeText">
      <p style={{textAlign: 'center'}} dangerouslySetInnerHTML={{ __html: t('main1.description') }}></p>

        </div>
        <div className="buttons">
          <button className="menuBtn">{t("main1.btn1")}</button>
          <button className="bookBtn">{t("main1.btn2")}</button>
        </div>
      </div>
    </div>
  );
};

export default Main1;
