function getPin() {
  const randomNo = Math.round(Math.random() * 10000);
  const randomString = randomNo + "";
  const generateField = document.getElementById("generate-field");
  if (randomString.length === 4) {
    generateField.value = randomString;
  } else {
    getPin();
  }
}

document.getElementById("generate-pin").addEventListener("click", function () {
  //   const randomNo = Math.round(Math.random() * 10000);
  //   console.log(randomNo);
  getPin();
});

document.getElementById("numbers").addEventListener("click", function (event) {
  const pinField = document.getElementById("pin-field");
  const numbers = event.target.innerText;
  const typedNumbers = pinField.value;
  if (!isNaN(numbers)) {
    const newNumber = pinField.value + numbers;
    pinField.value = newNumber;
  } else if (numbers === "C") {
    pinField.value = "";
  } else if (numbers === "<") {
    const NewNumbers = typedNumbers.split("");
    NewNumbers.pop();
    const remainingNumbers = NewNumbers.join('');
    pinField.value = remainingNumbers;
  }
});
document.getElementById("verify-btn").addEventListener("click", function () {
  const pinField = document.getElementById("pin-field");
  const pinValue = parseFloat(pinField.value);
  const generateField = document.getElementById("generate-field");
  const generateValue = parseFloat(generateField.value);

  if (generateValue === pinValue) {
    document.getElementById("btn-02").style.display = "block";
    document.getElementById("btn-01").style.display = "none";
  } else {
    document.getElementById("btn-01").style.display = "block";
    document.getElementById("btn-02").style.display = "none";
  }
});
