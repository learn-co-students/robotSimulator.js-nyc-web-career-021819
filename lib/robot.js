class Robot {
	//your solution here
	constructor(coordinates, bearing) {
		this.coordinates = [0, 0]
		this.bearing = "north"
	}

	setCoordinates(x, y) {
		return this.coordinates = [x, y]
	}

	setBearing(direciton) {
		const directions = ["north", "south", "east", "west"]

		if (directions.includes(direciton)) {
			this.bearing = direciton
		} else {
			throw "Invalid Robot Bearing"
		}
	}

	place(object) {
		this.setCoordinates(object.x, object.y)
		this.setBearing(object.direction)
	}

	turnRight() {
		if (this.bearing === "north") {
			this.bearing = "east"
		} else if (this.bearing === "east") {
			this.bearing = "south"
		} else if (this.bearing === "south") {
			this.bearing = "west"
		} else {
			this.bearing = "north"
		}
	}

	turnLeft() {
		if (this.bearing === "north") {
			this.bearing = "west"
		} else if (this.bearing === "east") {
			this.bearing = "north"
		} else if (this.bearing === "south") {
			this.bearing = "east"
		} else {
			this.bearing = "south"
		}
	}

	advance() {
		if (this.bearing === "north") {
			this.coordinates[1] += 1
		} else if (this.bearing === "east") {
			this.coordinates[0] += 1
		} else if (this.bearing === "south") {
			this.coordinates[1] -= 1
		} else {
			this.coordinates[0] -= 1
		}
	}

	translateInstructions(instruction) {
		instruction.split('').forEach(letter => {
			if (letter === "L") {
				this.turnLeft()
			} else if (letter === "R") {
				this.turnRight()
			} else if (letter === "A") {
				this.advance()
			}
		})
	}
}
