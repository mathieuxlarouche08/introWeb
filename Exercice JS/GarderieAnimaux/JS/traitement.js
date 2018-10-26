function btnCalculer_onclick()
{ 
 	var Veterinaire, txtnbreJours, ChkServ, TxtNbreJours, radChien, radChat, LblMessage, btnCalculer, res;
    ChkServ = parseInt(document.getElementById("ChkServ").value);
 	         ChkServ = 5;
    TxtNbreJours = parseInt(document.getElementById("txtNbreJours").value);
    radChien = document.getElementById("radChien").value;
    radChat = document.getElementById("radChat").value;
    if (document.getElementById("Audrey").value)
    {
        txtnbreJours = 2;
        radChien;
        res = 48.29;
    }
    else
    {
        txtnbreJours = 4;
        radChat;
        res = 77.87;
    }







}