class Volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.audio_file.volume = 50/100;
        this.son = document.getElementById("son");
        this.vit = document.getElementById("vit");
        this.son.addEventListener("change",()=>{
            this.audio_file.volume = this.son.value/100;
        });
        this.vit.addEventListener("change",()=>{
            this.audio_file.playbackRate = this.vit.value/100;
        });
    }

}
onload = new Volume();
