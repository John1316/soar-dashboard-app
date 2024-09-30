type RouteKeys = '/' | '/setting' | '/creditCards';

const routes: Record<RouteKeys, string> = {
  '/': 'Dashboard',
  '/setting': 'Settings',
  '/creditCards': 'Credit Cards',
  // Add more routes and titles as needed
};
export {
    routes
}