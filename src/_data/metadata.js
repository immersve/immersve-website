'use strict';

const config = require('../config');

const baseUrl = config.get('baseUrl');

module.exports = {
  title: 'Immersve',
  url: `${baseUrl}/`,
  description: 'World\'s first multichain protocol',
  site_name: 'Immersve',
  img: `${baseUrl}/img/previewlogo.png`,
};
