class Robot {
	constructor(startLocation, startDirection, instructions) {
		this.currentLocation = startLocation;
		this.currentDirection = startDirection;
		this.instructions = this.parseInstructions(instructions);
		this.instructionsMap = {
			A: this.advance.bind(this),
			R: this.turnRight.bind(this),
			L: this.turnLeft.bind(this)
		};
		this.directionVectors = {
			north: [0, 1],
			east: [1, 0],
			south: [0, -1],
			west: [-1, 0]
		};
		console.log(this.currentLocation)
	}
	// TODO: Current bug is that the attributes are not being updated

	// Execute movement
	executeInstructions() {
		this.instructions.forEach(
			instruction => this.executeInstruction(instruction)
		)
	}

	executeInstruction(instruction) {
		console.log('about to', instruction)
		return this.instructionsMap[instruction]()
	}

	// var sum = array1.map(function (num, idx) {
	// 	return num + array2[idx];
	//   }); // [6,8,10,12]

	advance() {
		console.log("advancing from", this.currentLocation)
		let newLocation = this.currentLocation.map(
			(num, idx) => { 
				return num + this.directionVectors[this.currentDirection][idx]
			})
		console.log("advancing to", this.currentLocation)
		this.currentLocation = newLocation
	}

	turnLeft() {
		console.log("turning left from", this.currentDirection)
		let currentDirection = ''
		switch (this.currentDirection) {
			case 'north':
				console.log("turning from north to west")
				currentDirection = 'west'
				break;
			case 'west':
					console.log("turning from west to south")
					currentDirection = 'south'
				break;
			case 'north':
					console.log("turning from south to east")
					currentDirection = 'east'
				break;
			case 'north':
					console.log("turning from east to north")
					currentDirection = 'north'
				break;
			default:
				console.log('That is not a valid direction')
		}
		this.currentDirection = currentDirection;
		console.log("turned left to", this.currentDirection)
	}

	turnRight() {
		console.log("turning right from", this.currentDirection)
		let currentDirection = ''
		switch (this.currentDirection) {
			case 'north':
				console.log("turning from north to east")
				currentDirection = 'east'
				break;
			case 'east':
					console.log("turning from east to south")
					currentDirection = 'south'
				break;
			case 'south':
					console.log("turning from south to west")
					currentDirection = 'west'
				break;
			case 'west':
					console.log("turning from west to north")
					currentDirection = 'north'
				break;
			default:
				console.log('That is not a valid direction')
		}
		this.currentDirection = currentDirection;
		console.log("turned right to", this.currentDirection)
	}

	// Also maybe try this with arrow functions and not method calls

	// Parse instructions
	parseInstructions(instructions) {
		let parsed = instructions.split("")
		return parsed
	}

}

let ryan = new Robot([0, 0], 'north', "ALLLR");
ryan.executeInstructions();
