class Robot {
	constructor(coordinates){
		this.coordinates = [0, 0];
		this.bearing = "north"
	}

	setCoordinates(coord1, coord2){
		this.coordinates = [coord1, coord2]
	}

	setBearing(direction){
		let bearings = ["north", "south", "east", "west"]
		if(bearings.includes(direction)){
			this.bearing = direction
		} else{
			throw new Error('Invalid Robot Bearing') 
		}
	}

	place(movement){
		this.setCoordinates(movement.x, movement.y)
		this.setBearing(movement.direction)
	}

	turnRight(){
		switch(this.bearing){
			case "north": 
			this.setBearing("east")
			break;
			case "east": 
			this.setBearing("south")
			break;
			case "south":
			this.setBearing("west")
			break;
			case "west":
			this.setBearing("north");
			break;
		}
	}

	turnLeft(){
		switch(this.bearing){
			case "north":
			this.setBearing("west")
			break;
			case "east":
			this.setBearing("north")
			break; 
			case "south":
			this.setBearing("east")
			break; 
			case "west":
			this.setBearing("south")
			break;
		}
	}
	
	advance(){
		switch(this.bearing){
			case "north": 
			this.coordinates[1]++;
			break;
			case "east":
			this.coordinates[0]++;
			break;
			case "south":
			this.coordinates[1]--;
			break;
			case "west":
			this.coordinates[0]--;
			break;
		}
	}

	translateInstructions(instructions){
		instructions.split("").forEach(instruction => {
			switch(instruction){
				case "L":
				this.turnLeft()
				break; 
				case "R":
				this.turnRight()
				break; 
				case "A":
				this.advance()
				break;
			}
		})
	}

} // end of class



 