function calculo(){
    if(document.querySelector("#Ctemp").value != ""){
        let Ctemp=document.querySelector("#Ctemp").value;
            let Ftemp=((Ctemp*1.8)+32);
            let Rtemp=((Ctemp*1.8)+491.67);
            let Ktemp=((Ctemp*1)+273.15);
                document.querySelector("#Ftemp").value=(Ftemp);
                document.querySelector("#Ktemp").value=(Ktemp);
                document.querySelector("#Rtemp").value=(Rtemp);

    } else if(document.querySelector("#Ftemp").value != ""){
        let Ftemp=document.querySelector("#Ftemp").value;
            let Ctemp=((Ftemp-32)/1.8);
            let Ktemp=((parseFloat(Ftemp)+459.67)/1.8);
            let Rtemp=(parseFloat(Ftemp)+459.67);
                document.querySelector("#Ctemp").value=(Ctemp);
                document.querySelector("#Ktemp").value=(Ktemp);
                document.querySelector("#Rtemp").value=(Rtemp);
               

    } else if(document.querySelector("#Ktemp").value != ""){
        let Ktemp=document.querySelector("#Ktemp").value;
            let Ctemp=(Ktemp-273);
            let Ftemp=((Ktemp-273)*1.8+32);
            let Rtemp=(Ktemp*1.8);
                document.querySelector("#Ctemp").value=(Ctemp);
                document.querySelector("#Ftemp").value=(Ftemp);
                document.querySelector("#Rtemp").value=(Rtemp);
                    

    } else if(document.querySelector("#Rtemp").value != ""){
        let Rtemp=document.querySelector("#Rtemp").value;
            let Ctemp=((Rtemp-32-459,67)/1.8);
            let Ftemp=((Rtemp-459.67));
            let Ktemp=(Rtemp/1.8);
                document.querySelector("#Ctemp").value=(Ctemp);
                document.querySelector("#Ftemp").value=(Ftemp);
                document.querySelector("#Ktemp").value=(Ktemp);    
    }
        document.querySelector("#limpar").onclick = function(){
                location.reload();        
        }
}