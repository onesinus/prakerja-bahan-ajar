function Hp (merk, brand) {
    this._merk = merk;
    this._brand = brand

    this.nyalakan = function () {
        console.log(`Hp ${merk} anda dinyalakan....`)
    }

    this.tampilkanInformasi = function(jenis_info) {
        if (jenis_info === "singkat") {
            return `Merk: ${this._merk}, Brand: ${this._brand}`
        } else {
            return `${this._merk} - ${this._brand}`
        }
    }
}

class Oddo {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  autoAlarm(waktu) {
      console.log("Kringg...... bunyi alarm, sekarang pukul: " + waktu)
  }
}

class Somai extends Hp {
    
}

const odoo_coba = new Oddo(120, 45)
console.log(odoo_coba)