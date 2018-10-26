function btnCalculer_onclick()
{
    var Representation, Age, Res, PrixBase,Rabais;
 	if((Representation = document.getElementById("radSoir").checked = true) && (Age <= parseInt(document.getElementById("txtAge").value)))
    {
        Rabais = 40/100;
    }
    else if ((Representation = document.getElementById("radMidi").checked = true) && (Age <= parseInt(document.getElementById("txtAge").value)))
    {
        Rabais = 60/100;
    }
    else if ((Representation = document.getElementById("radSoir").checked = true ) && (Age > parseInt(document.getElementById("txtAge").value)))
    {
        Rabais = 0;
    }
    else
    {
        Rabais = 30/100;
    }
}