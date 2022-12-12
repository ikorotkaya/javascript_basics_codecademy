let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}

async function noAwait() {
  let value = myPromise();
  console.log(value);
 }
 
 noAwait(); // Prints: Promise { <pending> }
  
 async function yesAwait() {
  let value = await myPromise();
  console.log(value);
 }
  
 yesAwait(); // Prints: Yay, I resolved!