function frmMembre_onsubmit()
{
    var Valide = false, txt;
    if (ValiderChampObli() ===true)
    {
        if (ValideFormat() ===true)
        {

            var Prix = TraiterInfos();
            if( confirm("Voulez vous vous inscrire pour:" + Prix +"$" ) ==true )
            {
                Valide = true;
            }
        }
    }
    return Valide;
}
function ValiderChampObli()
{
    var Valide = true, tabNomId = new Array("txtNom","txtPrenom","txtAdresse","txtVille","txtTel");
    for (i=0;i<5;i++)
    {
        if (ValideExist(tabNomId[i]) == false)
        {
            Valide = false
        }
    }
    return Valide
}
function TraiterInfos()
{
    var Nom, Prenom, Adresse, Ville, Telephone, CodePos,CodePerm, Age,Prix;
    Nom = document.getElementById("txtNom").value;
    Prenom = document.getElementById("txtPrenom").value;
    Adresse = document.getElementById("txtAdresse").value;
    Ville = document.getElementById("txtVille").value;
    Telephone = document.getElementById("txtTel").value;
    CodePos = document.getElementById("txtCodePostal").value;
    CodePerm = document.getElementById("txtCodePerm").value;
    Age = document.getElementById("type").value;

    Age = document.getElementById("type").value;
    if( Age ==="adulte" )
    {
        Prix = 90;
    }
    else if( Age ==="étudiant" )
    {
        Prix = 60;
    }

    else
    {
        Prix = 80;
    }
    return Prix

   // document.getElementById("").innerHTML = "Votre tarif est" +Prix;

    
}
function ValideExist(nomId)
{
    var Valide;
    if (document.getElementById(nomId).value ==="")
    {
        Valide = false;
        document.getElementById(nomId).style.borderColor="red";
        document.getElementById("lblMessageErreur").innerHTML ="Tous les champs ayant une étoile sont obligatoire";
    }
    else
    {
        Valide = true;
        document.getElementById(nomId).style.borderColor="white";
    }
    return Valide
}

    

function ValideFormat()
{
    var  Valide = true;
    if (ValideChaine(document.getElementById("txtNom").value) === false)
    {
        Valide = false;
        document.getElementById("txtNom").style.borderColor = "red";
    }
    if (ValideChaine(document.getElementById("txtPrenom").value) ===false)
    {
        Valide = false;
        document.getElementById("txtPrenom").style.borderColor = "red";
    }
    if (ValideChaine(document.getElementById("txtVille").value) ===false)
    {
        Valide = false;
        document.getElementById("txtVille").style.borderColor = "red";
    }
    if ((ValideCodePos(document.getElementById("txtCodePostal").value) ===false)  && (document.getElementById("txtCodePostal").value != ""))
    {
        Valide = false;
        document.getElementById("txtCodePostal").style.borderColor = "red";
    }
    if (ValideNumTel(document.getElementById("txtTel").value) ===false)
    {
        Valide = false;
        document.getElementById("txtTel").style.borderColor = "red";
    }
    if ((ValideCodePerm(document.getElementById("txtCodePerm").value) ===false) && (document.getElementById("txtCodePerm").value != ""))
    {
        Valide = false;
        document.getElementById("txtCodePerm").style.borderColor = "red";
    }
    return Valide;
}
function ValideChaine(chaine)
{
    return /^[A-Z]{1}[a-z]+\-?[A-z]+?$/.test(chaine);
}
function ValideCodePos(chaine)
{
    return /^[A-Z]{1}[1-9]{1}[A-Z]{1} [1-9]{1}[A-Z]{1}[1-9]{1}|[a-z]{1}[1-9]{1}[a-z]{1} [1-9]{1}[A-Z]{1}[1-9]{1}$/.test(chaine);
}
function ValideNumTel(chaine)
{
    return /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}|^\([0-9]{3}\) [0-9]{3}\-[0-9]{4}$/.test(chaine);
}
function ValideCodePerm(chaine)
{
    return /^[A-z]{4}[1-9]{8}$/.test(chaine);
}