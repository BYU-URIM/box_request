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
  'src/components/Greeting/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-greeting-readme" */ 'src/components/Greeting/readme.mdx'),
  'src/stores/CheckoutStore/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-stores-checkout-store-readme" */ 'src/stores/CheckoutStore/readme.mdx'),
  'src/stores/FormStore/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-stores-form-store-readme" */ 'src/stores/FormStore/readme.mdx'),
  'src/stores/RootStore/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-stores-root-store-readme" */ 'src/stores/RootStore/readme.mdx'),
  'src/stores/UIStore/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-stores-ui-store-readme" */ 'src/stores/UIStore/readme.mdx'),
  'src/stores/UserStore/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-stores-user-store-readme" */ 'src/stores/UserStore/readme.mdx'),
}
