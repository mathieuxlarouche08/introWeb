function btnCalculer_onclick()
{
    if (ValideChampObli() === true)
    {
        TraiterInfos();
    }
}
function ValideChampObli()
{
    var Valide = false;
    if ((ValideExist("txtNbre1")===true) && (ValideExist("txtNbre2")===true) && ValideExist("txtOperateur"))
    {
        Valide = true;
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