function calculateBMI() {
    var weightInput = parseFloat(document.getElementById("weight").value);
    var heightInput = parseFloat(document.getElementById("height").value);
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Menghapus pesan error sebelumnya
  
    // Validasi input
    if (isNaN(weightInput) || isNaN(heightInput) || weightInput <= 0 || heightInput <= 0) {
      displayError("Invalid weight or height input. Please enter valid numeric values.");
      return;
    }
  
    // Mengkonversi tinggi dari cm ke meter
    var heightInMeters = heightInput / 100;
  
    // Hitung BMI
    var bmi = weightInput / (heightInMeters * heightInMeters);
    bmi = roundToDecimal(bmi, 2);
  
    // Tampilkan hasil
    var message = "Your BMI is: " + bmi + " - ";
    if (bmi < 18.5) {
      message += "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      message += "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      message += "Overweight";
    } else {
      message += "Obese";
    }
    resultDiv.innerHTML = message;
  }
  
  // Pembulatan angka desimal
  function roundToDecimal(number, decimalPlaces) {
    return Number(number.toFixed(decimalPlaces));
  }
  
  // Menampilkan pesan error
  function displayError(message) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Error: " + message;
  }
  