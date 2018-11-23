
function btnCalculer_onclick()
{
    if (ValideChampObli() === true)
    {
        TraiterInfo();
    }
}
function btnCalculer1_onclick()
{
    document.getElementById("imgChien").src = "img/chiot_jack_russell_432_323_filled.jpg"
}
function btnCalculer2_onclick()
{
    document.getElementById("imgChat").src = "img/legendre-chat-religion.jpg"
}
function CalculerRes(lstVeterinaire, txtNbreJours, chkServ, radChien, radChat, txtNbrehrs, txtNomClient, txtNumTel)
{
    var prix, animal, jours, toil, personne, nbrjour, rabais, hrs, txhr, nomveterinaire, res;
    if (document.getElementById("lstVeterinaire").value == document.getElementById("Audrey").value)
    {
        document.getElementById("txtNbreJours").value = 2;
        document.getElementById("chkServ").checked = true;
        document.getElementById("radChien").checked = true;
        res = 48.29;

    }
    else if (document.getElementById("lstVeterinaire").value == document.getElementById("Maxime").value )
    {
        document.getElementById("txtNbreJours").value = 4;
        document.getElementById("chkServ").checked = false;
        document.getElementById("radChat").checked = true;
        res = 77.87;

    }
    else
    {
        document.getElementById("chkServ").checked = 5;
    }


    if ((nbrjour >= 1) && (nbrjour <5))
    {
        rabais = 0;
    }
    else if ((nbrjour >= 5) && (nbrjour <10))
    {
        rabais = 0.05;
    }
    else if ((nbrjour >= 10) && (nbrjour < 30))
    {
        rabais = 0.1;
    }
    else
    {
        rabais = 0.15;
    }

    switch (txhr)
    {
        case "Audrey Bouchard":
            txhr = 25;
            break;
        case "Stéphane Tremblay":
            txhr =35;
            break;
        case "Maxime Simard":
            txhr =40;
            break;
        case "Mélissa Caron":
            txhr =45;
            break;
    }
    return res;

}
function ValideChampObli()
{
    var Valide = true, tabId= new Array("txtNbreJours", "txtNbrehrs", "txtNomClient", "txtNumTel");
  //  var tabVar = new Array("txtNbreJours", "txtNbrehrs", "txtNomClient", "txtNumTel");
    for (i=0;i<8; i++)
    {
        if (ValideExist(tabId[i]) == false)
        {
            Valide = false;
        }
    }
    return Valide;

}
function ValideExist(nomId)
{
    var Valide;
    if (document.getElementById(nomId).value==="")
    {
        Valide = false;
        document.getElementById(nomId).style.backgroundColor = "red";
    }
    else
    {
        Valide = true;
        document.getElementById(nomId).style.backgroundColor = "white";
    }
}
function traiterinfo()
{
    nomveterinaire = document.getElementById("lstVeterinaire").value;
    hrs  = parseInt(document.getElementById("txtNbrehrs").value);
    nbrjour = document.getElementById("txtNbreJours").value;
    res = CalculerRes(lstVeterinaire, txtNbreJours, chkServ, radChien, radChat, txtNbrehrs, txtNomClient, txtNumTel);
    document.getElementById("lblMessage").innerHTML ="Le résultat est " + res + " Pour " +nbrjour +" Jour";
}
function ValideChampObli()
{
    var Valide = true;
        if (ValideExist() == false)
        {
            Valide = false;
        }
    return Valide;
}




