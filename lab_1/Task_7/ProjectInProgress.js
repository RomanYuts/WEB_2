const Customer = require("./Customer.js");
const Project = require("./Project.js");

class ProjectInProgress{

  constructor (options) {
    this.id = options.id;
    this.Customer = options.Customer; 
    this.Project = options.Project;
  }

}

module.exports = ProjectInProgress;
  