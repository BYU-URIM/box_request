export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'src/components/BoxList/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-box-list-readme" */ 'src/components/BoxList/readme.mdx'),
  'src/components/Checkout/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-checkout-readme" */ 'src/components/Checkout/readme.mdx'),
  'src/components/DepartmentDropdown/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-department-dropdown-readme" */ 'src/components/DepartmentDropdown/readme.mdx'),
  'src/components/DetailListHeader/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-detail-list-header-readme" */ 'src/components/DetailListHeader/readme.mdx'),
  'src/components/FolderList/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-folder-list-readme" */ 'src/components/FolderList/readme.mdx'),
  'src/components/Greeting/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-greeting-readme" */ 'src/components/Greeting/readme.mdx'),
}
