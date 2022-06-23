
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { path } from '@vuepress/utils'

export const plugins = [
  backToTopPlugin(),
  docsearchPlugin({
    // 配置项
    apiKey: '<API_KEY>',
    appId: '<APP_ID>',
    indexName: '<INDEX_NAME>',
  }),
  registerComponentsPlugin({
    componentsDir: path.resolve(__dirname, '../components'),
  })
]