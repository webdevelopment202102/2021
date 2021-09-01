
function progress() {
    'use strict';
   var elem1 = document.getElementById("mybar1"),
        width1 = 0,
        myvar1 = setInterval(mygood1, 200);
    function mygood1() {
        if (width1 === 40) {
            clearInterval(myvar1);
            elem1.classList.remove("active");
        } else {
            width1++;
            elem1.style.width = width1 + '%';
        }
    }
    var elem2 = document.getElementById("mybar2"),
        width2 = 0,
        myvar2 = setInterval(mygood2, 200);
    function mygood2() {
        if (width2 === 68) {
            clearInterval(myvar2);
            elem2.classList.remove("active");
        } else {
            width2++;
            elem2.style.width = width2 + '%';
        }
    }
    var elem3 = document.getElementById("mybar3"),
        width3 = 0,
        myvar3 = setInterval(mygood3, 200);
    function mygood3() {
        if (width3 === 57) {
            clearInterval(myvar3);
            elem3.classList.remove("active");
        } else {
            width3++;
            elem3.style.width = width3 + '%';
        }
    }
    var elem4 = document.getElementById("mybar4"),
        width4 = 0,
        myvar4 = setInterval(mygood4, 200);
    function mygood4() {
        if (width4 === 35) {
            clearInterval(myvar4);
            elem4.classList.remove("active");
        } else {
            width4++;
            elem4.style.width = width4 + '%';
        }
    }
    var elem5 = document.getElementById("mybar5"),
        width5 = 0,
        myvar5 = setInterval(mygood5, 200);
    function mygood5() {
        if (width5 === 59) {
            clearInterval(myvar5);
            elem5.classList.remove("active");
        } else {
            width5++;
            elem5.style.width = width5 + '%';
        }
    }
    var elem6 = document.getElementById("mybar6"),
        width6 = 0,
        myvar6 = setInterval(mygood6, 200);
    function mygood6() {
        if (width6 === 95) {
            clearInterval(myvar6);
            elem6.classList.remove("active");
        } else {
            width6++;
            elem6.style.width = width6 + '%';
        }
    }
    var elem7 = document.getElementById("mybar7"),
        width7 = 0,
        myvar7 = setInterval(mygood7, 200);
    function mygood7() {
        if (width7 === 67) {
            clearInterval(myvar7);
            elem7.classList.remove("active");
        } else {
            width7++;
            elem7.style.width = width7 + '%';
        }
    }
    var elem8 = document.getElementById("mybar8"),
        width8 = 0,
        myvar8 = setInterval(mygood8, 200);
    function mygood8() {
        if (width8 === 84) {
            clearInterval(myvar8);
            elem8.classList.remove("active");
        } else {
            width8++;
            elem8.style.width = width8 + '%';
        }
    }
    var elem9 = document.getElementById("mybar9"),
        width9 = 0,
        myvar9 = setInterval(mygood9, 200);
    function mygood9() {
        if (width9 === 74) {
            clearInterval(myvar9);
            elem9.classList.remove("active");
        } else {
            width9++;
            elem9.style.width = width9 + '%';
        }
    }
    var elem10 = document.getElementById("mybar10"),
        width10 = 0,
        myvar10 = setInterval(mygood10, 200);
    function mygood10() {
        if (width7 === 50) {
            clearInterval(myvar10);
            elem10.classList.remove("active");
        } else {
            width10++;
            elem10.style.width = width10 + '%';
        }
    }
    var elem11 = document.getElementById("mybar11"),
        width11 = 0,
        myvar11 = setInterval(mygood11, 200);
    function mygood11() {
        if (width11 === 90) {
            clearInterval(myvar11);
            elem11.classList.remove("active");
        } else {
            width11++;
            elem11.style.width = width11 + '%';
        }
    }
    var elem12 = document.getElementById("mybar12"),
        width12 = 0,
        myvar12 = setInterval(mygood12, 200);
    function mygood12() {
        if (width12 === 70) {
            clearInterval(myvar12);
            elem12.classList.remove("active");
        } else {
            width12++;
            elem12.style.width = width12 + '%';
        }
    }
   
    console.log("SSS");
}
progress();

