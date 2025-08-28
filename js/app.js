console.log("App: Script principal cargado.");

document.getElementById("reset").addEventListener("click", ()=>{
    const resultParagraph = document.getElementById("result");
    resultParagraph.hidden = true;
    const responseImage = document.getElementById("responseImage");
    responseImage.hidden = true;

    document.getElementById("reset").hidden = true;
})

document.getElementById("calculate").addEventListener("click", () => {
    try {
        const { num1, num2, operation } = getInputValues();
        validateInputs(num1, num2);
        let result;
        switch (operation) {
            case "add":
                result = add(num1, num2);
                break;
            case "subtract":
                result = subtract(num1, num2);
                break;
            case "multiply":
                result = multiply(num1, num2);
                break;
            case "divide":
                result = divide(num1, num2);
                break;
            default:
                throw new Error("Operación no válida.");
        }

        updateResult(`Resultado: ${result}`);
        const responseImage = document.getElementById("responseImage");
        responseImage.hidden = false;
        responseImage.src = "./images/happy_noob.jpeg"
    } catch (error) {
        const responseImage = document.getElementById("responseImage");
        responseImage.hidden = false;
        responseImage.src = "./images/baller.jpg"
        updateResult(`Error: ${error.message}`);
    }
});