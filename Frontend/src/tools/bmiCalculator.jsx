export function bmiCalculator(weight,height){
  let  bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
 
  return bmi;
}