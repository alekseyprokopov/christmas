import {
  Home, Settings, Game, Error404,
} from './pages';

import { Bottombar, Navbar } from './components';

import Utils from './modules/Utils';

import Rout from './types/rout';

const routes = {
  '/': Home,
  '/settings': Settings,
  '/game': Game,
} as Rout;

const router = async () => {
  // Lazy load view element:
  const header = document.getElementById('header_container');
  const content = document.getElementById('page_container');
  const footer = document.getElementById('footer_container');

  header!.innerHTML = await Navbar.render();
  await Navbar.after_render();
  footer!.innerHTML = await Bottombar.render();
  await Bottombar.after_render();

  // Get the parsed URl from the addressbar
  const request = Utils.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  const { resource, id, verb } = request;
  const parsedURL = `/${resource || ''}${id ? '/:id' : ''}${verb ? `/${verb}` : ''}`;

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  const page = routes[parsedURL] ? routes[parsedURL] : Error404;

  content.innerHTML = (await page.render()) as string;
  await page.after_render();
};

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
