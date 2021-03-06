'use strict'

//const performerModel = new Performer()

const trainModel = new Performer() // eslint-disable-line no-undef

function initAddForm () {
    const form = window.document.querySelector('#train-add-form')
    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const trainData = {}
        formData.forEach((value, key) => {
            trainData[key] = value
        })

        let hiddenInput = document.getElementById('update-item');
        if(hiddenInput.value) {
            trainModel.Update(trainData);
            let createButton = document.getElementById('btn-create');
            let updateButton = document.getElementById('btn-update');
            createButton.classList.remove('btn-hidden');
            updateButton.classList.add('btn-hidden');
            let hiddenInput = document.getElementById('update-item');
            hiddenInput.value = '';
        }
        else {
            trainModel.Create(trainData);
        }

        e.target.reset()
    })
}

function initList () {
  window.jQuery('#train-list').DataTable({
      data: trainModel.Select(),
      columns: [
          { title: 'ID', data: 'id' },
          { title: 'Name', data: 'name' },
          { title: 'Experience', data: 'experience' },
          { title: 'Workers', data: 'numbers_of_workers'},
          { title: 'Action', data: '' }
      ],
      columnDefs: [
          {
              "render": function(data, type, row) {
                  return ''
                      + '<button type="button" value="delete" onclick="deleteItem(this)">Delete</button>'
                      + "\n"
                      + '<button type="button" value="update" onclick="updateItem(this)">Update</button>';
              },
              "targets": 4
          }
      ]
  })
}


function initListEvents () {
  document.addEventListener('trainsListDataChanged', function (e) {
      const dataTable = window.jQuery('#train-list').DataTable()

      dataTable.clear()
      dataTable.rows.add(e.detail)
      dataTable.draw()
  }, false)
}

function deleteItem(e) {
  let row = e.parentNode.parentNode;
  let id = row.getElementsByTagName('td')[0].innerText;
  row.remove();
  trainModel.Delete(id);
}

function updateItem(e) {
  let row = e.parentNode.parentNode;
  let id = row.getElementsByTagName('td')[0].innerText;
  let obj = trainModel.FindById(parseInt(id));
  document.getElementById('name').value = obj.name;
  document.getElementById('experience').value = obj.experience;
  document.getElementById('numbers_of_workers').value = obj.numbers_of_workers;
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
