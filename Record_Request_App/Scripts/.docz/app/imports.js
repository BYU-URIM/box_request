export const imports = {
  'src/components/AppSelector/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-app-selector-readme" */ 'src/components/AppSelector/readme.mdx'),
}
