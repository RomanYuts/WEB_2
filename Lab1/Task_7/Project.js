const Doer = require("./Doer.js");

class Project {

    constructor (options) {
      this.id = options.id; 
      this.name = options.name; 
      this.Doer = options.Doer;
    }
  }
  
module.exports = Project;