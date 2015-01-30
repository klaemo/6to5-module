'use strict';

// Try out some of the new crazies
const { join } = require('path')

const names = ['foo', 'bar']
console.log(`arrow fn ${names.map(v => join(v, '2'))} and template string`)

var obj = {
	[names[0]]: 'bar',
	names,
	getNames() {
		return names.map(v => `${v} ${this.foo}`)
	}
}

console.log(obj.getNames())

class ClassTrip {
	constructor(names) {
		this.names = names
	}

	getNames() {
		return this.names.map(v => v.toUpperCase()).join(' & ')
	}
}

var trip = new ClassTrip(['clemens', 'ana'])
console.log(`Vacation with ${trip.getNames()} to Lombok`)
