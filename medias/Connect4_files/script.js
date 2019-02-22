var aRonds = [{
        etat: 0,
        pos: 0
    },
    {
        etat: 0,
        pos: 1
    },
    {
        etat: 0,
        pos: 2
    },
    {
        etat: 0,
        pos: 3
    },
    {
        etat: 0,
        pos: 4
    },
    {
        etat: 0,
        pos: 5
    },
    {
        etat: 0,
        pos: 6
    },
    {
        etat: 0,
        pos: 7
    },
    {
        etat: 0,
        pos: 8
    },
    {
        etat: 0,
        pos: 9
    },
    {
        etat: 0,
        pos: 10
    },
    {
        etat: 0,
        pos: 11
    },
    {
        etat: 0,
        pos: 12
    },
    {
        etat: 0,
        pos: 13
    },
    {
        etat: 0,
        pos: 14
    },
    {
        etat: 0,
        pos: 15
    }
]

document.addEventListener("load", alea(), false);

function alea() {
    var jaitrouver = false;
    while (!jaitrouver) {
        var testend = 0;
        for (var end = 0; end < 15; end++) {
            if (aRonds[end].etat == 0) {
                testend++;
            }
        }
        if (testend == 0) {
            return false;
            break;
        }
        iRand = Math.floor(Math.random() * 16);
        if (aRonds[iRand].etat == 0) {
            aRonds[iRand].etat = 2;
            jaitrouver = true;
        }
    }
}

//@param = objet carré
function gotop(e) {
    //tchek de lui a -4
    if (aRonds[e - 4].etat == 0) {
        aRonds[e - 4].etat = aRonds[e].etat
        aRonds[e].etat = 0

    }
    if (aRonds[e - 4].etat == aRonds[e].etat) {
        aRonds[e - 4].etat = aRonds[e].etat * 2
        score += aRonds[e - 4].etat;
        aRonds[e].etat = 0
    }
    //tchek de +4 a lui
    if (aRonds[e].etat == 0) {
        aRonds[e].etat = aRonds[e + 4].etat
        aRonds[e + 4].etat = 0

    }
    if (aRonds[e + 4].etat == aRonds[e].etat) {
        aRonds[e].etat = aRonds[e + 4].etat * 2
        score += aRonds[e].etat;
        aRonds[e + 4].etat = 0
    }

    //tchek de lui a -4
    if (aRonds[e - 4].etat == 0) {
        aRonds[e - 4].etat = aRonds[e].etat
        aRonds[e].etat = 0

    }
    if (aRonds[e - 4].etat == aRonds[e].etat) {
        aRonds[e - 4].etat = aRonds[e].etat * 2
        score += aRonds[e - 4].etat;
        aRonds[e].etat = 0
    }

    //tchek de +8 a +4
    if (aRonds[e + 4].etat == 0) {
        aRonds[e + 4].etat = aRonds[e + 8].etat
        aRonds[e + 8].etat = 0

    }
    if (aRonds[e + 4].etat == aRonds[e + 8].etat) {
        aRonds[e + 4].etat = aRonds[e + 8].etat * 2
        score += aRonds[e + 4].etat;
        aRonds[e + 8].etat = 0
    }

    //tchek de +4 a lui

    if (aRonds[e].etat == 0) {
        aRonds[e].etat = aRonds[e + 4].etat
        aRonds[e + 4].etat = 0

    }
    if (aRonds[e + 4].etat == aRonds[e].etat) {
        aRonds[e].etat = aRonds[e + 4].etat * 2
        score += aRonds[e].etat;
        aRonds[e + 4].etat = 0
    }
    //tchek de lui a -4
    if (aRonds[e - 4].etat == 0) {
        aRonds[e - 4].etat = aRonds[e].etat
        aRonds[e].etat = 0

    }
    if (aRonds[e - 4].etat == aRonds[e].etat) {
        aRonds[e - 4].etat = aRonds[e].etat * 2
        score += aRonds[e - 4].etat;
        aRonds[e].etat = 0
    }

    if (aRonds[e + 8].etat != 0 && aRonds[e + 4].etat == 0) {
        aRonds[e + 4].etat = aRonds[e + 8].etat;
        aRonds[e + 8].etat = 0;
    }


}