function progr() {
    "use strict";
    var cophy1 = 0;
    var halem1 = document.getElementById("set1");
    var letusgo1 =   setInterval(inside1, 200);
    function inside1() {
        if (cophy1 === 40) {
            clearInterval(letusgo1);
        } else {
            cophy1++;
            halem1.innerHTML = cophy1  + "%";
        }
    }
     var cophy2 = 0;
    var halem2 = document.getElementById("set2");
    var letusgo2 =   setInterval(inside2, 200);
    function inside2() {
        if (cophy2 === 68) {
            clearInterval(letusgo2);
        } else {
            cophy2++;
            halem2.innerHTML = cophy2  + "%";
        }
    }
     var cophy3 = 0;
    var halem3 = document.getElementById("set3");
    var letusgo3 =   setInterval(inside3, 200);
    function inside3() {
        if (cophy3 === 57) {
            clearInterval(letusgo3);
        } else {
            cophy3++;
            halem3.innerHTML = cophy3  + "%";
        }
    }
    var cophy4 = 0;
    var halem4 = document.getElementById("set4");
    var letusgo4 =   setInterval(inside4, 200);
    function inside4() {
        if (cophy4 === 35) {
            clearInterval(letusgo4);
        } else {
            cophy4++;
            halem4.innerHTML = cophy4  + "%";
        }
    }
     var cophy5 = 0;
    var halem5 = document.getElementById("set5");
    var letusgo5 =   setInterval(inside5, 200);
    function inside5() {
        if (cophy5 === 59) {
            clearInterval(letusgo5);
        } else {
            cophy5++;
            halem5.innerHTML = cophy5  + "%";
        }
    }
     var cophy6= 0;
    var halem6 = document.getElementById("set6");
    var letusgo6 =   setInterval(inside6, 200);
    function inside6() {
        if (cophy6 === 95) {
            clearInterval(letusgo6);
        } else {
            cophy6++;
            halem6.innerHTML = cophy6  + "%";
        }
    }
    var cophy7 = 0;
    var halem7 = document.getElementById("set7");
    var letusgo7 =   setInterval(inside7, 200);
    function inside7() {
        if (cophy7 === 67) {
            clearInterval(letusgo7);
        } else {
            cophy7++;
            halem7.innerHTML = cophy7  + "%";
        }
    }
     var cophy8 = 0;
    var halem8 = document.getElementById("set8");
    var letusgo8 =   setInterval(inside8, 200);
    function inside8() {
        if (cophy8 === 84) {
            clearInterval(letusgo8);
        } else {
            cophy8++;
            halem8.innerHTML = cophy8  + "%";
        }
    }
     var cophy9= 0;
    var halem9 = document.getElementById("set9");
    var letusgo9 =   setInterval(inside9,200);
    function inside9() {
        if (cophy9 === 74) {
            clearInterval(letusgo9);
        } else {
            cophy9++;
            halem9.innerHTML = cophy9  + "%";
        }
    }
    var cophy10 = 0;
    var halem10 = document.getElementById("set10");
    var letusgo10 =   setInterval(inside10, 200);
    function inside10() {
        if (cophy10 === 50) {
            clearInterval(letusgo10);
        } else {
            cophy10++;
            halem10.innerHTML = cophy10  + "%";
        }
    }
     var cophy11 = 0;
    var halem11 = document.getElementById("set11");
    var letusgo11 =   setInterval(inside11, 200);
    function inside11() {
        if (cophy11 === 90) {
            clearInterval(letusgo11);
        } else {
            cophy11++;
            halem11.innerHTML = cophy11  + "%";
        }
    }
     var cophy12= 0;
    var halem12 = document.getElementById("set12");
    var letusgo12 =   setInterval(inside12,200);
    function inside12() {
        if (cophy12 === 70) {
            clearInterval(letusgo12);
        } else {
            cophy12++;
            halem12.innerHTML = cophy12  + "%";
        }
    }
}
progr();

function none() {
    'use strict';
    if (window.innerWidth > 1200) {
        var item   = document.querySelectorAll(".h3para"),
            button   = document.querySelectorAll(".click");
        var i;
        for (i = 0; i < button.length; i++) {
            button[i].onclick = function () {
                lose();
                this.parentElement.classList.add("active");
                
            };
        }
        function lose() {
            var o;
            for (o = 0; o < item.length; o++) {
                item[o].classList.remove("active");
       
        
            }
        }
    }
}
none();

function yes() {
    'use strict';
    if (window.innerWidth < 1200 ) {
        var noth   = document.querySelectorAll(".h3para"),
            cock   = document.querySelectorAll(".click");
        var a;
        for (a = 0; a < cock.length; a++) {
            cock[a].onclick = function () {
                lose();
                this.parentElement.classList.add("active2");
            };
        }
        function lose() {
            var p;
            for (p = 0; p < noth.length; p++) {
                noth[p].classList.remove("active2");
       
        
            }
        }
    }
}
yes();   

function yesno() {
    'use strict';
    if (window.innerWidth < 992) {
        var nothy   = document.querySelectorAll(".h3para"),
            cocky   = document.querySelectorAll(".click");
        var a;
        for (a = 0; a < cocky.length; a++) {
            cocky[a].onclick = function () {
                lose();
                this.parentElement.classList.add("active3");
            };
        }
        function lose() {
            var p;
            for (p = 0; p < nothy.length; p++) {
                nothy[p].classList.remove("active3");
       
        
            }
                }
        var calc   = document.querySelectorAll(".left")[0];/*كان لازم احدد الليفت ديه رقم كام علشان ياخدها*/
         
        calc.classList.add('center');
        var text = document.querySelectorAll(".left")[0];
        text.classList.add("text-center");
    }
}
yesno();