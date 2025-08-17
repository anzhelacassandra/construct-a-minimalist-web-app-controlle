// mwib_construct_a_min.js

// API Specification

class MinimalistWebAppController {
  constructor(appName, appVersion) {
    this.appName = appName;
    this.appVersion = appVersion;
    this.routeMap = new Map();
  }

  // Register a new route
  registerRoute(route, controller) {
    this.routeMap.set(route, controller);
  }

  // Handle incoming request
  handleRequest(req, res) {
    const route = req.url.pathname;
    const controller = this.routeMap.get(route);
    if (controller) {
      controller(req, res);
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  }

  // Start the app
  start() {
    console.log(`Starting ${this.appName} v${this.appVersion}...`);
  }
}

module.exports = MinimalistWebAppController;