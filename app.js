var percentage = prompt("Enter Your Percentage?")

if (percentage >=80 && percentage <=100) {
    alert ('You got A Grade')
}
else if (percentage >=70 && percentage <=80) {
    alert ('You got B Grade')
}
else if (percentage >=60 && percentage <=70) {
    alert ('You got C Grade')
}
else if (percentage >=50 && percentage <=60) {
    alert ('You got D Grade')
}
else if (percentage <50 && percentage >=40) {
    alert ('You are Fail !!')
}
else{
    alert ('Invalid Number')
}