function godown(e) {
    //tchek de lui a -4
    if (aRonds[e + 4].etat == 0) {
        aRonds[e + 4].etat = aRonds[e].etat
        aRonds[e].etat = 0

    }
    if (aRonds[e + 4].etat == aRonds[e].etat) {
        aRonds[e + 4].etat = aRonds[e].etat * 2
        score += aRonds[e + 4].etat;
        aRonds[e].etat = 0
    }
    //tchek de +4 a lui
    if (aRonds[e].etat == 0) {
        aRonds[e].etat = aRonds[e - 4].etat
        aRonds[e - 4].etat = 0

    }
    if (aRonds[e - 4].etat == aRonds[e].etat) {
        aRonds[e].etat = aRonds[e - 4].etat * 2
        score += aRonds[e].etat;
        aRonds[e - 4].etat = 0
    }
    //chu ici
    //tchek de lui a -4
    if (aRonds[e + 4].etat == 0) {
        aRonds[e + 4].etat = aRonds[e].etat
        aRonds[e].etat = 0

    }
    if (aRonds[e + 4].etat == aRonds[e].etat) {
        aRonds[e + 4].etat = aRonds[e].etat * 2
        score += aRonds[e + 4].etat;
        aRonds[e].etat = 0
    }

    //tchek de +8 a +4
    if (aRonds[e - 4].etat == 0) {
        aRonds[e - 4].etat = aRonds[e - 8].etat
        aRonds[e - 8].etat = 0

    }
    if (aRonds[e - 4].etat == aRonds[e - 8].etat) {
        aRonds[e - 4].etat = aRonds[e - 8].etat * 2
        score += aRonds[e - 4].etat;
        aRonds[e - 8].etat = 0
    }

    //tchek de +4 a lui

    if (aRonds[e].etat == 0) {
        aRonds[e].etat = aRonds[e - 4].etat
        aRonds[e - 4].etat = 0

    }
    if (aRonds[e - 4].etat == aRonds[e].etat) {
        aRonds[e].etat = aRonds[e - 4].etat * 2
        score += aRonds[e].etat;
        aRonds[e - 4].etat = 0
    }
    //tchek de lui a -4
    if (aRonds[e + 4].etat == 0) {
        aRonds[e + 4].etat = aRonds[e].etat
        aRonds[e].etat = 0

    }
    if (aRonds[e + 4].etat == aRonds[e].etat) {
        aRonds[e + 4].etat = aRonds[e].etat * 2
        score += aRonds[e + 4].etat;
        aRonds[e].etat = 0
    }

    if (aRonds[e - 8].etat != 0 && aRonds[e - 4].etat == 0) {
        aRonds[e - 4].etat = aRonds[e - 8].etat;
        aRonds[e - 8].etat = 0;
    }


}

