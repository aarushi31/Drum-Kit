const a=document.getElementById("a");
const q=document.getElementById("q");
const w=document.getElementById("w");
const e=document.getElementById("e");
const s=document.getElementById("s");
const z=document.getElementById("z");
const x=document.getElementById("x");
const v=document.getElementById("v");
const b=document.getElementById("b");
const c=document.getElementById("c");

const playSound=(idname)=>{
    var sound=document.getElementById(idname);
    sound.play();
}
const displayCircle=(classname)=>{
    let circle=document.querySelector(classname);
        circle.style.transform="scale(1.4)";
        setTimeout(()=>{
            circle.style.transform="scale(1)";
        },500);
}
a.addEventListener('click',()=>{
    playSound("crash");
    displayCircle(".circle-1");
});

q.addEventListener('click',()=>{
    playSound("ride");
    displayCircle(".circle-2");
});
w.addEventListener('click',()=>{
    playSound("tom-low");
    displayCircle(".circle-3");
});
e.addEventListener('click',()=>{
    playSound("tom-mid");
    displayCircle(".circle-4");
});
s.addEventListener('click',()=>{
    playSound("tom-high");
    displayCircle(".circle-5");
});
x.addEventListener('click',()=>{
    playSound("hithat-open");
    displayCircle(".circle-4");
});
v.addEventListener('click',()=>{
    playSound("hithat-close");
    displayCircle(".circle-3");
});
z.addEventListener('click',()=>{
    playSound("snare");
    displayCircle(".circle-2");
});
b.addEventListener('click',()=>{
    playSound("kick1");
    displayCircle(".circle-1");
});
c.addEventListener('click',()=>{
    playSound("kick2");
    displayCircle(".circle-2");
});

document.addEventListener('keypress',(e)=>{
    if(e.key=='a'){
        playSound("crash");
        displayCircle(".circle-1");
    }
    else if(e.key=='q'){
        playSound("ride");
        displayCircle(".circle-2");
    }
    else if(e.key=='w'){
        playSound("tom-low");
        displayCircle(".circle-3");
    }
    else if(e.key=='e'){
        playSound("tom-mid");
        displayCircle(".circle-4");
    }
    else if(e.key=='s'){
        playSound("tom-high");
        displayCircle(".circle-5");
    }
    else if(e.key=='x'){
        playSound("hithat-open");
        displayCircle(".circle-4");
    }
    else if(e.key=='v'){
        playSound("hithat-close");
        displayCircle(".circle-3");
    }
    else if(e.key=='z'){
        playSound("snare");
        displayCircle(".circle-2");
    }
    else if(e.key=='b'){
        playSound("kick1");
        displayCircle(".circle-1");
    }
    else if(e.key=='c'){
        playSound("kick2");
        displayCircle(".circle-2");
    }
})

