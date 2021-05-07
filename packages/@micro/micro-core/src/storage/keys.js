/*
 * @Author: hongdong.liao
 * @Date: 2021-01-29 14:43:55
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-04-19 18:36:43
 * @FilePath: /nextop/packages/@micro/micro-core/src/storage/keys.js
 */
/**
 * inner core project
 */
export const AUTH_CODE_LIST = 'AUTH_CODE_LIST';


/**
 * outside project
 */
export const TAG_CACHE = 'TAG';                                                         // 顶部tag
export const TOKEN_CACHE = 'TOKEN';                                                     // token
export const ROUTES_CACHE = 'ROUTES';                                                   // 路由
export const USER_INFO_CACHE = 'USER_INFO';                                             // 用户信息
export const TAGLIST_CACHE = 'TAGLIST';                                                 // 顶部 tag 集合
export const ORIGINAL_MENU = 'ORIGINAL_MENU';                                           // 原始菜单列表
export const SIDEBAR_STATUS = 'SIDEBAR_STATUS';                                         // 侧边栏状态
export const WITHOUTANIMATION = 'WITHOUTANIMATION';                                     // 侧边栏动画
export const ACTIVESUBPANEL = 'ACTIVESUBPANEL';                                         // 激活面板状态 跟侧边栏相关，后续可能不需要这个侧边栏激活面板了
export const FLAT_MENU = 'FLAT_MENU';                                                   // 原始菜单扁平化
export const ACTIVE_MENU = 'ACTIVE_MENU';                                               // 当前激活菜单
export const ACTIVED_MENU_CHILD_CACHE = 'ACTIVED_MENU_CHILD';                           // 当前激活的子菜单 存储激活菜单下面的children
export const LANGUAGE = 'LANGUAGE';                                                     // 当前语言
export const TENANT_INFO = 'TENANT_INFO';                                               // 租户信息
export const SUBAPPLICATION_ROUTES_CACHE = 'SUBAPPLICATION_ROUTES_CACHE';               // 子应用路由
export const EXTRACT_ROUTER_VIEW = 'EXTRACT_ROUTER_VIEW';                               // 非子应用（main应用内部的要当做菜单显示出来的）router-view 状态
export const REDIRECT_URL = 'REDIRECT_URL';                                             // 页面重定向回来
export const INIT404LIST = 'INIT404LIST';                                               // 初始化应用404记录列表
