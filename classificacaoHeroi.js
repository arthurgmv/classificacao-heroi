const hero = {
    name: "Goku",
    level: 50,
};

const Superman = Object.create(hero);
Superman.name = "Superman";
Superman.level = 50;

const Spiderman = Object.create(hero);
Spiderman.name = "Spiderman";
Spiderman.level = 40;

const Batman = Object.create(hero);
Batman.name = "Batman";
Batman.level = 45;

function calculateRanking(character) {
    if (character.level < 50 && character.level > 40) {
        character.ranking = "Silver";
    } else if (character.level <= 40) {
        character.ranking = "Bronze";
    } else {
        character.ranking = "Gold";
    }
}

calculateRanking(Superman);
calculateRanking(Spiderman);
calculateRanking(Batman);

console.log(`Ranking é: Superman: ${Superman.ranking}, Batman: ${Batman.ranking} e Spiderman: ${Spiderman.ranking}`);
