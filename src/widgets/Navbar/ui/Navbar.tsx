import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Navbar.module.scss';

interface NavbapProps {
  className?: string
}

const Navbar: FC<NavbapProps> = ({ className }) => (
  <div className={classNames(cls.Navbar, {}, [className])} />
);

export { Navbar };
