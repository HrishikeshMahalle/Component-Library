// neoG CLass pratice

// function strlength(name, func){
//     let length = name.length;
//     func(length)
// }

// strlength('hrishi',printStr)

// function printStr(length)
// {
//     console.log(`omg!! my name has ${length} chars`)
// }

// function willThanosKillme(name,cb1,cb2){
//     const len = name.length;
//     if(len % 2 == 0)
//         cb1("you are alive")
//     else    
//         cb2("You are Dead")
// }
// function cb1(line){
//     console.log(line)
// }
// function cb2(line){
//     console.log(line)
// }

// willThanosKillme("hrishie",cb1,cb2) //Callbacks



// function fakeFetch(msg, shouldReject) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (shouldReject) {
//           reject(`error from server: ${msg}`);
//         }
//         resolve(`from server: ${msg}`);
//       }, 3000);
//     });
//   }

// fakeFetch("hi there",false).then(e=>console.log(e)).catch(e=>console.log("wont work"))


// const getData = async()=>{
//     const data = await fakeFetch("something");
//     console.log(data)
// }

// const getData2 = async()=>{
//     const data1 = await fakeFetch("hrishi1");
//     console.log(data1)
//     const data2 = await fakeFetch("hrishi2")
//     console.log(data2)
// }

// getData2()


