'use strict'

//const project_in_progressModel = new Project_in_progress()

const trainModel = new Performer();
const ticketModel = new Project();
const passengerModel = new Customer();
const soldTicketModel = new Project_in_progress();

function initAddForm () {
  const form = window.document.querySelector('#soldTicket-add-form')

  let selectTagsData = {
      project: {
          model: ticketModel,
          innerText: (item) => item.name
      },
      performer: {
          model: trainModel,
          innerText: (item) => item.name
      },
     
  };

  for (var key in selectTagsData) {
      let selectTag = document.getElementById(key);
      let trainsCollection = selectTagsData[key].model.Select();
      trainsCollection.forEach(item => {
          let option = document.createElement('option');
          option.value = item.id;
          option.innerText = selectTagsData[key].innerText(item);
          selectTag.appendChild(option);
      });
  }

  form.addEventListener('submit', function (e) {
      e.preventDefault()

      const formData = new FormData(e.target)
      const soldTicketData = {}
      formData.forEach((value, key) => {
          soldTicketData[key] = value
      })

      let hiddenInput = document.getElementById('update-item');
      if(hiddenInput.value) {
          soldTicketModel.Update(soldTicketData);
          let createButton = document.getElementById('btn-create');
          let updateButton = document.getElementById('btn-update');
          createButton.classList.remove('btn-hidden');
          updateButton.classList.add('btn-hidden');
          let hiddenInput = document.getElementById('update-item');
          hiddenInput.value = '';
      }
      else {
          soldTicketModel.Create(soldTicketData);
      }

      e.target.reset()
  })
}


function initList () {
  window.jQuery('#soldTicket-list').DataTable({
      data: soldTicketModel.Select(),
      columns: [
          { title: 'ID', data: 'id' },
          { title: 'Project', data: 'project' },
          { title: 'Performer', data: 'performer' },
          { title: 'Begin', data: 'begin_date' },
          { title: 'End', data: 'end_date' },
          { title: 'Action', data: '' }
      ],
      columnDefs: [
          {
              "render": function (data, type, row) {
                  let tickets = ticketModel.Select();
                  let newTickets = tickets.filter(tick => tick.id == data)
                  return newTickets[0].name;
              },
              "targets": 1
          },
          {
              "render": function (data, type, row) {
                  let trains = trainModel.Select();
                  let newTrains = trains.filter(train => train.id == data)
                  return newTrains[0].name;
              },
              "targets": 2
          },
          
          {
              "render": function(data, type, row) {
                  return ''
                      + '<button type="button" value="delete" onclick="deleteItem(this)">Delete</button>'
                      + "\n"
                      + '<button type="button" value="update" onclick="updateItem(this)">Update</button>';
              },
              "targets": 5
          }
      ]
  })
}

function initListEvents () {
  document.addEventListener('soldTicketsListDataChanged', function (e) {
      const dataTable = window.jQuery('#soldTicket-list').DataTable()

      dataTable.clear()
      dataTable.rows.add(e.detail)
      dataTable.draw()
  }, false)
}

function deleteItem(e) {
  let row = e.parentNode.parentNode;
  let id = row.getElementsByTagName('td')[0].innerText;
  row.remove();
  soldTicketModel.Delete(id);
}

function updateItem(e) {
  let row = e.parentNode.parentNode;
  let id = row.getElementsByTagName('td')[0].innerText;
  let obj = soldTicketModel.FindById(parseInt(id));
  document.getElementById('project').value = obj.project;
  document.getElementById('performer').value = obj.performer;
  document.getElementById('begin_date').value = obj.begin_date;
  document.getElementById('end_date').value = obj.end_date;
  let createButton = document.getElementById('btn-create');
  let updateButton = document.getElementById('btn-update');
  createButton.classList.add('btn-hidden');
  updateButton.classList.remove('btn-hidden');
  let hiddenInput = document.getElementById('update-item');
  hiddenInput.value = obj.id;
}

window.addEventListener('DOMContentLoaded', e => {
  initAddForm()
  initList()
  initListEvents()
  
})