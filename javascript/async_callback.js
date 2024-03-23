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
#######################################################################
#######################################################################
#######################################################################
#######################################################################
#######################################################################
#######################################################################
#######################################################################
#######################################################################
#######################################################################
