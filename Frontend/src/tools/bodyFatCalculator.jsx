export function BodyFatCalculator(dataWaist, dataNeck, dataHeight, dataHip,dataGender) {
  // let waist = dataWaist ? dataWaist : 0;
  // let neck = dataNeck ? dataNeck : 0;
  // let height = dataHeight ? dataHeight : 0;
  // let hip = dataHip ? dataHip : 0;
  // let gender = dataGender?dataGender:null
  let result=0;
  let gender = dataGender;
  
  
  // if (gender == "male") {
  //   /*	495 / (1.0324 - .19077 * log10(Navel - Neck) + .15456 * log10(Height)) - 450 */

    

  //  return result=Math.round(495 / (1.0324 - .19077 * Math.log10(waist - neck) + .15456 * Math.log10(height)) - 450)
  // }

  if (gender == "female") {
    /*	495 / (1.29579 - .35004 * log10(Waist + Hip - Neck) + .22100 * log10(Height)) - 450*/
   
  let cintura = dataWaist;
  console.log(cintura)
  console.log(70)
   result= Math.round(495 / (1.29579 - .35004 * Math.log10(cintura + 70 - dataNeck) + .22100 * Math.log10(175)) - 450);
  
   return result;
  }

 
}
