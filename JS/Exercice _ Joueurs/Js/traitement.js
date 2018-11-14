var  tabnbrjoueur = new Array(4), tot, tabnbrPoint = new array(4),
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
    document.getElementById("lblReponse").innerHTML = "Numéro du joueur"+cpt;
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
function  btnMeilleur_onclick()
{
    document.getElementById("btnTrouverMeilleur").value();
    document.getElementById("txtNom");
    var NomJoueur, MeilPoint
    NomJoueur = "";
    MeilPoint = 0;
    Point = 0;
    for (MeilPoint = 1; MeilPoint>4; MeilPoint++)
    {
        MeilPoint = Point;
        NomJoueur = "";
    }
    document.getElementById("lblReponse").innerHTML = "Le joueur avec le meilleur pointage est " + NomJoueur + MeilPoint;
}
function btnPire_onclick()
{
     NomJoueur = document.getElementById("txtNom");
    document.getElementById("btnTrouverPire").value();
    var NomJoueur, PirePoint

    PirePoint = 0;
    Point = 0;
    for (PirePoint = 1; PirePoint<4; PirePoint--)
    {
        PirePoint = Point;
        NomJoueur = "";
    }
    document.getElementById("lblReponse").innerHTML = "Le joueur avec le pire pointage est " + NomJoueur + PirePoint;
}
