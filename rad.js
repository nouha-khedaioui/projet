class player{
    constructor(){
var heightmain = document.getElementById("player");
heightmain.style.height = screen.height + "px";
if(screen.width<620){
heightmain.style.width = screen.width + "px";
}
var heightdiv = document.getElementById("content");
heightdiv.style.height = screen.height-300 + "px";
}
}

onload = new player();

class audiop{
    constructor(){
this.audio_file = document.getElementById("audio_file");
this.audiot = document.getElementById("p");
 this.isplayed ;
this.pause = document.getElementById("pause");
this.pause.addEventListener("click",()=>{
this.playpause();
});
    
this.namer = [];
this.namer[0]="Radio1";
this.namer[1]="Radio2";
this.namer[2]="Radio3";
this.srcr = [];
this.srsr[0]="001.mp3";
this.srcr[1]="112.mp3";
this.srcr[2]="108.mp3";
this.server="0";

this.setResource();
document.getElementById("ap").addEventListener("click",()=>{
    if(this.server<this.srcr.length-1){
        ++this.server;
        this.isplayed = false;
        }else{
            this.server=0;
        }
        localStorage.setItem("save",this.server);
    this.setResource();
    });
    
    
    document.getElementById("av").addEventListener("click",()=>{
        if(this.server>0){
            --this.server;
        }else{
            this.server=this.srcr.length-1;
        }
        localStorage.setItem("save",this.server);
        this.setResource();
    });
}

}
   
setResource()
{
    if(localStorage.getItem("save")!=null){
        this.server=localStorage.getItem("save");
    }
    this.audio_file.src = this.srcr[this.server];
    this.audiot.innerHTML = this.namer[this.server];
    this.playpause();

}

     
    playpause()
    {
        if(this.isplayed == false){
        this.audio_file.play();
        this.pause.src = "pause.jpg";
        this.isplayed = true;
    }else{
        this.audio_file.pause();
        this.pause.src = "jouer.jpg";
        this.isplayed = false;
    }
}   



onload = new audiop();

class Color{
    constructor(){
this.c1 = document.getElementById("c1");
this.c1.addEventListener("click",()=>{
this.select_c("c1");
});
this.c2 = document.getElementById("c2");
this.c2.addEventListener("click",()=>{
    this.select_c("c2");
    });
this.c3 = document.getElementById("c3");
this.c3.addEventListener("click",()=>{
    this.select_c("c3");
    });
this.c4 = document.getElementById("c4");
this.c4.addEventListener("click",()=>{
    this.select_c("c4");
    });
    if(localStorage.getItem("color")!=null){
        document.body.style.color="black";
    }
    this.select_c(localstorage.getItem("color"));
    }
    select_c(color){
if(color=="c1"){
    document.body.style.background = "black";
}
if(color=="cé"){
    document.body.style.background = "pink";
}
if(color=="c3"){
    document.body.style.background = "green";
}
else if(color=="c4"){
    document.body.style.background = "red";
}
localStorage("color",color);
    }
}

onload = new Color();

alert("yes");