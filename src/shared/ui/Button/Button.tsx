import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
  theme?: ButtonTheme
}

const Button: FC<ButtonProps> = ({
  className, children, theme, ...otherProps
}) => (
  <button
    type="button"
    className={classNames(cls.Button, {}, [className, cls[theme]])}
    {...otherProps}
  >
    {children}
  </button>
);

export { Button };
