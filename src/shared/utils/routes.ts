const HOME_ROUTE = '/';
const LOGIN_ROUTE = '/log-in';
const SIGN_UP_ROUTE = '/sign-up';
const ADMIN_PANEL_ROUTE = '/admin';
const MENU_ROUTE = '/menu';
const EVENTS_ROUTE = '/events';

export const routes = {
  loginRoute: () => LOGIN_ROUTE,
  signupRoute: () => SIGN_UP_ROUTE,
  adminPanelRoute: () => ADMIN_PANEL_ROUTE,
  homeRoute: () => HOME_ROUTE,
  menuRoute: () => MENU_ROUTE,
  eventsRoute: () => EVENTS_ROUTE,
};