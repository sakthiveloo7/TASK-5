

const jsonObject = {
    name: 'sakthivel',
    age: 22,
    place: 'chennai'
 };
 
 // Getting an array of keys using Object.keys()
 const keysArray = Object.keys(jsonObject);
 
 // Iterating over the keys using a normal for loop
 for (let i = 0; i < keysArray.length; i++) {
     const key = keysArray[i];
     const value = jsonObject[key];
     
     console.log(`${key}: ${value}`);
 }
 
 
 // Using for in:
 
  for(keys in jsonObject){
   
     value=jsonObject[keys];
     console.log(`${keys} : ${value}`)
   
  }
 
  
 //Using For of:
 // Here I can use to store both the keys and values are iterate using entries property.
 
 for (let [key,value] of Object.entries(jsonObject)) {
     console.log(`${key} : ${value}`);
 }
 
 //Using for each:
 Object.entries(jsonObject).forEach(([key, value]) => {
     console.log(`${key}: ${value}`);
 });