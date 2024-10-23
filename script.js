let menuVisible = false ;

function showHideMenu() {
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function selected(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

function effectSkills(){
    let skills = document.getElementById("skills");
    let distance_skills = window.innerHeight  - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let abilitys = document.getElementsByClassName("progress");
        abilitys[0].classList.add("Html");
        abilitys[1].classList.add("Css");
        abilitys[2].classList.add("JavaScript");
        abilitys[3].classList.add("Figma");
        abilitys[4].classList.add("Git");
        abilitys[5].classList.add("Github");
        abilitys[6].classList.add("React");
        abilitys[7].classList.add("Comunication");
        abilitys[8].classList.add("Creativity");
        abilitys[9].classList.add("Teamwork");
        abilitys[10].classList.add("Autodidact");
        abilitys[11].classList.add("Leadership");
        abilitys[12].classList.add("Adaptability");
        abilitys[13].classList.add("Problem-solving");
    }
}

window.onscroll = function(){
    effectSkills();
}