export function caloriesCalculator(dataGender,weight,height,age,activity) {
  let gender = dataGender;
  if (gender == "male") {
    /*[66 + (13,7 × peso en kg) ] + [ (5 × altura en cm) ? (6,8 × edad)] × Factor actividad */

    return Math.round((10 * weight + 6.25 * height - 5 * age + 5) * activity);
  }

  if (gender == "female") {
    /* (10 x peso en kg) + (6.25 × altura en cm) - (5 × edad en años) - 161 */

    return Math.round((10 * weight + 6.25 * height - 5 * age - 161) * activity);
  }
}