function goleft(e) {
    //tchek de lui a -4
    if (aRonds[e - 1].etat == 0) {
        aRonds[e - 1].etat = aRonds[e].etat
        aRonds[e].etat = 0

    }
    if (aRonds[e - 1].etat == aRonds[e].etat) {
        aRonds[e - 1].etat = aRonds[e].etat * 2
        score += aRonds[e - 1].etat;
        aRonds[e].etat = 0
    }
    //tchek de +4 a lui
    if (aRonds[e].etat == 0) {
        aRonds[e].etat = aRonds[e + 1].etat
        aRonds[e + 1].etat = 0

    }
    if (aRonds[e + 1].etat == aRonds[e].etat) {
        aRonds[e].etat = aRonds[e + 1].etat * 2
        score += aRonds[e].etat;
        aRonds[e + 1].etat = 0
    }
    //chu ici
    //tchek de lui a -4
    if (aRonds[e + 1].etat == 0) {
        aRonds[e + 1].etat = aRonds[e].etat
        aRonds[e].etat = 0

    }
    if (aRonds[e - 1].etat == aRonds[e].etat) {
        aRonds[e - 1].etat = aRonds[e].etat * 2
        score += aRonds[e - 1].etat;
        aRonds[e].etat = 0
    }

    //tchek de +8 a +4
    if (aRonds[e + 1].etat == 0) {
        aRonds[e + 1].etat = aRonds[e + 2].etat
        aRonds[e + 2].etat = 0

    }
    if (aRonds[e + 1].etat == aRonds[e + 2].etat) {
        aRonds[e + 1].etat = aRonds[e + 2].etat * 2
        score += aRonds[e + 1].etat;
        aRonds[e + 2].etat = 0
    }

    //tchek de +4 a lui

    if (aRonds[e].etat == 0) {
        aRonds[e].etat = aRonds[e + 1].etat
        aRonds[e + 1].etat = 0

    }
    if (aRonds[e + 1].etat == aRonds[e].etat) {
        aRonds[e].etat = aRonds[e + 1].etat * 2
        score += aRonds[e].etat;
        aRonds[e + 1].etat = 0
    }
    //tchek de lui a -4
    if (aRonds[e - 1].etat == 0) {
        aRonds[e - 1].etat = aRonds[e].etat
        aRonds[e].etat = 0

    }
    if (aRonds[e - 1].etat == aRonds[e].etat) {
        aRonds[e - 1].etat = aRonds[e].etat * 2
        score += aRonds[e - 1].etat;
        aRonds[e].etat = 0
    }
    if (aRonds[e + 2].etat != 0 && aRonds[e + 1].etat == 0) {
        aRonds[e + 1].etat = aRonds[e + 2].etat;
        aRonds[e + 2].etat = 0;
    }


}

function goright(e) {
    //tchek de lui a -4
    if (aRonds[e + 1].etat == 0) {
        aRonds[e + 1].etat = aRonds[e].etat
        aRonds[e].etat = 0

    }
    if (aRonds[e + 1].etat == aRonds[e].etat) {
        aRonds[e + 1].etat = aRonds[e].etat * 2
        score += aRonds[e + 1].etat;
        aRonds[e].etat = 0
    }
    //tchek de +4 a lui
    if (aRonds[e].etat == 0) {
        aRonds[e].etat = aRonds[e - 1].etat
        aRonds[e - 1].etat = 0

    }
    if (aRonds[e - 1].etat == aRonds[e].etat) {
        aRonds[e].etat = aRonds[e - 1].etat * 2
        score += aRonds[e].etat;
        aRonds[e - 1].etat = 0
    }
    //chu ici
    //tchek de lui a -4
    if (aRonds[e - 1].etat == 0) {
        aRonds[e - 1].etat = aRonds[e].etat
        aRonds[e].etat = 0

    }
    if (aRonds[e + 1].etat == aRonds[e].etat) {
        aRonds[e + 1].etat = aRonds[e].etat * 2
        score += aRonds[e + 1].etat;
        aRonds[e].etat = 0
    }

    //tchek de +8 a +4
    if (aRonds[e - 1].etat == 0) {
        aRonds[e - 1].etat = aRonds[e - 2].etat
        aRonds[e - 2].etat = 0

    }
    if (aRonds[e - 1].etat == aRonds[e - 2].etat) {
        aRonds[e - 1].etat = aRonds[e - 2].etat * 2
        score += aRonds[e - 1].etat;
        aRonds[e - 2].etat = 0
    }

    //tchek de +4 a lui

    if (aRonds[e].etat == 0) {
        aRonds[e].etat = aRonds[e - 1].etat
        aRonds[e - 1].etat = 0

    }
    if (aRonds[e - 1].etat == aRonds[e].etat) {
        aRonds[e].etat = aRonds[e - 1].etat * 2
        score += aRonds[e].etat;
        aRonds[e - 1].etat = 0
    }
    //tchek de lui a -4
    if (aRonds[e + 1].etat == 0) {
        aRonds[e + 1].etat = aRonds[e].etat
        aRonds[e].etat = 0

    }
    if (aRonds[e + 1].etat == aRonds[e].etat) {
        aRonds[e + 1].etat = aRonds[e].etat * 2
        score += aRonds[e + 1].etat;
        aRonds[e].etat = 0
    }

    if (aRonds[e - 2].etat != 0 && aRonds[e - 1].etat == 0) {
        aRonds[e - 1].etat = aRonds[e - 2].etat;
        aRonds[e - 2].etat = 0;
    }


}

