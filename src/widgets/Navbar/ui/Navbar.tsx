import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbapProps {
  className?: string
}

const Navbar: FC<NavbapProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.INVERTED} to="/">{t('Главаная')}</AppLink>
      <AppLink theme={AppLinkTheme.INVERTED} to="about">{t('О нас')}</AppLink>
    </div>
  );
};

export { Navbar };
