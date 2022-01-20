/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}
