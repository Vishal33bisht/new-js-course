const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Please give a valid height: ${height}`;
    }

    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please give a valid weight: ${weight}`;
    }

    const bmi = (weight / ((height/100) ** 2)).toFixed(2);

    result.innerHTML = `${bmi}`;
});
