class Robot {
	//your solution here

	constructor(instructions) {
		console.log(instructions)
		this.instructions = this.parseInstructions(instructions)
		console.log("parsed", this.instructions)
		this.instructionsMap = {
			A: this.advance,
			R: this.turnRight,
			L: this.turnLeft
		};
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
		console.log("advanced")
	}

	turnRight() {
		console.log("turned right")
	}

	turnLeft() {
		console.log("turned left")
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
