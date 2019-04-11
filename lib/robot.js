class Robot {

  constructor(){
    this.coordinates = [0, 0];
    this.bearing = 'north';
  }

  setCoordinates(x, y){
    this.coordinates = [x, y]
  }

  setBearing(bearing) {

    if(bearing === "north" || bearing === "south" || bearing === "east" || bearing === "west"){
      return this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place (object){
    this.setCoordinates(object.x, object.y)
    this.setBearing(object.direction)
  }

  turnRight(){
    if(this.bearing === "north"){
      this.bearing = "east"
    } else if(this.bearing === "east"){
      this.bearing = "south"
    } else if(this.bearing === "south"){
      this.bearing = "west"
    } else {
      this.bearing = "north"
    }
  }

  turnLeft(){
    if(this.bearing === "east"){
      this.bearing = "north"
    } else if(this.bearing === "south"){
      this.bearing = "east"
    } else if(this.bearing === "west"){
      this.bearing = "south"
    } else {
      this.bearing = "west"
    }
  }

  advance() {
    if(this.bearing === "north"){
      this.coordinates[1] += 1
    } else if(this.bearing === "east"){
      this.coordinates[0] += 1
    } else if(this.bearing === "south"){
      this.coordinates[1] -= 1
    } else {
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(inst) {
    inst.split('').forEach(letter => {
      if(letter === "L"){
        this.turnLeft()
      } else if (letter === "R"){
        this.turnRight()
      } else if(letter === "A"){
        this.advance()
      }
    })

  }

}
