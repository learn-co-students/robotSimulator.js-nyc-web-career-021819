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

	turnRight() {
		console.log("turning right from", this.currentDirection)
		switch (this.currentDirection) {
			case 'north':
				console.log("turning from north to west")
				this.currentLocation = 'west'
				break;
			case 'west':
					console.log("turning from west to south")
					this.currentLocation = 'south'
				break;
			case 'north':
					console.log("turning from south to east")
					this.currentLocation = 'east'
				break;
			case 'north':
					console.log("turning from east to north")
					this.currentLocation = 'north'
				break;
			default:
				console.log('That is not a valid direction')
		}
		console.log("turning left to", this.currentDirection)
	}

	turnLeft() {
		console.log("turning left from", this.currentDirection)
		switch (this.currentDirection) {
			case 'north':
				console.log("turning from north to east")
				this.currentLocation = 'east'
				break;
			case 'east':
					console.log("turning from east to south")
					this.currentLocation = 'south'
				break;
			case 'south':
					console.log("turning from south to west")
					this.currentLocation = 'west'
				break;
			case 'west':
					console.log("turning from west to north")
					this.currentLocation = 'north'
				break;
			default:
				console.log('That is not a valid direction')
		}
		console.log("turning left to", this.currentDirection)
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
