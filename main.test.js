findLoutre = require("./findLoutre");


describe("Changement", () => {
    test("contient loutre", () => {
        expect(findLoutre.hasLoutre("coucou ?")).toBe(false);
        expect(findLoutre.hasLoutre(("j'aime les loutres"))).toBe(true);
        expect(findLoutre.hasLoutre(("la loutre est une espèce protégée"))).toBe(true);
    });
    test("text message", () => {
        expect(findLoutre.response('loutrement bon')).toBe("Merci pour votre participation !");
        expect(findLoutre.response('les loutres')).toBe("Merci pour votre participation !");
        expect(findLoutre.response('pas de Loutre')).toBe("Merci pour votre participation !");
        expect(findLoutre.response('coucou')).toBe("Vous ne comprenez rien !");
        expect(findLoutre.response('')).toBe("Envoyez nous un message sur les loutres !");

    });
    test("instructions", () => {
        expect(findLoutre.instruction('', 0)).toBe("Envoyez nous un message sur les loutres !");
        expect(findLoutre.instruction('', 1)).toBe("Hey ! Réveille-toi on a dit : Envoyez nous un message sur les" +
            " loutres !");
        expect(findLoutre.instruction('coucou', 0)).toBe("ENVOYEZ NOUS UN MESSAGE SUR LES LOUTRES ON A DIT !!!");
        expect(findLoutre.instruction('coucou', 1)).toBe("ENVOYEZ NOUS UN MESSAGE SUR LES LOUTRES ON A DIT !!! NON MAIS" +
            " OH !!!");
        expect(findLoutre.instruction('loutre', 1)).toBe("(Wow ... il a compris ...) Envoyez nous un message sur les loutres" +
            " !");
        expect(findLoutre.instruction('loutre', 0)).toBe("Envoyez nous un message sur les loutres !");
    });
});

