function takeANumber(line,name){
  line.push(name)
  var position = line.length+1
  return `Welcome, ${name}. You are number ${position} in line.`
}