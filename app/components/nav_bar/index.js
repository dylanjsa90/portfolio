'use strict';

module.exports = function(app) {
  app.component('navBar', {
    controller: 'NavController',
    template: require('./nav_bar_template.html'),
  });

  app.controller('NavController', ['$location', function($location) {
    this.isCollapsed = true;
    this.collapsedClass = this.isCollapsed ? 'collapse': '';
    this.toggle = function() {
      this.isCollapsed = !this.isCollapsed;
      this.collapsedClass = this.isCollapsed ? 'collapse': '';
    };
    this.home = true;
    this.projects = false;
    this.about = false;
    this.contact = false; 

    this.currentTab = function() {
      this.setToFalse();
      if ($location.url().includes('home')) this.home = true;
      if ($location.url().includes('about')) this.about = true;
      if ($location.url().includes('projects')) this.projects = true;
      if ($location.url().includes('contact')) this.contact = true; 
    };

    this.setToFalse = function() {
      this.home = false;
      this.projects = false;
      this.about = false;
      this.contact = false;
    };

  }]);
};