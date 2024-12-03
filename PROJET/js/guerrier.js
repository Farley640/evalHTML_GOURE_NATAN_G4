class Guerrier {
    constructor(name, attack, pv) {
        this.name=name
        this.attack=attack;
        this.pv = pv;
    }


    getAttack(defendeur){
        console.log(this.name, "entre en combat avec ", defendeur.name)
        defendeur.pv = defendeur.pv - this.attack
        console.log("ooch, ", defendeur.name, "à maintenant", defendeur.pv, "points de vie.")
    }
}

let warior1 = new Guerrier("Galahad", 3, 20);
let warior2 = new Guerrier("Poppy", 5, 10);

console.log("Les deux Wariors sont", warior1.name, "et", warior2.name )


function combat(warior1, warior2){
    while(warior1.pv > 0 && warior2.pv > 0) {
        warior1.getAttack(warior2);
        if ( warior2.pv <= 0 ) {
            console.log(warior2.name, "à canné devant l'autre");
            return warior1.name; }

        warior2.getAttack(warior1);
        if (warior1.pv <= 0) {
            console.log(warior1.name, "à été reduit en cendres par", warior2.name);
            return warior2.name;
         }
        
    }

}

combat(warior1, warior2);