// **faire la fonction dans un for des 4 derniere case**
function canMoveDown(e) {
    // si le dernier de la ligne est vide et qu'il y en a un en haut
    if (aRonds[e].etat == 0) {
        if (
            aRonds[e - 4].etat != 0 ||
            aRonds[e - 8].etat != 0 ||
            aRonds[e - 12].etat != 0
        ) {
            return true;
        }
    }
    // si le dernier et 3 sont identiques
    if (aRonds[e].etat == aRonds[e - 4].etat && aRonds[e].etat != 0) {
        return true;
    }
    // si le dernier et 2ieme sont identiques
    // ET que 3 est vide
    if (aRonds[e].etat == aRonds[e - 8].etat && aRonds[e].etat != 0 && aRonds[e - 4].etat == 0) {
        return true;
    }
    // si le dernier et le premier sont identiques 
    // ET que 2 et 3 sont vide
    if (aRonds[e].etat == aRonds[e - 12].etat && aRonds[e].etat != 0 && aRonds[e - 4].etat == 0 && aRonds[e - 8].etat == 0) {
        return true
    }

    // si le 4 est plein et le 2 est vide ou que le 3 est vide
    if (aRonds[e - 12].etat != 0) {
        if (aRonds[e - 4].etat == 0 || aRonds[e - 8].etat == 0) {
            return true;
        }
    }
    // si le 1 est plein et le 3 est vide ou que le 4 est vide
    if (aRonds[e - 8].etat != 0) {
        if (aRonds[e - 4].etat == 0) {
            return true;
        }
    }

    // si 2 et 3 sont identiques
    if (aRonds[e - 4].etat == aRonds[e - 8].etat && aRonds[e - 4].etat != 0) {
        return true
    }
    // si 3 et 4 sont identiques
    if (aRonds[e - 8].etat == aRonds[e - 12].etat && aRonds[e - 8].etat != 0) {
        return true
    }



    // retourne false sinon
    return false;
}

function canMoveTop(e) {
    // si le dernier de la ligne est vide et qu'il y en a un en haut
    if (aRonds[e].etat == 0) {
        if (
            aRonds[e + 4].etat != 0 ||
            aRonds[e + 8].etat != 0 ||
            aRonds[e + 12].etat != 0
        ) {
            return true;
        }
    }
    // si le dernier et 3 sont identiques
    if (aRonds[e].etat == aRonds[e + 4].etat && aRonds[e].etat != 0) {
        return true;
    }
    // si le dernier et 2ieme sont identiques
    // ET que 3 est vide
    if (aRonds[e].etat == aRonds[e + 8].etat && aRonds[e].etat != 0 && aRonds[e + 4].etat == 0) {
        return true;
    }
    // si le dernier et le premier sont identiques 
    // ET que 2 et 3 sont vide
    if (aRonds[e].etat == aRonds[e + 12].etat && aRonds[e].etat != 0 && aRonds[e + 4].etat == 0 && aRonds[e + 8].etat == 0) {
        return true
    }

    // si le 4 est plein et le 2 est vide ou que le 3 est vide
    if (aRonds[e + 12].etat != 0) {
        if (aRonds[e + 4].etat == 0 || aRonds[e + 8].etat == 0) {
            return true;
        }
    }
    // si le 1 est plein et le 3 est vide ou que le 4 est vide
    if (aRonds[e + 8].etat != 0) {
        if (aRonds[e + 4].etat == 0) {
            return true;
        }
    }

    // si 2 et 3 sont identiques
    if (aRonds[e + 4].etat == aRonds[e + 8].etat && aRonds[e + 4].etat != 0) {
        return true
    }
    // si 3 et 4 sont identiques
    if (aRonds[e + 8].etat == aRonds[e + 12].etat && aRonds[e + 8].etat != 0) {
        return true
    }


    // retourne false sinon
    return false;

}

