function annaNimi() {
const nimet = []
text = ""
let length = nimet.length;
while (length != 10) {
let person = prompt("anna nimi")
nimet.push(person)
if (person == "" || person == null) {
    return
}
else {
    text += length + ". " + person + "/n";
}
length = nimet.length
}
document.getElementById("lista").innerHTML = text;
}