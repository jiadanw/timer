


const a = process.argv;
const timer = a.splice(2);
for( let item of timer){
  if(item > 0){
    console.log(`setting timer for ${item} seconds...`);
    setTimeout(()=>process.stdout.write('\x07'),item * 1000)
}
  else if(item === "b"){
    process.stdout.write('\x07')
  }
}

//"Thanks for using me, ciao!"