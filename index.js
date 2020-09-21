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
    line.shift()
    return `Currently serving ${first}.`
  }
}

function currentLine(line){
  if (line.length===0){
    return "The line is currently empty."
  } else {
    var crntLine="The line is currently: "
    for (let i=0;i<line.length;i++){
      while (i)
      crntLine+=`${i+1}. ${line[i]}, `
      
    }
  }
  return crntLine
}