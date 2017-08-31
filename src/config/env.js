/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */

const baseUrl = '';
const routerMode = 'history';
const imgBaseUrl = 'http://images.cangdu.org/';

if (process.env.NODE_ENV === 'development') {
    //
} else if (process.env.NODE_ENV === 'production') {
    // baseUrl = 'http://cangdu.org:8001';
}

export { baseUrl, routerMode, imgBaseUrl };

export const isProd = process.env.NODE_ENV === 'production';
export const isDev = process.env.NODE_ENV !== 'production';
export const isServer = process.env.VUE_ENV === 'server';
export const isClient = process.env.VUE_ENV === 'client';
