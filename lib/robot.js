class Robot {
	//your solution here
  constructor () {
    this.coordinates = [0, 0];
    this.bearing = "north";
    this.possibleDirections = ['north', 'south', 'east', 'west']
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(str) {
    if (this.possibleDirections.includes(str)) {
        this.bearing = str;
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  place(coordObj) {
    this.setCoordinates(coordObj.x, coordObj.y)
    this.setBearing(coordObj.direction)
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.setBearing('east')
    } else if (this.bearing === 'east') {
      this.setBearing('south')
    } else if (this.bearing === 'south') {
      this.setBearing('west')
    } else if (this.bearing === 'west') {
      this.bearing = 'north'
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case "north":
        this.setBearing("west");
        break;
      case "south":
        this.setBearing("east");
        break;
      case "east":
        this.setBearing("north");
        break;
      case "west":
        this.setBearing("south");
        break;
      default:
        break;
    }
  }

  advance() {
    switch (this.bearing) {
      case "north":
        this.coordinates[1]++;
        break;
      case "south":
        this.coordinates[1]--;
        break;
      case "east":
        this.coordinates[0]++;
        break;
      case "west":
        this.coordinates[0]--;
        break;
      default:
        break;
    }
  }

  translateInstructions(instructions) {
    instructions.split("").forEach(i => {
      switch (i) {
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
        case "A":
          this.advance();
          break;
        default:
          break;
      }
    });
  }




}
