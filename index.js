function takeANumber(line,name){
  line.push(name)
  var position = line.indexOf(name)+1
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(line){
  if (line.length===0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line[0]}.`
  }
}