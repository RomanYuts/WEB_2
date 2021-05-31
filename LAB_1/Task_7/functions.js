const Doer = require("./Doer.js");
const Customer = require("./Customer.js");
const Project = require("./Project.js");
const ProjectInProgress = require("./ProjectInProgress.js");

function createListOfCustomers (i) {

    let customers = [new Customer({id:0, name:"customer number 0"})];
    for (let j = 1; j < i; j++){
        customers.push(new Customer({id:j, name:"customer number " + j.toString()}))
    }
    return customers;
  }

  let customers = createListOfCustomers(5);
   //console.log(customers);

  //-----------------------------------------------------------------------------------
  //7.a-Додавання нового замовника в колекцію
  function addNewCustomer (name, customersList) {
    customersList.push(new Customer({id:customersList.length, name:name}));
  }
 
  addNewCustomer("Anna", customers);
  addNewCustomer("Mike", customers);
  //console.log(customers);

  //-----------------------------------------------------------------------------------
  //7.b-Редагування замовника в колекції
  function editCustomer (id, newName, customersList) {
    customersList.map(customer => {
      if (customer.id === id) {
        customer.name = newName;
        customer.id=id;
      }
    });
  }

  editCustomer(2, "Alex", customers);
  //console.log(customers);

  //-----------------------------------------------------------------------------------
  //7.c-Видалення замовника з колекції
  function deleteCustomer (id, customersList) {
    return customersList = customersList.filter(customer => customer.id !== id);
  }

  customers = deleteCustomer(3, customers);
  //console.log(customers);

  //-----------------------------------------------------------------------------------
  //7.d-Пошук одного замовника в колекції
  function findCustomerById(id, customersList){
    return customersList.filter(customer => customer.id === id)
  }

  let finder = findCustomerById(5, customers);
  //console.log(finder);

////////////////////////////////////////////////////////////////////////

  function createListOfDoers (i) {

    let doers = [new Doer({id:0, name:"doer number 0"})];
    for (let j = 1; j < i; j++){
        doers.push(new Doer({id:j, name:"doer number " + j.toString()}))
    }
    return doers;
  }

  let doers = createListOfDoers(5);
  //console.log(doers);

  function createListOfProjects (i) {

    let projects = [new Project({id:0, name:"project number 0",Doer:doers[0]})];
    for (let j = 1; j < i; j++){
      doer = doers[Math.floor((Math.random() * doers.length))];
      projects.push(new Project({id:j, name:"project number " + j.toString(),Doer:doer}))
    }
    return projects;
  }
  let projects = createListOfProjects(5);
  //console.log(projects);

  //-----------------------------------------------------------------------------------
  //7.e-Додавання проекту в колекцію
  function addNewProject (name, projectsList) {
    let doer = doers[Math.floor((Math.random() * doers.length))];  
    projectsList.push(new Project({id:projectsList.length, name:name, Doer:doer}));
  }

  addNewProject("ABC", projects);
  addNewProject("AGF", projects);
  //console.log(projects);

  //-----------------------------------------------------------------------------------
  //7.f-Редагування проекту в колекції
  function editProject (id, newName, newDoer, projectsList) {
    projectsList.map(project => {
        if (project.id === id) {
            project.name = newName;
            project.Doer = newDoer;
        }
    });
  }
  
  editProject(2,'AGE', new Doer({id:11, name:"Mark"}) ,projects);
  //console.log(projects);

  //-----------------------------------------------------------------------------------
  //7.g-Видалення проекту з колекції
  function deleteProject (id, projectsList) {
    return projectsList = projectsList.filter(project => project.id !== id);
  }
  projects = deleteProject(4, projects);
  //console.log(projects);

//////////////////////////////////////////////////////////////////////////////////////////

  //-----------------------------------------------------------------------------------
  //7.h-Додавання виконавця в колекцію
  function addNewDoer (name, doersList) {
    doersList.push(new Doer({id:doersList.length, name:name}));
  }
 
  addNewDoer("Kate", doers);
  addNewDoer("Mike", doers);
  //console.log(doers);

  //-----------------------------------------------------------------------------------
  //7.i-Редагування виконавця в колекції
  function editDoer (id, newName, doersList) {
    doersList.map(doer => {
      if (doer.id === id) {
        doer.name = newName;
        doer.id=id;
      }
    });
  }

  editDoer(2, "Jake", doers);
  //console.log(doers);

   //-----------------------------------------------------------------------------------
  //7.j-Видалення виконавця з колекції
  function deleteDoer(id, doersList) {
    return doersList = doersList.filter(doer => doer.id !== id);
  }

  doers = deleteDoer(5, doers);
  //console.log(doers);

  ////////////////////////////////////////////////////////////////////////////////////////

  function createListOfProjectInProgress (i) {

    let projectsInProgress = [new ProjectInProgress({id:0, Customer:customers[0], Project:projects[0]})];
    for (let j = 1; j < i; j++){
      customer = customers[Math.floor((Math.random() * customers.length))];
      project = projects[Math.floor((Math.random() * projects.length))];
      projectsInProgress.push(new ProjectInProgress({id:j, Customer:customer, Project:project}))
    }
    return projectsInProgress;
  }

  let projectsInProgress = createListOfProjectInProgress(5);
  //console.log(projectsInProgress);

  //-----------------------------------------------------------------------------------
  //7.k-Пошук кількості проектів замовника
  console.log('\n');
  
  function ProjectsOfCustomer (customer,projectsInProgress) {
    const myMap = new Map();
    for (let i = 0; i < projectsInProgress.length; i++) {
        if (myMap.has(projectsInProgress[i].Customer) === false)
            myMap.set(projectsInProgress[i].Customer, 1);
        else
        {
            let newNumber = myMap.get(projectsInProgress[i].Customer);
            myMap.set(projectsInProgress[i].Customer, ++newNumber)
        }
        

    }

    for (var key of myMap.keys()) {
        if(key === customer){
            let value = myMap.get(key);
            console.log(key, 'has',value,'projects.');
            
        }
        
    }
}

//ProjectsOfCustomer (customers[2],projectsInProgress);

//-----------------------------------------------------------------------------------
//7.l-Пошук усіх проектів виконавця
//console.log(projects);

function ProjectsOfDoer (doer,projects) {
    const myMap = new Map();
    for (let i = 0; i < projects.length; i++) {
        if (myMap.has(projects[i].Doer) === false)
            myMap.set(projects[i].Doer, 1);
        else
        {
            let newNumber = myMap.get(projects[i].Doer);
            myMap.set(projects[i].Doer, ++newNumber)
        }
        

    }
    for (var key of myMap.keys()) {
        if(key === doer){
            let value = myMap.get(key);
            console.log(key, 'has',value,'projects.');
            
        }
        
    }
}

//ProjectsOfDoer (doers[0],projects);









  



 




