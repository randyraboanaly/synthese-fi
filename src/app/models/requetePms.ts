export class ElementRequete {
    lien!: string;
    requete!: string;
}

export class RequetePms {
    theme!: string;
    elementsRequete!: ElementRequete[];
    selectedElement!: ElementRequete;
}
