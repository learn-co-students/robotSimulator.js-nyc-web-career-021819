class Robot {
  constructor(coordinates, bearing){
    this.coordinates = [0,0];
    this.bearing = "north"
  }

  setCoordinates(x, y){
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }

  setBearing(direction){
    const dirArray = ["north", "east", "south", "west"]
    if (dirArray.includes(direction)) {
      this.bearing = direction;
    }
    else {
      throw "Invalid Robot Bearing"
    }
  }

  place(input){
    this.bearing = input["direction"]
    this.coordinates[0]=input["x"]
    this.coordinates[1]=input["y"]
  }

  turnRight(){
    if (this.bearing === "north"){
      this.bearing = "east"
    }
    else if (this.bearing === "east"){
      this.bearing = "south"
    }
    else if (this.bearing === "south"){
      this.bearing = "west"
    }
    else if (this.bearing === "west"){
      this.bearing = "north"
    }
  }

  turnLeft(){
    if (this.bearing === "north"){
      this.bearing = "west"
    }
    else if (this.bearing === "west"){
      this.bearing = "south"
    }
    else if (this.bearing === "south"){
      this.bearing = "east"
    }
    else if (this.bearing === "east"){
      this.bearing = "north"
    }
  }

  advance(){
    if (this.bearing === "north"){
      ++this.coordinates[1]
    }
    else if (this.bearing === "west"){
      --this.coordinates[0]
    }
    else if (this.bearing === "south"){
      --this.coordinates[1]
    }
    else if (this.bearing === "east"){
      ++this.coordinates[0]
    }
  }

  translateInstructions(instructions){
    let instructionsArr = instructions.split("")


      instructionsArr.forEach((instruction) => {
        if (instruction === "L"){
          this.turnLeft()
        }
        else if (instruction === "R"){
          this.turnRight()
        }
        else if (instruction === "A"){
          this.advance()
        }
      })


  }

}
