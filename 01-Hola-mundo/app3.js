console.log('Inicio de programa'); //1

setTimeout(()=>{
    console.log('Primer TimeOunt') //5
}, 3000);

setTimeout(()=>{
    console.log('Segundo TimeOunt') // 3
}, 0);

setTimeout(()=>{
    console.log('Tercer TimeOunt') // 4
}, 0);



console.log('Fin de programa'); //2