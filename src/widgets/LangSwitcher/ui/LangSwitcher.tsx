import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const onToggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={onToggle}
    >
      {short ? t('Короткий язык') : t('Язык')}
    </Button>
  );
};

export { LangSwitcher };
