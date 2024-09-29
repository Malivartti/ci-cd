import 'app/styles/index.scss'
import { ReactRenderer } from '@storybook/react';
import { DecoratorFunction } from 'storybook/internal/types';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: DecoratorFunction<ReactRenderer, { [x: string]: any; }> = (Story) => (<BrowserRouter><Story /></BrowserRouter> );

