function takeANumber(line,name){
  line.push(name)
  var position = line.indexOf(name)+1
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(line){
  if (line.length===0){
    return "There is nobody waiting to be served!"
  } else {
    var first=line[0]
    unshift line
    return `Currently serving ${first}`
  }
}