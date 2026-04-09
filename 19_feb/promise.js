const mypromise = new Promise((resolve, reject) => {
 
  setTimeout(() => {    
    const success = Math.random() > 0.5 ;

    if (success) {
      resolve('Operation successful!');
    } else {
      reject(new Error('Operation failed!'));
    
    }
    }, 1000);
});mypromise.then(result => console.log('success:', result)   )
.catch(error => console.error('error:', error.message)  );
function doSomething() {
    throw new Error('a error is thrown from doSomething function');
}

 function init() {
    try {
        doSomething();
    } catch (e) {
        console.log(e);
    }
     console.log("After successful error handling");
}  
