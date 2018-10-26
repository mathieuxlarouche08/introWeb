function btnCalculer_onclick()

{
	var prix, animal, jours, toil;
 	if (document.getElementById("lstVeterinaire").value = document.getElementById("Audrey").value)
	{
        document.getElementById("txtNbreJours").value = 2;
        document.getElementById("chkServ").checked = true;
        document.getElementById("radChien").checked = true;
        document.getElementById("lblMessage").value = 48.29;
	}
    else if (document.getElementById("lstVeterinaire").value = document.getElementById("Maxime").value )
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





}