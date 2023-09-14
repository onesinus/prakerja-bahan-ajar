function namaFungsi() {
	console.log("Fungsi biasa")
}

namaFungsi()

var fungsiExpresi = function () {
	console.log("Fungsi expresi")
}

fungsiExpresi()

var fungsiPanah = () => {
	console.log("Fungsi panah.")
}

fungsiPanah()

var fungsiKonstruktor = new Function('console.log("fungsi konstruktor")');
fungsiKonstruktor()

function fungsiDenganParameter (a, b) {
	var hasilKali = a * b;
	console.log ("fungsi dengan parameter, a * b = " + hasilKali)
}
fungsiDenganParameter(3, 2)