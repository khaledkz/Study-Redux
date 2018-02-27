



let list=[111,33,44];


const incremantFun=(list,index)=>{
	return   [...list.slice(0,index),list[index]+1,...list.slice(index+1)]
 }


let newCa=incremantFun(list,1);

console.log(newCa)