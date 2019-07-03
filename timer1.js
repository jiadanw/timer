


const a = process.argv;
const timer = a.splice(2);
for( let item of timer){
  if(item > 0){
  setTimeout(()=>process.stdout.write('\x07'),item * 1000)
}
  
}

