function calculateCalories() {
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value, 10);
    const height = parseInt(document.getElementById("height").value, 10);
    const weight = parseFloat(document.getElementById("weight").value);

    let result;

    if (gender === "male") {
        result = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else if (gender === "female") {
        result = 655 + (9.46 * weight) + (1.85 * height) - (4.7 * age);
    } else {
        result = "błąd";
    }

    document.getElementById("result").textContent = `${result} kcal`;
}
