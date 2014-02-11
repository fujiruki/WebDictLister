weblioFormat = "http://ejje.weblio.jp/content/";
function splitWords(text)
{
    var str;
    str = text.split("\n");

    return str;
}

function MakeLinks(words, listbox)
{
    listbox.innerHTML = "";

    words = words.split("\n");
    var last = 0;
    for (i=0; i<words.length; i++)
    {
        words[last] = words[i].replace(/(^ )|( $)|("\t")/g,"");
        //alert("*"+words[last]+"*");
        if (words[last] == "" || words[last] == false) {
        } else {
            last ++;
        }
    }

    wordList = words.slice(0, last);

    var html = "";
    for (i=0; i<wordList.length; i++)
    {
        var word = wordList[i];
        var link = weblioFormat+word.replace(" ","+");
        html += "<li>"
            +'<a href="'+link+'" target="frame-weblio">'
            +word
            +"</a></li>\n";
    }
    listbox.innerHTML = html;

    return
}

