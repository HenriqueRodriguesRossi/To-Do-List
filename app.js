const tasks = []

function validateNewTask(){
	let inputValue = document.getElementById('input-new-task').value
	let exists = tasks.find(x => x.name == inputValue)
	return exists ? true : false;
}

function newTask(){
	let input = document.getElementById('input-new-task')
	input.style.border = ''

	if (!input.value){
		input.style.border = '2px solid red'
		alert('Digite algo para ser adicionado a sua lista de tarefas!')
	}else if(validateNewTask()){
		alert('Essa tarefa já existe!')
	}else{
		tasks.push({
			name: input.value
		})

		showValues()
	}
	input.value = ''
}

function showValues(){
	let list = document.getElementById("to-do-list")
	list.innerHTML = '' 
	for(let i = 0; i < tasks.length; i++){
		list.innerHTML += `<li>${tasks[i]['name']}<button id="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16" onclick="removeItem('${tasks[i]['name']}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" 
		viewBox="0 0 16 16"> <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
		</svg></button></li>`	
	}
}

function removeItem(data){
	let index = tasks.findIndex(x => x.name == data)
	tasks.splice(index,1)
	showValues()
}