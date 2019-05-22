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
  //return `Currently serving ${line[0]}.`;
}
}