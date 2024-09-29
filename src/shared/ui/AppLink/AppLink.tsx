import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string
  children?: ReactNode
  theme? : AppLinkTheme
}

const AppLink: FC<AppLinkProps> = ({
  className, theme = AppLinkTheme.PRIMARY, children, to, ...otherProps
}) => (
  <Link
    className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    to={to}
    {...otherProps}
  >
    {children}
  </Link>
);

export { AppLink };