function canMoveLeft(e) {

    // si le dernier de la ligne est vide et qu'il y en a un en haut
    if (aRonds[e].etat == 0) {
        if (
            aRonds[e + 1].etat != 0 ||
            aRonds[e + 2].etat != 0 ||
            aRonds[e + 3].etat != 0
        ) {
            return true;
        }
    }
    // si le dernier et 3 sont identiques
    if (aRonds[e].etat == aRonds[e + 1].etat && aRonds[e].etat != 0) {
        return true;
    }
    // si le dernier et 2ieme sont identiques
    // ET que 3 est vide
    if (aRonds[e].etat == aRonds[e + 2].etat && aRonds[e].etat != 0 && aRonds[e + 1].etat == 0) {
        return true;
    }
    // si le dernier et le premier sont identiques 
    // ET que 2 et 3 sont vide
    if (aRonds[e].etat == aRonds[e + 3].etat && aRonds[e].etat != 0 && aRonds[e + 1].etat == 0 && aRonds[e + 2].etat == 0) {
        return true
    }

    // si le 4 est plein et le 2 est vide ou que le 3 est vide
    if (aRonds[e + 3].etat != 0) {
        if (aRonds[e + 1].etat == 0 || aRonds[e + 2].etat == 0) {
            return true;
        }
    }
    // si le 1 est plein et le 3 est vide ou que le 4 est vide
    if (aRonds[e + 2].etat != 0) {
        if (aRonds[e + 1].etat == 0) {
            return true;
        }
    }

    // si 2 et 3 sont identiques
    if (aRonds[e + 1].etat == aRonds[e + 2].etat && aRonds[e + 1].etat != 0) {
        return true
    }
    // si 3 et 4 sont identiques
    if (aRonds[e + 2].etat == aRonds[e + 3].etat && aRonds[e + 2].etat != 0) {
        return true
    }


    // retourne false sinon
    return false;

}


function canMoveRight(e) {

    // si le dernier de la ligne est vide et qu'il y en a un en haut
    if (aRonds[e].etat == 0) {
        if (
            aRonds[e - 1].etat != 0 ||
            aRonds[e - 2].etat != 0 ||
            aRonds[e - 3].etat != 0
        ) {
            return true;
        }
    }
    // si le dernier et 3 sont identiques
    if (aRonds[e].etat == aRonds[e - 1].etat && aRonds[e].etat != 0) {
        return true;
    }
    // si le dernier et 2ieme sont identiques
    // ET que 3 est vide
    if (aRonds[e].etat == aRonds[e - 2].etat && aRonds[e].etat != 0 && aRonds[e - 1].etat == 0) {
        return true;
    }
    // si le dernier et le premier sont identiques 
    // ET que 2 et 3 sont vide
    if (aRonds[e].etat == aRonds[e - 3].etat && aRonds[e].etat != 0 && aRonds[e - 1].etat == 0 && aRonds[e - 2].etat == 0) {
        return true
    }

    // si le 4 est plein et le 2 est vide ou que le 3 est vide
    if (aRonds[e - 3].etat != 0) {
        if (aRonds[e - 1].etat == 0 || aRonds[e - 2].etat == 0) {
            return true;
        }
    }
    // si le 1 est plein et le 3 est vide ou que le 4 est vide
    if (aRonds[e - 2].etat != 0) {
        if (aRonds[e - 1].etat == 0) {
            return true;
        }
    }

    // si 2 et 3 sont identiques
    if (aRonds[e - 1].etat == aRonds[e - 2].etat && aRonds[e - 1].etat != 0) {
        return true
    }
    // si 3 et 4 sont identiques
    if (aRonds[e - 2].etat == aRonds[e - 3].etat && aRonds[e - 2].etat != 0) {
        return true
    }


    // retourne false sinon
    return false;

}

