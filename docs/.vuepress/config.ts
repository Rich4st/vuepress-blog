
import { defineUserConfig, defaultTheme } from 'vuepress'
import { themeConfig } from './config/themeConfig'
import { plugins } from './config/plugins';

export default defineUserConfig({
  title: 'VuePress',
  description: 'Vue-powered Static Site Generator',
  base: '/',
  plugins,
  theme: defaultTheme({
    ...themeConfig
  })
})