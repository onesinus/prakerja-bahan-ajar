class Handphone {
     constructor() {
    
     }

    turn_on () {
        console.log("Hp dinyalakan....")
    }
}

class Oddo extends Handphone {
  constructor(height, width) {
    super()
    this.height = height;
    this.width = width;
  }
}

class Somai extends Handphone {
     constructor() {
         super()
     }

    turn_on() {
        console.log("手機已經開機了......")
    }
}

const odoo_coba = new Oddo(120, 45)
const somai_coba = new Somai()