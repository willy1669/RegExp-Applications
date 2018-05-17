    var text = 'Visit http://genesystechhub.com for more information about Genesys';
    var check = text.replace(/((http|https|ftp|ftps)\:\/\/\w*\.\w*\.\w{2,3})/ig,'<a href="$1">$1<\a>'); //matches and  replaces the link in the text
    console.log(check);                                                                                 //outputs the link