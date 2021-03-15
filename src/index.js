module.exports = function toReadable (number) {
    module.exports = function toReadable (number) {
    const word={
        pr:['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
        ds:['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','hundred']
     
     }
     let rez='';
     let arrNum= String(number).split('');
     let lng=arrNum.length;
     if(lng==3){
         switch (arrNum[1]){
             case '1':
                 rez=word.pr[+arrNum[0]]+' '+word.ds[8]+' '+word.pr[+arrNum[2]+10];
                 break; 
             case '0':
                 if(arrNum[2]!=0){
                    rez=word.pr[+arrNum[0]]+' '+word.ds[8]+' '+word.pr[+arrNum[2]];
                 }else{
                    rez=word.pr[+arrNum[0]]+' '+word.ds[8];
                 }
                 break;
             default:
                 if(arrNum[2]!=0){
                     rez=word.pr[+arrNum[0]]+' '+word.ds[8]+' '+word.ds[+arrNum[1]-2]+' '+word.pr[+arrNum[2]];
                 }else{
                     rez=word.pr[+arrNum[0]]+' '+word.ds[8]+' '+word.ds[+arrNum[1]-2];
                 }
                 break;
         }
     }
     if(lng==2){
         switch (arrNum[0]){
             case '1':
                 rez=word.pr[number];
                 break; 
             default:
                 if(arrNum[1]!=0){
                     rez=word.ds[+arrNum[0]-2]+' '+word.pr[+arrNum[1]];
                 }else{
                     rez=word.ds[+arrNum[0]-2]
                 }
                 break;
         }
     }
     if(lng==1){
         rez=word.pr[number];
     }
     return rez;
}
  
}
