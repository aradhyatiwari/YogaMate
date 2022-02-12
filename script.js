

//by Aradhya Tiwari
let img = document.getElementById("img");
let namee = document.getElementById("name");
let obj = JSON.parse(JSON.stringify(data))
let timing = document.getElementById("timing");

class yog{
    constructor(pose){
        let timee = 30;
        this.timee = timee;
        this.pose = pose
        let current = this.pose
        this.current = current
    }
    timer(){
      setInterval(()=>{
            this.timee--;
            timing.innerHTML=(this.timee);
            if(this.timee==0){
                this.timee += 30;
                this.update();
            }
        },1000)
    }
    update(){
        this.pose++;
        img.src=obj.result[this.pose].img_url;
        namee.innerHTML = obj.result[this.pose].sanskrit_name;
        clearInterval(this.timer());
        this.timer();
    }
    next(){
        this.pose+=1
    }
    prev(){
        this.pose-=1
    }
    reset(){
        this.pose = this.current
        this.timer()
    }
}

let gar = new yog(1);
gar.update();
