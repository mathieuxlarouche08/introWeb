function btnCalculer_onclick()
{
    var Representation, Age, Res, PrixBase,Rabais, Film;
    PrixBase = parseInt(document.getElementById("txtBasePrix").value);
    Film = document.getElementById("lstOptions");
    if (document.getElementById("chkMiSession").checked == true)
    {
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
    }
    else
    {
        Rabais = 0;
    }
    Res = PrixBase * Rabais;
    document.getElementById("lblMessage").innerHTML = "Un billet du " + Representation +" pour un spectateur de" +Age + "coute" +Res + "Pour le film" +Film;
}