const counterA = require('./uniqueInstance')
const counterAB = require('./uniqueInstance')
const counterB = require('./newInstance')()
const counterBB = require('./newInstance')()

counterA.increase()
counterA.increase()
console.log(counterA.value ,counterAB.value)

counterB.increase()
console.log(counterB.value ,counterBB.value)