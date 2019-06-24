
var names = "Bobby Craig, Dillon Gorden, Mark Kroh"

function compare(nameOne,nameTwo) {
 
    var nOne = nameOne.split(" ");
    var nTwo = nameTwo.split(" ");
   
    var nOneLast = nOne[nOne.length - 1];
    var nTwoLast = nTwo[nTwo.length - 1];
   

    if (nOneLast < nTwoLast) return -1;
    if (nOneLast > nTwoLast) return 1;
  }  

var namesSplit = names.split(", ");
   

namesSplit.sort(compare);
   

console.log(namesSplit);



// function getValue(id) {
//   return document.getElementById(id).value;
// };

// function addLi() {
//   var name = getValue('name')
//   console.log(name)
//   return false;
// }

