class Robot {
	constructor(startLocation=[0,0], startDirection='north', instructions="") {
		this.coordinates = startLocation;
		this.bearing = startDirection;
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
		console.log(this.coordinates)
	}
	// TODO: Current bug is that the attributes are not being updated

	// Execute movement
	translateInstructions(instructions) {
		const parsedInstructions = this.parseInstructions(instructions)
		parsedInstructions.forEach(
			instruction => this.executeInstruction(instruction)
		)
	}

	place(placementHash) {
		this.setCoordinates(placementHash.x, placementHash.y)
		this.setBearing(placementHash.direction)
	}

	setCoordinates(x, y) {
		this.coordinates = [x, y]
	}


	// it("should handle an invalid robot bearing", () => {
	// 	expect(() => wallE.setBearing("hotdog")).to.throw();
	// 	expect(() => wallE.setBearing("hotdog")).to.throw(
	// 	  /Invalid Robot Bearing/i
	// 	);
	//   });
	// });


	setBearing(bearing) {
		switch (bearing) {
			case 'north':
				this.bearing = 'north'
				break;
			case 'west':
				this.bearing = 'west'
				break;
			case 'south':
				this.bearing = 'south'
				break;
			case 'east':
				this.bearing = 'east'
				break;
			default:
				throw 'Invalid Robot Bearing'
		}
		this.bearing = bearing;
	}



	executeInstruction(instruction) {
		console.log('about to', instruction)
		return this.instructionsMap[instruction]()
	}


	advance() {
		console.log("advancing from", this.coordinates)
		let newLocation = this.coordinates.map(
			(num, idx) => { 
				return num + this.directionVectors[this.bearing][idx]
			})
	
		this.coordinates = newLocation
		console.log("advancing to", this.coordinates)
	}

	turnLeft() {
		console.log("turning left from", this.bearing)
		let bearing = ''
		switch (this.bearing) {
			case 'north':
				console.log("turning from north to west")
				bearing = 'west'
				break;
			case 'west':
					console.log("turning from west to south")
					bearing = 'south'
				break;
			case 'south':
					console.log("turning from south to east")
					bearing = 'east'
				break;
			case 'east':
					console.log("turning from east to north")
					bearing = 'north'
				break;
			default:
				console.log('That is not a valid direction')
		}
		this.bearing = bearing;
		console.log("turned left to", this.bearing)
	}

	turnRight() {
		console.log("turning right from", this.bearing)
		let bearing = ''
		switch (this.bearing) {
			case 'north':
				console.log("turning from north to east")
				bearing = 'east'
				break;
			case 'east':
					console.log("turning from east to south")
					bearing = 'south'
				break;
			case 'south':
					console.log("turning from south to west")
					bearing = 'west'
				break;
			case 'west':
					console.log("turning from west to north")
					bearing = 'north'
				break;
			default:
				console.log('That is not a valid direction')
		}
		this.bearing = bearing;
		console.log("turned right to", this.bearing)
	}

	// Also maybe try this with arrow functions and not method calls

	// Parse instructions
	parseInstructions(instructions) {
		let parsed = instructions.split("")
		return parsed
	}

}

let ryan = new Robot([0, 0], 'north', "ALLLR");
ryan.translateInstructions();
