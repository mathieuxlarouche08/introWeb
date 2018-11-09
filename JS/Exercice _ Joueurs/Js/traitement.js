var  tabnbrjoueur = new Array(4), tot
cpt = 0;
function btnAjouter_onclick()
{
    var Points, NouvJoueur, nbrjoueur

    NouvJoueur = document.getElementById("txtNom");
    Points = parseInt(document.getElementById("txtPoints").value);
    cpt = cpt + 1;
    tot = 0;
    tot = tot + Points;
    for (joueur = 1; joueur>4; joueur++)
    {
        Moy = tot;
    }
    if (cpt >= 4)
    {
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
        document.getElementById("btnRechercher").disabled = false;
        document.getElementById("btnAjouter").disabled = true;
    }
    alert(cpt);
    document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur"+cpt;
}
function btnMoy_onclick()
{
    var Moy, joueur
    Moy = 0;
    tot = 0;
    tot = tot + Points;
    for (joueur = 1; joueur>4; joueur++)
    {
       Moy = tot;
    }
     document.getElementById("").innerHTML = "le total de la moyenne est" + Moy;
}
