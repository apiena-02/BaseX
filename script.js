function myFunction() {
    var x = document.getElementById("selectFrom").value;
    var y = document.getElementById("selectTo").value;
    var num = document.getElementById("number").value;
    var ans;
    var tempe;
    var isValid = true;

    for (var i = 0; i < num.length; i++) {
        if (x == "Binary" && (num[i] != '0' && num[i] != '1')) {
            isValid = false;
        } else if (x == "Octal" && !(num[i] >= '0' && num[i] <= '7')) {
            isValid = false;
        } else if (x == "Hexadecimal" && !((num[i] >= '0' && num[i] <= '9') || (num[i].toLowerCase() >= 'a' && num[i].toLowerCase() <= 'f'))) {
            isValid = false;
        } else if (x == "Decimal" && !(num[i] >= '0' && num[i] <= '9')) {
            isValid = false;
        }
    }

    if (!isValid) {
        ans = "Invalid Input";
    } 
    
    else if (x == y) {
        ans = num;
    } 
    // Binary Conversion
    else if (x == "Binary" && y == "Decimal") {
        ans = parseInt(num, 2);
    } 
    
    else if (x == "Binary" && y == "Octal") {
        tempe = parseInt(num, 2);
        ans = Number(tempe).toString(8);
    } 
    
    else if (x == "Binary" && y == "Hexadecimal") {
        tempe = parseInt(num, 2);
        ans = Number(tempe).toString(16);
    }
    // Hexadecimal Conversion
    else if (x == "Hexadecimal" && y == "Decimal") {
        ans = parseInt(num, 16);
    } 
     
    else if (x == "Hexadecimal" && y == "Binary") {
        tempe = parseInt(num, 16);
        ans = Number(tempe).toString(2);
    } 
    
    else if (x == "Hexadecimal" && y == "Octal") {
        tempe = parseInt(num, 16);
        ans = Number(tempe).toString(8);
    } 
    // Octal Conversion
    else if (x == "Octal" && y == "Decimal") {
        ans = parseInt(num, 8);
    } 
    
    else if (x == "Octal" && y == "Binary") {
        tempe = parseInt(num, 8);
        ans = Number(tempe).toString(2);
    } 
    
    else if (x == "Octal" && y == "Hexadecimal") {
        tempe = parseInt(num, 8);
        ans = Number(tempe).toString(16);
    }
    // Decimal Conversion
    else if (x == "Decimal" && y == "Binary") {
        ans = Number(num).toString(2);
    } 
    
    else if (x == "Decimal" && y == "Octal") {
        ans = Number(num).toString(8);
    } 
    
    else if (x == "Decimal" && y == "Hexadecimal") {
        ans = Number(num).toString(16);
    } 
    else {
        ans = "Invalid Selectors or Input"
    }

    document.getElementById("test").innerHTML = ans;
}
