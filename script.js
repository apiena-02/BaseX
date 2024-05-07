function convertBase() {
    // Get the selected conversion from and to bases, and the input number
    var fromBase = document.getElementById("selectFrom").value;
    var toBase = document.getElementById("selectTo").value;
    var inputNumber = document.getElementById("inputNumber").value;
    
    // Variable to hold the result of conversion
    var result; 
   
    // Flag to check if the input is valid
    var isValid = true; 
    
    // Check validity of input number based on the selected base
    for (var i = 0; i < inputNumber.length; i++) {
        if (fromBase == "Binary" && (inputNumber[i] != '0' && inputNumber[i] != '1')) {
            isValid = false;
        } 
        else if (fromBase == "Octal" && !(inputNumber[i] >= '0' && inputNumber[i] <= '7')) {
            isValid = false;
        } 
        else if (fromBase == "Hexadecimal" && !((inputNumber[i] >= '0' && inputNumber[i] <= '9') || (inputNumber[i].toLowerCase() >= 'a' && inputNumber[i].toLowerCase() <= 'f'))) {
            isValid = false;
        } 
        else if (fromBase == "Decimal" && !(inputNumber[i] >= '0' && inputNumber[i] <= '9')) {
            isValid = false;
        }
    }

    // If input is not valid, set result as "Invalid Input"
    if (!isValid) {
        result = "Invalid Input";
    } 
    // If from and to bases are the same, no conversion needed
    else if (fromBase == toBase) {
        result = inputNumber;
    } 
    // Conversion from binary
    else if (fromBase == "Binary" && toBase == "Decimal") { 
        result = parseInt(inputNumber, 2);
    } 
    else if (fromBase == "Binary" && toBase == "Octal") { 
        result = Number(parseInt(inputNumber, 2)).toString(8);
    } 
    else if (fromBase == "Binary" && toBase == "Hexadecimal") { 
        result = Number(parseInt(inputNumber, 2)).toString(16);
    } 

    // Conversion from hexadecimal
    else if (fromBase == "Hexadecimal" && toBase == "Decimal") { 
        result = parseInt(inputNumber, 16);
    } 
    else if (fromBase == "Hexadecimal" && toBase == "Binary") { 
        result = Number(parseInt(inputNumber, 16)).toString(2);
    } 
    else if (fromBase == "Hexadecimal" && toBase == "Octal") { 
        result = Number(parseInt(inputNumber, 16)).toString(8);
    } 

    // Conversion from octal
    else if (fromBase == "Octal" && toBase == "Decimal") { 
        result = parseInt(inputNumber, 8);
    } 
    else if (fromBase == "Octal" && toBase == "Binary") { 
        result = Number(parseInt(inputNumber, 8)).toString(2);
    } 
    else if (fromBase == "Octal" && toBase == "Hexadecimal") { 
        result = Number(parseInt(inputNumber, 8)).toString(16);
    } 

    // Conversion from decimal
    else if (fromBase == "Decimal" && toBase == "Binary") { 
        result = Number(inputNumber).toString(2);
    } 
    else if (fromBase == "Decimal" && toBase == "Octal") { 
        result = Number(inputNumber).toString(8);
    } 
    else if (fromBase == "Decimal" && toBase == "Hexadecimal") { 
        result = Number(inputNumber).toString(16);
    } 

    // Invalid selection of bases or input
    else {
        result = "Invalid Selectors or Input";
    }

    // Display the result
    document.getElementById("resultText").innerHTML = result;
}
