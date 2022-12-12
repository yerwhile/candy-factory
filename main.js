const buyChocolate = () => {
    const chocolate = {
        type: "Milk Chocolate"
    }

    return chocolate;
}

chocolatePiece = buyChocolate();

const addFlavoring = (obj) => {
    obj.flavor = "Mint";
}

const makeBarkMixture = (obj) => {
    if(obj.flavor === "Mint") {
        obj.mixed = true;
    }
    else{
        obj.mixed = false;
    }
}

const bakeCandy = (obj) => {
    if(obj.mixed === true) {
        obj.baked = true;
    }
    else {
        obj.baked = false;
    }
}

const breakBark = (obj) => {
    if(obj.baked === true) {
        const arrChoco = [];
        while(arrChoco.length <= 6) {
            arrChoco.push("Mint Chocolate Bark Piece");
        }
        return arrChoco;
    }
}

chocolatePiece = buyChocolate()
addFlavoring(chocolatePiece);
makeBarkMixture(chocolatePiece);
bakeCandy(chocolatePiece);
let finishedChocolate = breakBark(chocolatePiece);
console.log(finishedChocolate);

//["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"];