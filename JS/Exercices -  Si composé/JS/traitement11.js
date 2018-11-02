function btnCalculer_onclick()
{
    var Nbr1, Nbr2, Signe;

    Nbr1 = parseInt(document.getElementById("txtNbre1").value);
    Nbr2 = parseInt(document.getElementById("txtNbre2").value);
    if (((Nbr1 > 0) && (Nbr2 > 0)) || ((Nbr1 < 0) && (Nbr2 < 0)))
    {
        Signe = "Positif";
    }
    else
    {
        Signe = "Negatif";
    }
    //afficher
    document.getElementById("lblMessage").innerHTML = "Le signe de votre résultat est " + Signe;
 	

}