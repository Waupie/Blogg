function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

let icon = document.querySelector('.icon');
/*icon.addEventListener('click', myFunction);*/


let openSideNav = document.querySelector('#openSide');
openSideNav.addEventListener('click', openNav);

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

let closeSideNav = document.querySelector('#closeSide');
closeSideNav.addEventListener('click', closeNav);

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = 'rgba(0,0,0,0)';
}

