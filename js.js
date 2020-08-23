let score1 = 0;
let score2 = 0;
let tada = new Audio('tada.mp3');
let ok = new Audio('success.m4a');
let no = new Audio('fail.m4a')

//gestion click lancer 1 et 2
let lancer1 = document.getElementById("lancer1");
let numimg1 = 0;
let numimg2 = 0;

let lance1 = document.querySelector("#lancer1");
lance1.addEventListener("click", function() {
    numimg1 = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#image1").src = `img4.jfif`;

})

let lance2 = document.querySelector("#lancer2");
lance2.addEventListener("click", function() {
    numimg2 = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#image2").src = `img4.jfif`;
})


let lance3 = document.querySelector("#lancer3");
lance3.addEventListener("click", function() {

    if (numimg1 == 1 && numimg2 == 1) {
        document.querySelector("p").innerText = "Rejouez";
        document.querySelector("#image1").src = `img${numimg1}.jfif`;
        document.querySelector("#image2").src = `img${numimg2}.jfif`;
        no.play();
    } else if (numimg1 == 1 && numimg2 == 2) {
        score1++;
        document.querySelector("#score1").innerText = score1;
        document.querySelector("p").innerText = "Joueur 1 Gagne";
        document.querySelector("#image1").src = `img${numimg1}.jfif`;
        document.querySelector("#image2").src = `img${numimg2}.jfif`;
        ok.play();
    } else if (numimg1 == 1 && numimg2 == 3) {
        score2++;
        document.querySelector("#score2").innerText = score2;
        document.querySelector("p").innerText = "Joueur 2 Gagne";
        document.querySelector("#image1").src = `img${numimg1}.jfif`;
        document.querySelector("#image2").src = `img${numimg2}.jfif`;
        ok.play();
    } else if (numimg1 == 2 && numimg2 == 1) {
        score2++;
        document.querySelector("#score2").innerText = score2;
        document.querySelector("p").innerText = "Joueur 2 Gagne";
        document.querySelector("#image1").src = `img${numimg1}.jfif`;
        document.querySelector("#image2").src = `img${numimg2}.jfif`;
        ok.play();
    } else if (numimg1 == 2 && numimg2 == 2) {
        document.querySelector("p").innerText = "Rejouez";
        document.querySelector("#image1").src = `img${numimg1}.jfif`;
        document.querySelector("#image2").src = `img${numimg2}.jfif`;
        no.play();
    } else if (numimg1 == 2 && numimg2 == 3) {
        score1++;
        document.querySelector("#score1").innerText = score1;
        document.querySelector("p").innerText = "Joueur 1 Gagne";
        document.querySelector("#image1").src = `img${numimg1}.jfif`;
        document.querySelector("#image2").src = `img${numimg2}.jfif`;
        ok.play();
    } else if (numimg1 == 3 && numimg2 == 1) {
        score1++;
        document.querySelector("#score1").innerText = score1;
        document.querySelector("p").innerText = "Joueur 1 Gagne";
        document.querySelector("#image1").src = `img${numimg1}.jfif`;
        document.querySelector("#image2").src = `img${numimg2}.jfif`;
        ok.play();
    } else if (numimg1 == 3 && numimg2 == 2) {
        score2++;
        document.querySelector("#score2").innerText = score2;
        document.querySelector("p").innerText = "Joueur 2 Gagne";
        document.querySelector("#image1").src = `img${numimg1}.jfif`;
        document.querySelector("#image2").src = `img${numimg2}.jfif`;
        ok.play();
    } else if (numimg1 == 3 && numimg2 == 3) {
        document.querySelector("p").innerText = "Rejouez";
        document.querySelector("#image1").src = `img${numimg1}.jfif`;
        document.querySelector("#image2").src = `img${numimg2}.jfif`;
        no.play();
    }
    if (score1 == 5) {
        document.querySelector("#j1").innerText = "Bravo!! Joueur 1 a gagné la partie";
        document.querySelector("#j1").style.marginLeft = "10%";
        tada.play();
        document.querySelector("#lancer1").disabled = true;
        document.querySelector("#lancer2").disabled = true;
        document.querySelector("#lancer3").disabled = true;
    }
    if (score2 == 5) {
        document.querySelector("#j2").innerText = "Bravo!! Joueur 2 a gagné la partie";
        document.querySelector("#j2").style.marginLeft = "10%";
        tada.play();
        document.querySelector("#lancer1").disabled = true;
        document.querySelector("#lancer2").disabled = true;
        document.querySelector("#lancer3").disabled = true;
    }

});

let nouveau = document.querySelector("#nouveau");
nouveau.addEventListener("click", function() {
    document.querySelector("#image1").src = `start.jpg`;
    document.querySelector("#image2").src = `start.jpg`;
    score2 = 0;
    score1 = 0;
    document.querySelector("#score1").innerText = 0;
    document.querySelector("#score2").innerText = 0;
    document.querySelector("p").innerText = "Qui marque le point";
    document.querySelector("#lancer1").disabled = false;
    document.querySelector("#lancer2").disabled = false;
    document.querySelector("#lancer3").disabled = false;
    document.querySelector("#j1").innerText = "Joueur 1";
    document.querySelector("#j2").innerText = "Joueur 2";;
})