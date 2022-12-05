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