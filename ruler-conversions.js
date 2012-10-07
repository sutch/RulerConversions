// Ruler Conversions
// version 1.0

// JavaScript functions for converting from decimal numbers to fractional ruler values.

// Available in Google Drive Script Gallery as 'Ruler Conversions'.
// Please report problems, help resolve problems, and enhance on github: https://github.com/sutch/RulerConversions

// Google Drive Spreadsheet usage:
//     '=dec2ruler16(5.7375)' => '5 3/4'  // returns fraction to nearest 1/16th.
//     '=dec2ruler(2.29, 2)' => '2 1/2'  // returns fraction to nearest 1/2 (second parameter can reference a common cell which can be used to change precision of fractions across a spreadsheet).

// Convenience function for 1/2 ruler.
function dec2ruler2(decimal) {
  return dec2ruler(decimal, 2);
}

// Convenience function for 1/4 ruler.
function dec2ruler4(decimal) {
  return dec2ruler(decimal, 4);
}

// Convenience function for 1/8th ruler.
function dec2ruler8(decimal) {
  return dec2ruler(decimal, 8);
}

// Convenience function for 1/16th ruler.
function dec2ruler16(decimal) {
  return dec2ruler(decimal, 16);
}

// This function accepts a floating point (or decimal) number and a maximum denominator, and returns the number's fractional equivalent with denominator less than or equal to the maximum denominator.
function dec2ruler(number, maxRuleDenominator) {
  
  if (isNaN(number)) {
    return("Not a Number"); 
  }

  if (String(number).indexOf('.')==-1) {  // return number if no decimal point
    return(number);
  }

  whole = String(number).split('.')[0];
  decimal = parseFloat("."+String(number).split('.')[1]);

  minNumerator = 0;
  minDenominator = 1;
  
  maxNumerator = 1;
  maxDenominator = 1;

  testNumerator = 1;
  testDenominator = 2;

  while (testDenominator <= maxRuleDenominator && (minNumerator != maxNumerator || minDenominator != maxDenominator)) {
    if (decimal < testNumerator/testDenominator) {
      maxNumerator = testNumerator;
      maxDenominator = testDenominator;
      testDenominator = testDenominator * 2;
    } else if (decimal > testNumerator/testDenominator) {
      minNumerator = testNumerator;
      minDenominator = testDenominator;
      testNumerator = testNumerator + testDenominator;
      testDenominator = testDenominator * 2;
    } else {
      decimal = testNumerator/testDenominator;
      minNumerator = maxNumerator = testNumerator;
      minDenominator = maxDenominator = testDenominator;
    }
  }

  if ((decimal - minNumerator/minDenominator) <= (maxNumerator/maxDenominator - decimal)) {  // min numerator/denominator is closest to decimal
    numerator = minNumerator;
    denominator = minDenominator;
  } else {  // max numerator/denominator is closest to decimal
    numerator = maxNumerator;
    denominator = maxDenominator;
  }

  if (numerator == 0) {
    return whole;
  } else if (numerator == denominator) {
    return Number(whole) + 1;
  } else if (whole == 0) {
    return numerator + "/" + denominator;
  } else {
    return whole + " " + numerator + "/" + denominator;
  }
}
