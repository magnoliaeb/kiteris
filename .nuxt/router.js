import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b72bbd7e = () => interopDefault(import('..\\pages\\contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _5148d4f2 = () => interopDefault(import('..\\pages\\empresa.vue' /* webpackChunkName: "pages/empresa" */))
const _64a0b13a = () => interopDefault(import('..\\pages\\kiteris-3d.vue' /* webpackChunkName: "pages/kiteris-3d" */))
const _4c14d508 = () => interopDefault(import('..\\pages\\kiteris-data.vue' /* webpackChunkName: "pages/kiteris-data" */))
const _202a33db = () => interopDefault(import('..\\pages\\servicios.vue' /* webpackChunkName: "pages/servicios" */))
const _5b1f7964 = () => interopDefault(import('..\\pages\\valores-de-kiteris.vue' /* webpackChunkName: "pages/valores-de-kiteris" */))
const _3094b2d0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contacto",
    component: _b72bbd7e,
    name: "contacto"
  }, {
    path: "/empresa",
    component: _5148d4f2,
    name: "empresa"
  }, {
    path: "/kiteris-3d",
    component: _64a0b13a,
    name: "kiteris-3d"
  }, {
    path: "/kiteris-data",
    component: _4c14d508,
    name: "kiteris-data"
  }, {
    path: "/servicios",
    component: _202a33db,
    name: "servicios"
  }, {
    path: "/valores-de-kiteris",
    component: _5b1f7964,
    name: "valores-de-kiteris"
  }, {
    path: "/",
    component: _3094b2d0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
