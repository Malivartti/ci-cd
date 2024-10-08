import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
  config.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'));
  config.resolve?.extensions?.push('.ts', '.tsx', '.js');

  config.module?.rules?.push(buildCssLoader(true));

  config.module!.rules = config.module!.rules!.map((rule) => {
    rule = rule as RuleSetRule;
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module?.rules?.push(buildSvgLoader());

  return config;
};
