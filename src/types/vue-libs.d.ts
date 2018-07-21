import Vue from 'vue';
import { Store } from 'vuex';
import VueRouter, { Route } from 'vue-router';

/**
 * Vue meta
 */
import { MetaInfo } from 'vue-meta';

declare module 'vue/types/vue' {
  interface Vue {
    head?: MetaInfo | (() => MetaInfo);
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    head?: MetaInfo | (() => MetaInfo);
  }
}

/**
 * Vuelidate
 */

import * as validators from 'vuelidate/lib/validators';
export function Vuelidate(vue: typeof Vue): void;
export default Vuelidate;

declare module 'vue/types/vue' {
  interface ValidationMethods {
    $touch(): void;
    $reset(): void;
    $flattenParams(): any[];
  }
  interface ValidationMethodsNested {
    [key: string]: ValidationMethods & ValidationMethodsNested;
  }
  interface Vue {
    $v: ValidationMethods & ValidationMethodsNested;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    validations?: { [key: string]: validators.Validators };
  }
}

/**
 * Vue starter
 */
declare module 'vue/types/vue' {
  interface Vue {
    $error: (error: any, statusCode?: number) => void;
    $redirect: (location: any) => void;
    $context: {
      app: Vue;
      router: VueRouter;
      store: Store<any>;
      url: string;
      route: Route;
      query: any;
      params: any;
      reditect: (location: any) => void;
      error: (error: any, statusCode?: number) => void;
    };
  }
}
