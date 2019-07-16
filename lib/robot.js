class Robot {
	constructor(startLocation, startDirection, instructions) {
		this.currentLocation = startLocation
		this.currentDirection = startDirection
		this.instructions = this.parseInstructions(instructions)
		this.instructionsMap = {
			A: this.advance,
			R: this.turnRight,
			L: this.turnLeft
		};
		this.directionVectors = {
			north: [0, 1],
			east: [1, 0],
			south: [0, -1],
			west: [-1, 0]
		}
	}

	// Execute movement
	executeInstructions() {
		this.instructions.forEach(
			instruction => this.executeInstruction(instruction)
		)
	}

	executeInstruction(instruction) {
		return this.instructionsMap[instruction]()
	}

	advance() {
		console.log("advancing from", this.currentLocation)
		this.currentLocation = this.currentLocation + this.directionVectors[this.currentDirection]
		console.log("advancing to", this.currentLocation)
	}

// 	var expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
// }

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

let ryan = new Robot("ALLLR");
ryan.executeInstructions();
