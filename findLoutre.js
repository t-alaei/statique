function hasLoutre(message) {
    //var sing = message.includes("loutre");
    //var plur = message.includes("loutres");
    //return (sing) || (plur)
    return message.includes("loutre") || message.includes("Loutre") || message.includes("loutres") || message.includes("Loutres")
}

function response(message) {
    var has = hasLoutre(message);
    if (has) {
        return "Merci pour votre participation !"
    } else {
        if (message == "") {
            return "Envoyez nous un message sur les loutres !"
        } else {
            return "Vous ne comprenez rien !"
        }
    }
}


function instruction(message, lastResp){
    var has = hasLoutre(message);
    console.log(lastResp);
    if ((lastResp == 1) && (has)) {
        return "(Wow ... il a compris ...) Envoyez nous un message sur les loutres !"
    } else if ((lastResp == 1) && (message == "")){
        console.log('ici');
        return "Hey ! Réveille-toi on a dit : Envoyez nous un message sur les loutres !"
    } else if ((lastResp == 0) && (!has) && (message != "")) {
        return "ENVOYEZ NOUS UN MESSAGE SUR LES LOUTRES ON A DIT !!!"
    } else if ((lastResp == 1) && (!has) && (message != "")) {
        return "ENVOYEZ NOUS UN MESSAGE SUR LES LOUTRES ON A DIT !!! NON MAIS OH !!!"
    } else {
        return "Envoyez nous un message sur les loutres !"
    }
}

function newResponse (message, lastNB){
    var has = hasLoutre(message);
    if (has){
        return 0
    } else {
        return 1
    }
}


//function instruction

module.exports = {
    hasLoutre: hasLoutre,
    response: response,
    newResponse: newResponse,
    instruction: instruction,
}