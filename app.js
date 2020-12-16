<<<<<<< HEAD
const asyncHello = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, 'Hello!'); 
}); 

console.log(typeof asyncHello);
=======
const examplePromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout( () => resolve('success'), 3000);
    } else {
      setTimeout( () => resolve('failed'), 5000);
    }
  });
  
};
>>>>>>> 1a6bbf9ce82acbc04108a8a64b1f8583697246dc
