function btnCalculer_onclick()

{
	var prix, animal, jours, toil, personne, nbrjour, rabais, hrs;

 	if (document.getElementById("lstVeterinaire").value == document.getElementById("Audrey").value)
	{
        document.getElementById("txtNbreJours").value = 2;
        document.getElementById("chkServ").checked = true;
        document.getElementById("radChien").checked = true;
        document.getElementById("lblMessage").value = 48.29;
	}
        else if (document.getElementById("lstVeterinaire").value == document.getElementById("Maxime").value )
        {
            document.getElementById("txtNbreJours").value = 4;
            document.getElementById("chkServ").checked = false;
            document.getElementById("radChat").checked = true;
            document.getElementById("lblMessage").value = 77.87;
            }
            else
            {
                document.getElementById("chkServ").checked = 5;
            }

      nbrjour = document.getElementById("txtNbreJours").value;
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
                jour = document.getElementById("txtNbrehrs").value
                switch ()


        }






