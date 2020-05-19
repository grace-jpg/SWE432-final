function alertFunc() {
    alert("You clicked submit!");
}

function showCollabSumm() {
    document.getElementById("summary").innerHTML =
        document.getElementById("summary").innerHTML + "Grace created the criteria for reviewing Elkay water fountains and choices that reviewers can pick from. She also found online resources for examples of BOM/DOM scripts. Ramon typed the HTML code and used examples given online and from class to create the webpage."
}
function removeCollabSumm() {
    document.getElementById("summary").innerHTML = "Collaboration Summary: <br>";
}