const characterSummary = document.getElementById("character-summary");
const formFields = document.querySelectorAll("form input, form select");

for (const field of formFields) {
    field.addEventListener("change", () => {
        const name = document.getElementById("name").value;
        const classes = document.getElementById("class").value;
        const race = document.getElementById("race").value;
        const alignment = document.getElementById("alignment").value;

        characterSummary.innerHTML = `
      <p>Name: ${name}</p>
      <p>Class: ${classes}</p>
      <p>Race: ${race}</p>
      <p>Alignment: ${alignment}</p>
    `;
    });
}

function rollDice() {
    // Calculate the character's attributes based on random numbers between 6 and 18
    let strength = Math.floor(Math.random() * 13) + 6;
    let dexterity = Math.floor(Math.random() * 13) + 6;
    let constitution = Math.floor(Math.random() * 13) + 6;
    let intelligence = Math.floor(Math.random() * 13) + 6;
    let wisdom = Math.floor(Math.random() * 13) + 6;
    let charisma = Math.floor(Math.random() * 13) + 6;


    // Display the character's attributes
    let attributesDiv = document.getElementById("attributes");
    attributesDiv.innerHTML = "Strength: " + strength + "<br>" +
        "Dexterity: " + dexterity + "<br>" +
        "Constitution: " + constitution + "<br>" +
        "Intelligence: " + intelligence + "<br>" +
        "Wisdom: " + wisdom + "<br>" +
        "Charisma: " + charisma;
}





