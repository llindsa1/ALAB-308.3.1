/*Part 1:

for (let i=1; i<=100; i++) {
    if (i%3 === 0 && i%5===0){
        console.log ("fizz buzz");

    } else if (i%3===0) {
        console.log ("fizz");

    } else if (i%5===0) {
        console.log("buzz");
    
    } else {
        console.log(i);
    }
} 
*/

// Part 3: Feeling Loopy


/*ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26 */

let string =' ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26 '


let cell = ' ';

for (let i in string){
switch (string [i]){
    case ',':
        row = row + cell + '';
        cell = ``;
        break;
        case '/n':
            row+=cell
            cell = ``;
            console.log(row);
            row = ``;
            break;
            default: 
            cell += string[i];
            break;
}

if (i == string.length - 1) {
    row += cell
    console.log(row)
}

}
