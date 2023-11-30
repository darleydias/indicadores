function ticket(ano,mes){
    var URI="";

    URI="http://192.168.0.11:8000/api/omie/oportunidade/ticket";

    $.ajax({
           url: URI,
           type: 'POST',
           dataType: 'json',
           headers: {
               'Accept': 'application/json'
           },
           data: JSON.stringify({"ano":ano,"mes":mes}),
           contentType: 'application/json; charset=utf-8',
           success: function (result) {
            // console.log(result);
           // PEGO O MAIOR PARA
            var maior=0;
            result.forEach(element => {
                if(element.regSemana > maior){maior=element.regSemana};
            });  

            for(var i=0;i<5;i++) {
                var percentual =0;

                if(result[i].regSemana==null||result[i].regSemana<1){percentual=0;}else{percentual=result[i].regSemana}
                
                if(document.getElementById(parseInt(i+1)+'_'+ano+'_'+mes)!=null){         
                   percentual = (percentual* 100)/maior;  
                   var valor = numberToReal(result[i].regSemana);
                   document.getElementById(parseInt(i+1)+'_'+ano+'_'+mes).innerHTML=valor;
                   let cor = 0;
                   if(percentual < 60){cor='vermelho'}
                   if(percentual > 60 && percentual<90){cor='laranja'}
                   if(percentual > 89){cor='verde'};
                   comeca(document.getElementById(parseInt(i+1)+'_'+ano+'_'+mes));
                   document.getElementById(parseInt(i+1)+'_'+ano+'_'+mes).setAttribute('style','opacity:0.5;font-size: 28px;background-image: url("./img/'+cor+'.png");background-position:left;background-color: #fff; background-repeat: no-repeat;background-size:'+percentual+'% 100px ;display: flex;justify-content: center; align-items: center; margin-left: 10px; width: 22%');
                }
            };
           },
           error: function (error) {
               console.log(error);
           }
    });
}
