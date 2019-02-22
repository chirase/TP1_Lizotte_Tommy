import {
    Util
} from './Util.js'


export class header {

    constructor(nav) {
        //Récupérer les valeurs passées en paramètre		
        this.nav = nav;
        this.arrayA = this.nav.querySelectorAll("a");
        this.integrerInteraction(this.arrayA);

    }


    integrerInteraction(arrayA) {
        let i = 0;
        for (let obj of arrayA){
            obj.dataset.index = i;
            i++;
            
            obj.addEventListener("mouseover", function(){
                if (this.innerHTML != ""){
                    ((arrayA[parseInt(this.dataset.index) + 1] != undefined)? arrayA[parseInt(this.dataset.index) + 1] :arrayA[0]).innerHTML = this.innerHTML;
                    this.innerHTML = "";
                }
            });
        }
    }
}