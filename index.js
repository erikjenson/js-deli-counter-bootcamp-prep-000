function takeANumber(line,name){
  line.push(name);
  var spot = line.length;
  return line, `Welcome, ${name}. You are number ${spot} in line.`;
}

function nowServing(line){
  if (line.length === 0) {
  return "There is nobody waiting to be served!";
} else {
  return `Currently serving ${line.shift()}.`;
}
}

function currentLine(line){
  if (line.length === 0) {
  return "The line is currently empty.";
  } else{
     for (var i=0; i < line.length; i++){
      return `The line is currently: ${i+1}. ${line[i]},`
     }
     
     make a loop that cycles through the array listing an index +1 and then the name until for all in line.
     
      
  }
 
}