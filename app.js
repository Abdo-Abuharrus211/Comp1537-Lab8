
function compute(operation) {
    console.log(operation + " button clicked")
    op1 = parseInt($("#first-operand").val());
    op2 = parseInt($("#second-operand").val());
    switch (operation) {

        case "add":
            console.log(op1 + op2)
            $("#result").text(`Result of ${op1} + ${op2} = ${op1 + op2}`);
            break;

        case "sub":
            console.log(op1 - op2)
            $("#result").text(`Result of ${op1} - ${op2} = ${op1 - op2}`);
            break;

        case "multi":
            console.log(op1 * op2)
            $("#result").text(`Result of ${op1} * ${op2} = ${op1 * op2}`);
            break;

        case "divide":
            console.log(op1 / op2)
            $("#result").text(`Result of ${op1} / ${op2} = ${op1 / op2}`);
            break;

        case "power":
            console.log(op1 ** op2)
            $("#result").text(`Result of ${op1} to the power ${op2} = ${op1 ** op2}`);
            break;

        default:
            result = "NaN";

    }
    $("#history").append(`<div class="${operation}">${$("#result").text()}
    <button class="remove-btn">Hide</button>
    </div>`)
}


const setup = () => {
    $("button").click(function () {
        compute(this.id);
    });

    $("body").on("click", ".remove-btn", function() {
        $(this).parent().remove()
    });
}



$(document).ready(setup);