import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import styles from './LangSwitchButton.module.css';

const LangSwitchButton = () => {
  const { i18n, t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState('en');

  const handleLangChange = (val) => {
    i18n.changeLanguage(val);
    setSelectedLang(val);
  };

  return (
    <div className={styles.langSwitchButton} onClick={() => handleLangChange(selectedLang === 'br' ? 'en' : 'br')}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={selectedLang === 'br'}
        readOnly
      />
      <label className={styles.label}>
        <span className={styles.toggle}></span>
      </label>
      <span className={styles.language}>{selectedLang === 'br' ? 'Portuguese' : 'English'}</span>
    </div>
  );
};

export default LangSwitchButton;
