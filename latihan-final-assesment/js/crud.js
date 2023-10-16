const ls_name = 'final_assesment_ls'
const ls_data = new Array()

ls_data[1] = {name: 'Jack', age: 20}
ls_data[2] = {name: 'Bambang', age: 17}
ls_data[3] = {name: 'Onesss', age: 16.5}
ls_data[4] = {name: 'test', age: 22}

fSyncData()
function fSyncData() {
	localStorage.setItem(ls_name, JSON.stringify(ls_data))
	createDataTable(ls_data)
}

function createDataTable(items) {
	const data_elements = items.map((item, id) => {
		const tdId = document.createElement('td')
		tdId.innerHTML = id

		const tdName = document.createElement('td')
		tdName.innerHTML = item.name

		const tdAge = document.createElement('td')
		tdAge.innerHTML = item.age

		const tdAct = document.createElement('td')
		tdAct.innerHTML = `
			<button id="edit_${id}" onclick="setItem(${id})">
				Edit
			</button>
			<button id="delete_${id}" onclick="deleteData(${id})">
				Delete
			</button>			
		`

		const tr = document.createElement('tr')
		tr.appendChild(tdId)
		tr.appendChild(tdName)
		tr.appendChild(tdAge)
		tr.appendChild(tdAct)

 		return tr
	})

	const tbody = document.getElementById('items')
	tbody.innerHTML = ""
	data_elements.forEach(data => tbody.appendChild(data))
}

function getItem () {
	const id = document.getElementById('id').value
	const name = document.getElementById('name').value
	const age = document.getElementById('age').value

	return {id, name, age}
}

function setItem(id) {
	document.getElementById('id').value = id
	document.getElementById('name').value = ls_data[id].name
	document.getElementById('age').value = ls_data[id].age
}

function getLastId() {
	const str_data = localStorage.getItem('final_assesment_ls')
	const arr_data = JSON.parse(str_data)
	const total_data = arr_data.length
	return total_data
}

function fUpsert() {
	const data = getItem()
	const id = parseInt(data.id) || getLastId()

	ls_data[id] = { name: data.name, age: data.age }

	fSyncData()
	clearForm()
}

function deleteData (id) {
	delete ls_data[id]
	fSyncData()
}

function clearForm() {
	document.getElementById('id').value = ""
	document.getElementById('name').value = ""
	document.getElementById('age').value = ""
}