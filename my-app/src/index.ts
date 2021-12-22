// import "./style.scss";

import Home from './pages/1.home/home';
import Settings from './pages/2.settings/settings';
import Game from './pages/3.game/game';
import Error404 from './pages/Error404';

import Bottombar from './components/Bottombar';
import Navbar from './components/Navbar';

import Utils from './modules/Utils';
import animation from './modules/animation';

const routes = {
  '/': Home,
  '/settings': Settings,
  '/game': Game,
};

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
  const parsedURL = (request.resource ? `/${request.resource}` : '/')
    + (request.id ? '/:id' : '')
    + (request.verb ? `/${request.verb}` : '');

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  const page = routes[parsedURL] ? routes[parsedURL] : Error404;

  content!.innerHTML = await page.render();
  // animation();
  await page.after_render();
};

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
