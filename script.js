
function fullname(){

    let firstname
    let lastname

    firstname = prompt("give me you're first name  ")
    // the prompt is a the way we write our text in a box
    lastname = prompt("give me you're last name  ")

    // the alert is the way we can show the prompt text we write

    alert("you're full name is " + firstname + " " + lastname )

}

// The is the execution of the function

function compariason(){

    let num1  = Number(prompt("give me you're first number  "))

    let numb2 = num1%2

    if (numb2 === 0){
        alert("the number" + num1 + " is even"  )
    }
    else {
        alert(" the number " + num1 + " is not even"  )
    }


}

function year() {

    let year = Number(prompt("write the month number !"))

    if(year>=1 && year<=12){
        if (year===2){
            alert("the month number is 29 days")
        }
        else if( year=== 4 || year=== 6 || year === 9 || year===11){
            alert("the month number is 30 days")

        }
        else{
            alert("the month number is 31 days")
        }
    }
    else {
        alert("wrong month number")
    }
}