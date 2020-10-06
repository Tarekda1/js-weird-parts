function sym(...args) {
    let itemsToRemove= removeElementsNotIn(args[0],args[1]);
      return args[0].filter((item)=>{
        return !itemsToRemove.includes(item);
      })
      .concat(args[1].filter((item)=>{
        return !itemsToRemove.includes(item);
      }));
  }
  
  
  function fillTwoArray(...args){
     let setArrayToRemove =  new Set();
    const numberOfArrays = args.length;
    //console.log(numberOfArrays);
    const deltaArray=[];
    for(let i=0;i<numberOfArrays;i++){
      let array=args[i];
      //console.log(array);
      for(let x=0;x<array.length;x++){
        deltaArray.push(array[x]);
      }
    }
     return removeDuplicates(deltaArray);
  }
  function removeElementsCommonIn(a, b) {
      return a.filter(function(item) { 
         return b.indexOf(item) >0; // Returns true for items not found in b.
      });
  }
  //var arrayC = removeElementsNotIn(arrayA, arrayB);
  
  function removeDuplicates(array) {
    let a = []
    array.map(x => {
      if(!a.includes(x)) {
        a.push(x)
      }
    });
    return a
  }
  
  const result=sym([1, 2, 3], [5, 2, 1, 4]);
  
  //$('#msg').html(result);
  
  console.log(result)