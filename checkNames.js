let text = `During today's presentation "Valentine Oragbakosi" presented first followed by "Nwosu Ifeoma Lucia" and then "Ibe Agwu" after which "Chinonso Williams Junior", "Ndife Uchenna", "Ehiogu Chika Josephine" and finally "Chidera Jennifer". "Ebuka " will be presenting tomorrow.`
function checkNames(names){
var check = text.match(/"\w+\s*\w*\s*\w*\w*/gi);  //matches all names in the text
var checks = [];                                  //accepts 
                                                 
check.forEach(element =>{                        //iterates through every character in check
    var elem = element.replace(/"/,'');          //replaces the character " with ''
    checks.push(elem);                           //passes all character to checks

}
)
  console.log(checks);                         //prints out the output
}
checkNames(text);