
function bld() {
    var a = document.getElementById("textarea");
    if (a.style.fontWeight != "bold") { a.style.fontWeight = "bold"; }
    else { a.style.fontWeight = "normal"; }
}

function itlic() {
    var a = document.getElementById("textarea") ;
    if (a.style.fontStyle != "italic") { a.style.fontStyle = "italic"; }
    else { a.style.fontStyle = "normal"; }
}
function undrline() {
    var a = document.getElementById("textarea") ;
    if (a.style.textDecoration == "underline") { a.style.textDecoration = "none"; }
    else { a.style.textDecoration = "underline"; }
}

function fntes() {
    var a = document.getElementById("textarea") ;
    var b=document.getElementById("fontss").value;

    a.style.fontSize = b;
}
function fontf() {
    var a = document.getElementById("textarea");
    var b=document.getElementById("fontff").value;
    a.style.fontFamily = b;
}