//encadre les for avec la condition de la valeur du dir (direction)
function verificationsMouvements(dir) {

    if (dir == "down") {
        for (var i = 12; i <= 15; i++) {
            if (canMoveDown(i) == true) {
                return true
            }
        }
        return false
    }

    if (dir == "top") {
        for (var i = 0; i <= 3; i++) {
            if (canMoveTop(i) == true) {
                return true
            }
        }
        return false
    }

    if (dir == "left") {
        for (var i = 0; i <= 12; i += 4) {
            if (canMoveLeft(i) == true) {
                return true
            }
        }
        return false
    }

    if (dir == "right") {
        for (var i = 3; i <= 15; i += 4) {
            if (canMoveRight(i) == true) {
                return true
            }
        }
        return false
    }



}

function launchDown() {

    if (verificationsMouvements("down") == true) {
        for (var i = 8; i <= 11; i++) {
            godown(i)
        }
        alea();
        updateTable();
    }
}

function launchTop() {
    if (verificationsMouvements("top") == true) {
        for (var i = 4; i <= 7; i++) {
            gotop(i)
        }
        alea();
        updateTable();
    }
}

function launchLeft() {
    if (verificationsMouvements("left") == true) {
        for (var i = 1; i <= 13; i += 4) {
            goleft(i)
        }
        alea();
        updateTable();
    }
}

function launchRight() {
    if (verificationsMouvements("right") == true) {
        for (var i = 2; i <= 14; i += 4) {
            goright(i)
        }
        alea();
        updateTable();
    }
}



//********************************************************************
var score = 0;
var tableau = document.createElement("table")
document.body.appendChild(tableau);
tableau.innerHTML = "<tr><td>" +
    aRonds[0].etat + "</td><td>" +
    aRonds[1].etat + "</td><td>" +
    aRonds[2].etat + "</td><td>" +
    aRonds[3].etat + "</td></tr><tr><td>" +
    aRonds[4].etat + "</td><td>" +
    aRonds[5].etat + "</td><td>" +
    aRonds[6].etat + "</td><td>" +
    aRonds[7].etat + "</td></tr><tr><td>" +
    aRonds[8].etat + "</td><td>" +
    aRonds[9].etat + "</td><td>" +
    aRonds[10].etat + "</td><td>" +
    aRonds[11].etat + "</td></tr><tr><td>" +
    aRonds[12].etat + "</td><td>" +
    aRonds[13].etat + "</td><td>" +
    aRonds[14].etat + "</td><td>" +
    aRonds[15].etat + "</td></tr>"

for (var i = 0; i < aRonds.length; i++) {

    if (aRonds[i].etat == 2) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#A9F5A9";
    }
    if (aRonds[i].etat == 4) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#F5D0A9";
    }
    if (aRonds[i].etat == 8) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#8181F7";
    }
    if (aRonds[i].etat == 16) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#58FA58";
    }
    if (aRonds[i].etat == 32) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#DF3A01";
    }
    if (aRonds[i].etat == 64) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#610B5E";
    }
    if (aRonds[i].etat == 128) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#3B0B17";
    }
    if (aRonds[i].etat == 256) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#0B3B0B";
    }
    if (aRonds[i].etat == 512) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#0B4C5F";
    }
    if (aRonds[i].etat == 1024) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#393B0B";
    }
    if (aRonds[i].etat == 2048) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#151515";
    }
    if (aRonds[i].etat == 4096) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#000000";
    }

}



