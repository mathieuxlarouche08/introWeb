function btnCalculer_onclick()
{
    var Representation, Age, Res, PrixBase,Rabais;
    PrixBase = parseInt(document.getElementById("txtBasePrix").value);
 	if((Representation = document.getElementById("radSoir").checked = true) && (Age <= parseInt(document.getElementById("txtAge").value)))
    {
        Rabais = 0.4;
    }
    else if ((Representation = document.getElementById("radMidi").checked = true) && (Age <= parseInt(document.getElementById("txtAge").value)))
    {
        Rabais = 0.6;
    }
    else if ((Representation = document.getElementById("radSoir").checked = true ) && (Age > parseInt(document.getElementById("txtAge").value)))
    {
        Rabais = 0;
    }
    else
    {
        Rabais = 0.3;
    }
    Res = PrixBase * Rabais;
    console.log("le prix total sera de " + Res)
}