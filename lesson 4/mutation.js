//task 1 we have an array and we need to add a new data to array without change the main array

//wich one to use a
const list=(list)=>{
    list.push(0)
}

// b
const list=(list)=>{
    list.concat(0)
}


//the solution is b because push will modifey the original array
//but concat will not update the original array 

//we can use ES6 spread operator 
const list=(list)=>{
    return [...,0];
}

// Tast 2 We have an list array [1,2,3,4,5]  we need to remove [3] from our array so new array will [1,2,4,5] 
//but also without mutation 
// we do not need to change the original array


//a
const removeCounter=(list,index)=>{
    list.splice(index,1);
    return list;
}
//b
const removeCounter=(list,index)=>{
    list.slice(0,index).concat(list.slice(index+1))
}

//function a is right will do the task but will imputate the original function
// solice will remove the index number from the original array so it's wrong

//function be is true
// slice mean it take a part of the list > so we take the part before and the part after the target then we concat them
//togather to make a new list
// 1 2 3 4 5  we cut 1 2 than add it to 4 5 this make new list using slice and concat

//we can use spred ES6 function as well
const removeCounter=(list,index)=>{
    [...list.slice(0,index),...list.slice(index+1)]
}

//incremant index
// listBefore=[0,10,20];
//listAfter=[0,11,20];

//a this function will modifey the origin function 
const incremantFun=(list,index)=>{
    list[index]++;
    return list;
}

//b this function is will work because using slice and concat do not update the origin array
const incremantFun=(list,index)=>{
 	  return list.slice(0,index).concat(list[index]+1).concat(list.slice(index+1))

 }

//c
const incremantFun=(list,index)=>{
	  return [...list.slice(0,index),list[index]+1,...list.slice(index+1)];
 
 }

