


//const a = process.argv;
//const timer = a.splice(2);
//for( let item of timer){
//  if(item > 0){
//    console.log(`setting timer for ${item} seconds...`);
//    setTimeout(()=>process.stdout.write('\x07'),item * 1000)
//}
//  else if(item === "b"){
//    process.stdout.write('\x07')
//  }
//  else if (item === '\u0003') {
//    console.log("thanks for using me")
//    process.exit();
//  }
//}
//
////"Thanks for using me, ciao!"
//
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');
const array = process.stdin;
////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me");
    process.exit();
  } else if (key === "b") {
      return process.stdout.write('\x07');
  } else if (key > 0 && key < 10) {
      console.log("setting timer for " + key + " seconds...");
      return setTimeout(function() {
      process.stdout.write('\x07')}, key * 1000);
  }
});