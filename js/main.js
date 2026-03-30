function annaNimi() {
const nimet = []
text = ""
let length = nimet.length;
while (length != 10) {
let person = prompt("anna nimi")
nimet.push(person)
length = nimet.length
if (person == "" || person == null) {
    return
}
else {
    text += length + ". " + person + "<br>";
}

}
document.getElementById("lista").innerHTML = text;
}

