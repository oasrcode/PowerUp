export function BodyFatCalculator(dataWaist, dataNeck, dataHeight, dataHip,dataGender) {
  let waist = dataWaist ? dataWaist : 0;
  let neck = dataNeck ? dataNeck : 0;
  let height = dataHeight ? dataHeight : 0;
  let hip = dataHip ? dataHip : 0;
  let gender = dataGender?dataGender:null
  let result=0;
  console.log(waist,neck,hip,height,gender)
  if (gender == "male") {
    /*% body fat = [86.010 × log10(waist – neck)] – [70.041 × log10(height)] + 36.76*/
    // result=(Math.round((86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) +36.76) *100) / 100);
   return result=Math.round([86.010 * Math.log10(waist - neck)] - [70.041 * Math.log10(height)] + 36.76)
  }

  if (gender == "female") {
    /*163.205 x log10 (waist + hip - neck) - 97.684 x log10 (height) - 78.387*/
  return  result= [163.205 * Math.log10(waist + hip - neck)] - [97.684 * Math.log10(height)] - 78.387;
  }

 
}
