import { useTranslation } from 'react-i18next';

const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button type="button" onClick={() => changeLanguage('en')}>
        EN
      </button>
      <button type="button" onClick={() => changeLanguage('ru')}>
        RU
      </button>
    </div>
  );
};

export default ChangeLanguage;
