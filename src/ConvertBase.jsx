import { useState, useEffect } from 'react';

function ConvertBase(){

    const [baseFrom, setBaseFrom] = useState("From");
    const [num, setNum] = useState("");
    const [baseTo, setBaseTo] = useState("To");
    const [result, setResult] = useState("");
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.body.className = darkMode ? "dark-mode" : "light-mode";
    }, [darkMode]);
    
    const handleChangeFrom = (event) => {
        setBaseFrom(event.target.value)
    }

    const handleChangeTo = (event) => {
        setBaseTo(event.target.value)
    }

    function convertNum() {

        // Flag to check if the input is valid
        let isValid = true;

        // Check validity of input number based on the selected base
        for (let i = 0; i < num.length; i++) {
            if (baseFrom == "Binary" && (num[i] != '0' && num[i] != '1')) {
                isValid = false;
            } 
            else if (baseFrom == "Octal" && !(num[i] >= '0' && num[i] <= '7')) {
                isValid = false;
            } 
            else if (baseFrom == "Hexadecimal" && !((num[i] >= '0' && num[i] <= '9') || (num[i].toLowerCase() >= 'a' && num[i].toLowerCase() <= 'f'))) {
                isValid = false;
            } 
            else if (baseFrom == "Decimal" && !(num[i] >= '0' && num[i] <= '9')) {
                isValid = false;
            }
        }

        if (!isValid) {
            setResult("Invalid Input");
        } 
        // If from and to bases are the same, no conversion needed
        else if (baseFrom == baseTo) {
            setResult(num);
        } 
        // Conversion from binary
        else if (baseFrom == "Binary" && baseTo == "Decimal") { 
            setResult(parseInt(num, 2));
        } 
        else if (baseFrom == "Binary" && baseTo == "Octal") { 
            setResult( Number(parseInt(num, 2)).toString(8));
        } 
        else if (baseFrom == "Binary" && baseTo == "Hexadecimal") { 
            setResult(Number(parseInt(num, 2)).toString(16));
        } 
    
        // Conversion from hexadecimal
        else if (baseFrom == "Hexadecimal" && baseTo == "Decimal") { 
            setResult(parseInt(num, 16));
        } 
        else if (baseFrom == "Hexadecimal" && baseTo == "Binary") { 
            setResult(Number(parseInt(num, 16)).toString(2));
        } 
        else if (baseFrom == "Hexadecimal" && baseTo == "Octal") { 
            setResult( Number(parseInt(num, 16)).toString(8));
        } 
    
        // Conversion from octal
        else if (baseFrom == "Octal" && baseTo == "Decimal") { 
            setResult(parseInt(num, 8));
        } 
        else if (baseFrom == "Octal" && baseTo == "Binary") { 
            setResult(Number(parseInt(num, 8)).toString(2));
        } 
        else if (baseFrom == "Octal" && baseTo == "Hexadecimal") { 
            setResult(Number(parseInt(num, 8)).toString(16));
        } 
    
        // Conversion from decimal
        else if (baseFrom == "Decimal" && baseTo == "Binary") { 
            setResult(Number(num).toString(2));
        } 
        else if (baseFrom == "Decimal" && baseTo == "Octal") { 
            setResult(Number(num).toString(8));
        } 
        else if (baseFrom == "Decimal" && baseTo == "Hexadecimal") { 
            setResult(Number(num).toString(16));
        } 
    
        // Invalid input or selection of bases
        else {
            setResult("Invalid Selectors or Input");
        }



    };

    const toggleTheme = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            document.body.className = newMode ? "dark-mode" : "light-mode"; // Update body class
            return newMode;
        });
    };
    
    return(
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <header>
                <h1>BaseX</h1>
            </header>
            <div className="toggle-container">
                <label className="toggle-switch">
                <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
                <span className="slider"></span>
                </label>
                <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
            </div>
            <div class="input-container">
                <select value={baseFrom} onChange={handleChangeFrom}>
                    <option disabled selected>From</option>
                    <option>Binary</option>
                    <option>Decimal</option>
                    <option>Hexadecimal</option>
                    <option>Octal</option>
                </select>

                <input type="text" placeholder="Enter number here" onChange={(e) => setNum(e.target.value)}/>

                <select value={baseTo} onChange={handleChangeTo}>
                    <option disabled selected>To</option>
                    <option>Binary</option>
                    <option>Decimal</option>
                    <option>Hexadecimal</option>
                    <option>Octal</option>
                </select>
                <button onClick={convertNum}>CONVERT</button>
            </div>
            <div class="result-container"> 
                <p>{result}</p>
            </div>
        </div>
        
    );
}

export default ConvertBase