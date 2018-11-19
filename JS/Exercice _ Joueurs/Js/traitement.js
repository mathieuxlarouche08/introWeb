var  tabnbrjoueur = new Array(4), tot, tabnbrPoint = new Array(4),
cpt = 0;
function btnAjouter_onclick()
{
    var Points, NouvJoueur;

    tabnbrjoueur[cpt] = document.getElementById("lblNbreJoueur").value;
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
    Moy =calculermoy();
    document.getElementById("lblReponse").innerHTML = "La moyenne est de " + Moy;
}
function btnTrouverMeilleur()
{   var Max, Pos, Nom;
    Max = Meilleur();
    document.getElementById("lblReponse").innerHTML = "Le plus grand point est" + Max + "avec la personne" + Nom;
}
function btnPire_onclick()
{
    var  Min , Pos, Nom;
    Min = pire();
    document.getElementById("lblReponse").innerHTML = "Le plus petit point est" + Min + "avec" + Nom;
}
function calculermoy()
{
    var Moy, tot;
    tot = 0;
    for (i = 0; i<4;i++)
    {
        tot = tot + tabnbrPoint[i];
    }
    Moy = tot/4;
    return Moy;

}
function  Meilleur()
{
    var Max, Pos;
    Max = 0;
    for (i = 0; i < 4 ; i++)
    {
        if (Max < tabnbrPoint[i])
        {
            Max = tabnbrPoint[i];
            Pos = i;
        }
    }
    return pos;

}
function pire()
{

    var Min, pos;
    Min = tabnbrPoint[0];
    for (i = 0; i<4;i++)
    {
        if (Min < tabnbrPoint[i])
        {
            Min = tabnbrPoint[i];
            Pos = i;
        }
    }
    return Pos;
}
function trouverNom()
{
    var Nom;
    Nom = document.getElementById("txtNom").value;
    i = 0;
    trouve = false;
    while (trouve = false && i < 5)
    {
        if (tabnbrjoueur[i] == Nom)
        {
            trouve = true;
        }
        else
        {
            i++;
        }
    }
}
