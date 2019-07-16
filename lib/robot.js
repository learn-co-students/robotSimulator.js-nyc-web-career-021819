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

	turnRight() {
		console.log("turning right from", this.currentDirection)
		console.log("turning left to", this.currentDirection)
	}

	turnLeft() {
		console.log("turning left from", this.currentDirection)
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
