'use strict';
const angular = require('angular');
import {UtilService} from './util.service';

export default angular.module('schoolApp.util', [])
  .factory('Util', UtilService)
  .name;
