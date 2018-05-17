var text = " #eac344 jcfbjkb #234561 "
function checkHtmlcolors(check){

 console.log(check.match(/#[a-f0-9]{3,8}/ig));
};
checkHtmlcolors(text);

