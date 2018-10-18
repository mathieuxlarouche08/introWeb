function btnCalculer_onclick()
{ 
 	var PdLbs, PdKg

    PdLbs = parseFloat(document.getElementById("txtPdLbs").value);
 	PdKg = parseFloat(document.getElementById("txtPdKg").value);

 	PdKg = PdLbs * 2.2;
 	console.log("Le poid en koli est" +PdKg);
}