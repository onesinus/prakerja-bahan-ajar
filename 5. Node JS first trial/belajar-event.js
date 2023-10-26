const EventEmitter = require('node:events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()
const eventName = 'my-first-event'
myEmitter.on(eventName, () => {
	console.log('My first emitter is called...')
})

myEmitter.on('my-second-event', (kata_kata_hari_ini) => {
	console.log(`Today's motivation: ${kata_kata_hari_ini}`)
})
myEmitter.emit(eventName)
myEmitter.emit('my-second-event')
