class Robot {
	//your solution here
  constructor(coordinates = [0,0], bearing = 'north'){
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x, y){
    this.coordinates = [x, y]
  }

  setBearing(bearing){
    const validBearings = ['north', 'south', 'east', 'west']
    if (validBearings.includes(bearing)){
      this.bearing = bearing
    }else{
      throw ("Invalid Robot Bearing")
    }
  }

  place(object){
    this.coordinates = [object.x, object.y]
    this.bearing = object.direction
  }

  turnRight(){
    if (this.bearing === 'north'){
      this.bearing = 'east'
    }else if(this.bearing === 'east'){
      this.bearing = 'south'
    }else if(this.bearing === 'south'){
      this.bearing = 'west'
    }else if(this.bearing === 'west'){
      this.bearing = 'north'
    }
  }

  turnLeft(){
    if (this.bearing === 'north'){
      this.bearing = 'west'
    }else if(this.bearing === 'west'){
      this.bearing = 'south'
    }else if(this.bearing === 'south'){
      this.bearing = 'east'
    }else if(this.bearing === 'east'){
      this.bearing = 'north'
    }
  }

  advance(){
    if (this.bearing === 'north'){
      this.coordinates[1] += 1
    }else if (this.bearing === 'east'){
      this.coordinates[0] += 1
    }else if (this.bearing === 'south'){
      this.coordinates[1] -= 1
    }else if (this.bearing === 'west'){
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(instructions){
    instructions.split("").forEach((instruction) =>{
      if (instruction === 'L'){
        this.turnLeft()
      }else if (instruction === 'R'){
        this.turnRight()
      }else if (instruction === 'A'){
        this.advance()
      }
    })
  }



}
