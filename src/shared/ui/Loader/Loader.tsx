import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames(cls.Loader, {}, [className])}>
    <div className={cls['lds-ellipsis']}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export { Loader };
