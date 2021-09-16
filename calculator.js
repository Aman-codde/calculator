const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');
const add_button = document.querySelector('#add');
const clear_button = document.querySelector('#clear');
const equal_button = document.querySelector('#equal');

    number_arr = [];
    current_number = 0;
    previous_number = 0;
    sum = 0;
    subtract = 0;
    multiply = 0;
    divide = 0;
    input.value = current_number;
    operator1 = 0;
    operator2 = 0;
    operand = '';

    buttons.forEach((button,index)=> {
        if(index<10) {
            button.addEventListener('click', function() {
                addToArray(button.value);
            })
        }
        
    })    


    // Add button
    add_button.addEventListener('click', function() {
        //console.log("Button clicked "+buttons[3].value);
        operand = '+';

        current_number = NumString();
        console.log("previous number : "+ previous_number);
        console.log("current number : "+ current_number);
        number_arr = [];// empty the array

        operator1 = previous_number;
        operator2 = current_number;

        sum = previous_number + current_number;
        console.log("Sum: " +sum);
        input.value = sum;
        previous_number = sum;
    })

    // Equal button
    equal_button.addEventListener('click', function() {
        console.log("operator 1: "+ operator1);
        console.log("operator 2: "+operator2);
        console.log("operand: "+operand);
        console.log("previous number : "+ previous_number);
        console.log("current number : "+ current_number);
        if(operand === '+')
        {
            operation = operator1 + operator2;
            console.log("Answer: "+operation);
        }
            
        input.value = operation;
        previous_number = operation;
    })

    // Subtract button
    /*buttons[11].addEventListener('click', function() {
        //console.log("Button clicked "+buttons[11].value);
        current_number = NumString();
        console.log("previous number : "+ previous_number);
        console.log("current number : "+ current_number);
        number_arr = [];// empty the array

        subtract = previous_number - current_number;
        console.log("Subtract: " + subtract);
        input.value = sum;
        previous_number = sum;
    })*/


    // Clear button to clear input and array
    clear_button.addEventListener('click', function() {
        input.value = '';
        number_arr = [];// array is empty
        current_number = previous_number = 0;
        //console.log(number_arr);
    })

    function NumString() {
        first_num = 0;
        number_arr.forEach((number) => {
            first_num += number;
        })
        first_num = Number(first_num); // string to number conversion.
        //console.log("Numbers clicked "+first_num);
        return first_num;
    }

    function addToArray(value) {
        number_arr.push(value);
            input.value = NumString();
    }

