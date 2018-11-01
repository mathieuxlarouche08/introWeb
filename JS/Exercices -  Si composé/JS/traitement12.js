function btnCalculer_onclick()
{ 
 	var nbr1,nbr2,nbr3,nbr4;

 	nbr1=parseInt(document.getElementById("txtNbre1").value);
    nbr2=parseInt(document.getElementById("txtNbre2").value);
    nbr3=parseInt(document.getElementById("txtNbre3").value);
    nbr4 = 3;
    if ((nbr1 >= nbr2) && (nbr2 =! nbr3))
	{
		nbr4 = nbr4 + 2 * nbr1;
	}
	else
	{
		if ((nbr1 = nbr2) && (nbr2 > nbr3))
		{
			nbr4 = nbr4 + nbr1;
		}
		else
		{
			nbr4 = nbr4 * nbr2 / nbr1 - nbr3;
		}
	}
	//afficher
	document.getElementById("btnCalculer").innerHTML ="Le résultat est" + nbr4;
}