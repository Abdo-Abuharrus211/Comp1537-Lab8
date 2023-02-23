
function compute(operation) {
    console.log(operation + " button clicked")
    op1 = parseInt($("#first-operand").val());
    op2 = parseInt($("#second-operand").val());
    switch (operation) {

        case "add":
            console.log(op1 + op2)
            $("#result").text(`Result is ${op1 + op2}`);
            break;

        case "sub":
            console.log(op1 - op2)
            $("#result").text(`Result is ${op1 + op2}`);
            break;

        case "multi":
            console.log(op1 * op2)
            $("#result").text(`Result is ${op1 + op2}`);
            break;

        case "divide":
            console.log(op1 / op2)
            $("#result").text(`Result is ${op1 + op2}`);
            break;

        case "power":
            console.log(op1 ** op2)
            $("#result").text(`Result is ${op1 + op2}`);
            break;

        default:
            result = "NaN";

    }
}


const setup = () => {
    $("button").click(function () {
        compute(this.id);
    });
}


$(document).ready(setup);