function btnCalculer_onclick()
{
    var nbr1, nbr2, operation, res;

    nbr1 = parseInt(document.getElementById("txtNbre1").value);
    nbr2 = parseInt(document.getElementById("txtNbre2").value);
    operation = document.getElementById("txtOperateur").value;


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
    document.getElementById("lblMessage").innerHTML = "Le resultat est:" + res;


}