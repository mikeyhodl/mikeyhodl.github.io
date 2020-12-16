const asyncHello = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, 'Hello!'); 
}); 

console.log(typeof asyncHello);