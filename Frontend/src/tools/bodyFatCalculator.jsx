export function BodyFatCalculator(
  dataWaist,
  dataNeck,
  dataHeight,
  dataHip,
  dataGender
) {
  let result = 0;
  let gender = dataGender;

  if (gender == "male") {
    /*	495 / (1.0324 - .19077 * log10(Navel - Neck) + .15456 * log10(Height)) - 450 */

    return (result = Math.round(
      ((495 /
        (1.0324 -
          0.19077 * Math.log10(parseInt(dataWaist) - parseInt(dataNeck)) +
          0.15456 * Math.log10(parseInt(dataHeight))) -
        450) *
        100) /
        100
    ));
  }

  if (gender == "female") {
    /*	495 / (1.29579 - .35004 * log10(Waist + Hip - Neck) + .22100 * log10(Height)) - 450*/

    return (result = Math.round(
      ((495 /
        (1.29579 -
          0.35004 *
            Math.log10(
              parseInt(dataWaist) + parseInt(dataHip) - parseInt(dataNeck)
            ) +
          0.221 * Math.log10(parseInt(dataHeight))) -
        450) *
        100) /
        100
    ));
  }
}
