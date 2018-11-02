function btnCalculer_onclick()

{
	var prix, animal, jours, toil, personne, nbrjour, rabais, hrs, txhr, nomveterinaire, res;
	nomveterinaire = document.getElementById("lstVeterinaire").value;
    hrs  = parseInt(document.getElementById("txtNbrehrs").value);
    nbrjour = document.getElementById("txtNbreJours").value;



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
                document.getElementById("lblMessage").innerHTML ="Le résultat est " + res + " Pour " +nbrjour +" Jour";


}
function btnCalculer1_onclick()
{
    document.getElementById("imgChien").src = "img/chiot_jack_russell_432_323_filled.jpg"
}
function btnCalculer2_onclick()
{
    document.getElementById("imgChat").src = "img/legendre-chat-religion.jpg"
}