function showTable() {
    console.log(aRonds[0].etat + " " + aRonds[1].etat + " " + aRonds[2].etat + " " + aRonds[3].etat)
    console.log(aRonds[4].etat + " " + aRonds[5].etat + " " + aRonds[6].etat + " " + aRonds[7].etat)
    console.log(aRonds[8].etat + " " + aRonds[9].etat + " " + aRonds[10].etat + " " + aRonds[11].etat)
    console.log(aRonds[12].etat + " " + aRonds[13].etat + " " + aRonds[14].etat + " " + aRonds[15].etat)
}

function updateTable() {
    tableau.innerHTML = "<tr><td>" +
        aRonds[0].etat + "</td><td>" +
        aRonds[1].etat + "</td><td>" +
        aRonds[2].etat + "</td><td>" +
        aRonds[3].etat + "</td></tr><tr><td>" +
        aRonds[4].etat + "</td><td>" +
        aRonds[5].etat + "</td><td>" +
        aRonds[6].etat + "</td><td>" +
        aRonds[7].etat + "</td></tr><tr><td>" +
        aRonds[8].etat + "</td><td>" +
        aRonds[9].etat + "</td><td>" +
        aRonds[10].etat + "</td><td>" +
        aRonds[11].etat + "</td></tr><tr><td>" +
        aRonds[12].etat + "</td><td>" +
        aRonds[13].etat + "</td><td>" +
        aRonds[14].etat + "</td><td>" +
        aRonds[15].etat + "</td></tr>"
    document.getElementById("score").innerHTML = score;

    //section couleurs temporaire

    for (var i = 0; i < aRonds.length; i++) {

        if (aRonds[i].etat == 2) {
            document.getElementsByTagName("td")[i].style.backgroundColor = "#A9F5A9";
        }
        if (aRonds[i].etat == 4) {
            document.getElementsByTagName("td")[i].style.backgroundColor = "#F5D0A9";
        }
        if (aRonds[i].etat == 8) {
            document.getElementsByTagName("td")[i].style.backgroundColor = "#8181F7";
        }
        if (aRonds[i].etat == 16) {
            document.getElementsByTagName("td")[i].style.backgroundColor = "#58FA58";
        }
        if (aRonds[i].etat == 32) {
            document.getElementsByTagName("td")[i].style.backgroundColor = "#DF3A01";
        }
        if (aRonds[i].etat == 64) {
            document.getElementsByTagName("td")[i].style.backgroundColor = "#610B5E";
        }
        if (aRonds[i].etat == 128) {
            document.getElementsByTagName("td")[i].style.backgroundColor = "#3B0B17";
        }
        if (aRonds[i].etat == 256) {
            document.getElementsByTagName("td")[i].style.backgroundColor = "#0B3B0B";
        }
        if (aRonds[i].etat == 512) {
            document.getElementsByTagName("td")[i].style.backgroundColor = "#0B4C5F";
        }
        if (aRonds[i].etat == 1024) {
            document.getElementsByTagName("td")[i].style.backgroundColor = "#393B0B";
        }
        if (aRonds[i].etat == 2048) {
            document.getElementsByTagName("td")[i].style.backgroundColor = "#151515";
        }
        if (aRonds[i].etat == 4096) {
            document.getElementsByTagName("td")[i].style.backgroundColor = "#000000";
        }

    }


}

showTable();

document.addEventListener("keydown", function left(event) {

    if (event.keyCode == 87 || event.keyCode == 38) {
        launchTop();
    }

    if (event.keyCode == 83 || event.keyCode == 40) {
        launchDown();
    }

    if (event.keyCode == 68 || event.keyCode == 39) {
        launchRight();
    }

    if (event.keyCode == 65 || event.keyCode == 37) {
        launchLeft();
    }
})



//*********************************************************************
