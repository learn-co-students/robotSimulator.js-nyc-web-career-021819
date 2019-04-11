class Robot {
  constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
    this.bearings = ['north','south','west','east']

  }

  setCoordinates(x,y) {
    this.coordinates = [x,y]
  }

  setBearing(newDirection) {
    if (this.bearings.includes(newDirection)) {
      this.bearing = newDirection
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  place(newLocation) {
    this.setCoordinates(newLocation.x,newLocation.y)
    this.setBearing(newLocation.direction)
  }

  //Turn robot right
  turnRight() {
    if (this.bearing === 'north') {
      this.bearing = 'east'
    } else if (this.bearing === 'east') {
      this.bearing = 'south'
    } else if (this.bearing === 'south') {
      this.bearing = 'west'
    } else {
      this.bearing = 'north'
    }
  }

  //Turn robot left
  turnLeft() {
    if (this.bearing === 'north') {
      this.bearing = 'west'
    } else if (this.bearing === 'east') {
      this.bearing = 'north'
    } else if (this.bearing === 'south') {
      this.bearing = 'east'
    } else {
      this.bearing = 'south'
    }
  }

  advance() {
    if (this.bearing === 'north') {
      this.setCoordinates(this.coordinates[0],this.coordinates[1]+1)
    } else if (this.bearing === 'east') {
      this.setCoordinates(this.coordinates[0]+1,this.coordinates[1])
    } else if (this.bearing === 'south') {
      this.setCoordinates(this.coordinates[0],this.coordinates[1]-1)
    } else {
      this.setCoordinates(this.coordinates[0]-1,this.coordinates[1])
    }
  }

  translateInstructions(instructions) {
    instructions.split("").forEach(instruction => {
      switch (instruction) {
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
