import { LazyExoticComponent, lazy } from "react"
import NoLazy from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"

type JSXComponent = () => JSX.Element;

interface Route {
  to: string 
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string
}

// This components needs to be default exported
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/layout/LazyLayout'))
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'))

export const routes:Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'LazyLayout'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'NoLazy'
  },
  // {
  //   to: '/lazy1',
  //   path: 'lazy1',
  //   Component: Lazy1,
  //   name: 'Lazy-1'
  // },
  // {
  //   to: '/lazy2',
  //   path: 'lazy2',
  //   Component: Lazy2,
  //   name: 'Lazy-2'
  // },
  // {
  //   to: '/lazy3',
  //   path: 'lazy3',
  //   Component: Lazy3,
  //   name: 'Lazy-3'
  // }
]