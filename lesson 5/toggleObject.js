let person={
	sleep:false,
	age:22,
	name:'sam',
	job:'student'
}


//this will update the object
const toggleTodo=()=>{

person.sleep=!person.sleep;

}


//this function is right but this is not the effecient way because maybe we have very big object we can't copy all proprtey for the object
// and maybe we do not now what object will contain 
//so we need to do it in new way

let teoggleTodo=(todo)=>{
 return{
	sleep:!todo.sleep,
	age:22,
	name:'sam',
	job:'student'
 }
}

let TrueToggleTodo=(todo)=>{
	return Object.assign({},todo,{sleep:true,age:33,donkey:true})
}

let todo={
	sleep:false,
	age:22,
	name:'sam',
	job:'student'
}


var oldTodo=teoggleTodo(todo);
var newTodo= (todo);

console.log(oldTodo)
console.log(newTodo)


// we used Object.asign() we initalize it with {} empty object and secand parameter is the object and the third paramiter what we want to change


let SecondTrueToggleTodo=(todo)=>{
	return {...todo,sleep:true}
}
 

var anotherWAy=SecondTrueToggleTodo(todo);
console.log(anotherWAy)


//so we can use two way

//Object.assign
let TrueToggleTodo=(todo)=>{
	return Object.assign({},todo,{sleep:true,age:33,donkey:true})
}
//or spred opreator
let SecondTrueToggleTodo=(todo)=>{
	return {...todo,sleep:true}
}
 
 