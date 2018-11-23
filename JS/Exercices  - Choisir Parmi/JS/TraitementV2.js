function btnCalculer_onclick()
{
    if (ValideChampObli() === true)
    {
        if (ValideFormat() === true)
        {
            TraiterInfos();
        }

    }
}
function ValideChampObli() {
    var Valide = true;
    var tabnomId = new Array("txtNbre1", "txtNbre2", "txtOperateur");

    for (i = 0; i < 3; i++)
    {
        if (ValideExist(tabnomId[i]) == false)
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
    return Valide;
}
function TraiterInfos()
{
    var nbr1, nbr2, operation, res;

    nbr1 = parseInt(document.getElementById("txtNbre1").value);
    nbr2 = parseInt(document.getElementById("txtNbre2").value);
    operation = document.getElementById("txtOperateur").value;
    res = CalculerRes(nbr1,nbr2,operation);
    document.getElementById("lblMessage").innerHTML = "le resultat est" + res;

}
function CalculerRes(nbr1, nbr2, operation)
{
    var res;
    switch (operation)
    {
        case "+":
            res = nbr1 + nbr2;
            break;
        case  "-":
            res = nbr1 - nbr2;
            break;
        case "*":
            res = nbr1 * nbr2;
            break;
        case "/":
            res = nbr1 / nbr2;
            break;
    }
    return res;
}
function ValideFormat()
{
    var Valide = true;
    if ((valideNo(document.getElementById("txtNbre1").value) && valideNo(document.getElementById("txtNbre2"))) ==false)
    {
        Valide = false;
    }
    else
        Valide = true;
    if (Valideop(document.getElementById("txtOperateur").value) ==false)
    {
        Valide = false;
    }
    else
        Valide = true;
    return Valide;
}
function valideNo(chaine)
{
   return /^[0-9]+$/.test(chaine);
}
function Valideop(chaine)
{
    return /^[+]|[-]|[*]|[/]$/.test(chaine);
}
