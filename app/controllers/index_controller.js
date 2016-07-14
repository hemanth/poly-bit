'use strict';

const Nodal = require('nodal');

class IndexController extends Nodal.Controller {

  get() {

    this.respond({message: 'Hello Nodal from Hemanth.HM'});

  }

}

module.exports = IndexController;
