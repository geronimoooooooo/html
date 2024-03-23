+ https://javascript.info/async
+ https://www.codecademy.com/learn/introduction-to-javascript/modules/asynch-js/cheatsheet
+ express-async-handler https://www.npmjs.com/package/express-async-handler
+ Vergleiche mit Promise und async/await https://blog.risingstack.com/mastering-async-await-in-nodejs/

#######################################################################
async function asyncTask () {
  try {
    const valueA = await functionA();
    const valueB = await functionB(valueA);
    const valueC = await functionC(valueB);
    return await functionD(valueC);
  } catch (err) {
    logger.error(err);
  }
}
#######################################################################
const getInfo = async () => {
 console.log(await axios.get('/users'))
 console.log(await getGroups())
 console.log(await getFavorites())
 return 'all done';
}

getInfo();
###################### callback #######################################
function loadScript(src, callback) {
  ...
  loadScript('/my/script.js', function(error, script) {
  if (error) {
    // handle error
  } else {
    // script loaded successfully
  }
});
#######################################################################
  let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);
#######################################################################
  await getHtml();
console.log('2');
  
  getHtml()
 .then(() => {
    console.log('2');
 });
  --------------------------------------------------
    async function getHtml() {
  const request = await $.get('https://jsonplaceholder.typicode.com/posts/1')  
  return request
}

getHtml()
  .then((data) => { console.log('1')})
  .then(() => { console.log('2')});
  
// OR 

(async() => {
  console.log('1')
  await getHtml()  
  console.log('2')
})()
#######################################################################
  app.post("/api/shorturl/new", async (req, res) => {
  try {
    let result = await CheckUrl(req.body.url);
    res.send(result)
  }
  catch (error) {
    return new Error('Could not receive post');
  }
});
#######################################################################
#######################################################################
#######################################################################
#######################################################################
#######################################################################
