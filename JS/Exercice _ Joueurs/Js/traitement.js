var  tabnbrjoueur = new Array(4), tot, tabnbrPoint = new Array(4),
cpt = 0;
function btnAjouter_onclick()
{
    var Points, NouvJoueur, nbrjoueur;

    NouvJoueur = document.getElementById("txtNom");
    Points = parseInt(document.getElementById("txtPoints").value);
    cpt = cpt + 1;
    tot = 0;
    tot = tot + Points;
    if (cpt >= 4)
    {
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
        document.getElementById("btnRechercher").disabled = false;
        document.getElementById("btnAjouter").disabled = true;
    }
    document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur"+cpt;

}
function btnMoy_onclick()
{
    var moy;
    Moy = caluclermoy();
    document.getElementById("lblReponse").innerHTML = "La moyenne est de " + Moy;
}
function  btnMeilleur_onclick()
{ var MeilPoint, NomJoueur;
    MeilPoint = Meilleur_onclick();
    document.getElementById("lblReponse").innerHTML = "La personne qui a le meilleur score est " + NomJoueur + "avec un score de " + MeilPoint;
}
function btnPire_onclick()
{
    var  PirePoint, NomJoueur;
    PirePoint = pire_onclick();
    document.getElementById("lblReponse").innerHTML = "La personne qui a le pire socre est" + NomJoueur + "avec un score de " +PirePoint;
}
function caluclermoy()
{
    var Moy, tot;
    tot = 0;
    for (i = 0; i<4;i++)
    {
        tot = tot + tabnbrPoint[i];
    }
    Moy = tot/4;
    return Moy

}
function  Meilleur_onclick()
{
    var NomJoueur, MeilPoint;
    MeilPoint = 0;
    for (i = 0; i<4; i++)
    {
       MeilPoint = tabnbrPoint[i];
       NomJoueur = tabnbrjoueur[i];
    }
    MeilPoint = tabnbrPoint[i];
    return NomJoueur;
}
function pire_onclick()
{

    var NomJoueur, PirePoint

    PirePoint = 0;
    Point = 0;
    for (i = 1; i>4; i--)
    {
        PirePoint = tabnbrPoint[i];
        NomJoueur = tabnbrjoueur[i];
    }
    PirePoint = tabnbrPoint[i];
    return PirePoint;

}
