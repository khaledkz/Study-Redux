let todo=[{
	id:0,
	name:'lesson 1',
	completed:false
	
}]

const action ={
	type:'Add Todo',
	id:0,
	text:'learnRedux'
}

const reducer=(todo,action)=>{
	switch(todo){
		case 'Add Todo':
		return [...todo, {
						id:action.id,
						text:action.text,
						completed:false
				}
			 
		})]
		
		case 'Toggle Todo':
		return todo.map((todos)=>{
			if(todos.id===action.id){
				return Object.assign({},todos,{completed:!todos.completed})
				// or return {...todos,{completed:!todos.completed}}
			}else{
				return todos
			}
		})
	}
}