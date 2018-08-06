export const imports = {
  'src/components/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-index" */ 'src/components/index.mdx'),
  'src/components/AppSelector/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-app-selector-readme" */ 'src/components/AppSelector/readme.mdx'),
  'src/components/BoxList/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-box-list-readme" */ 'src/components/BoxList/readme.mdx'),
  'src/components/Checkout/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-checkout-readme" */ 'src/components/Checkout/readme.mdx'),
  'src/components/CreateFolderModal/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-create-folder-modal-readme" */ 'src/components/CreateFolderModal/readme.mdx'),
  'src/components/DepartmentDropdown/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-department-dropdown-readme" */ 'src/components/DepartmentDropdown/readme.mdx'),
  'src/components/DetailListHeader/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-detail-list-header-readme" */ 'src/components/DetailListHeader/readme.mdx'),
  'src/components/FolderView/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-folder-view-readme" */ 'src/components/FolderView/readme.mdx'),
  'src/components/Greeting/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-greeting-readme" */ 'src/components/Greeting/readme.mdx'),
  'src/components/MsgBar/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-msg-bar-readme" */ 'src/components/MsgBar/readme.mdx'),
  'src/components/SubmitModal/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-submit-modal-readme" */ 'src/components/SubmitModal/readme.mdx'),
  'src/components/WarningDialog/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-warning-dialog-readme" */ 'src/components/WarningDialog/readme.mdx'),
}
