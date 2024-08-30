import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const pages = import.meta.glob('../views/**/page.ts', { eager: true, import: 'default' })
const pageComps = import.meta.glob('../views/**/index.vue')

export const routes = Object.entries(pages).map(([path, meta]) => {
  const pagePath = path.replace('page.ts', 'index.vue')

  path = path.replace('../views', '').replace('/page.ts', '') || '/'

  const name = path.split('/').filter(Boolean).join('-') || 'index'

  return {
    path,
    name,
    component: pageComps[pagePath],
    meta
  }
}) as RouteRecordRaw[]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
