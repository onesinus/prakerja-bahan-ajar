const ls_name = 'final_assesment_ls'
const ls_data = new Array()

ls_data[1] = {name: 'Jack', age: 20}
ls_data[2] = {name: 'Bambang', age: 17}
ls_data[3] = {name: 'Onesss', age: 16.5}
ls_data[4] = {name: 'test', age: 22}

function fSyncData() {
	localStorage.setItem(ls_name, JSON.stringify(ls_data))
	createDataTable(ls_data)
}

fSyncData()

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
			<button id="edit_${id}">
				Edit
			</button>
			<button id="delete_${id}">
				Edit
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
	// tbody.innerHTML = ""

	data_elements.forEach(data => tbody.appendChild(data))
}