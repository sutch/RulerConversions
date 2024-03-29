RulerConversions
================

JavaScript functions for converting from decimal numbers to fractional ruler values.

Available in Google Drive Script Gallery as 'Ruler Conversions'.

Available functions
-------------------

* dec2ruler(number, maxDenominator) -- Return number with decimal represented as a faction equivalent with a denominator less than or equal to maxDenominator.
* dec2ruler2(number) -- Convenience function for dec2ruler(number, 2).
* dec2ruler4(number) -- Convenience function for dec2ruler(number, 4).
* dec2ruler8(number) -- Convenience function for dec2ruler(number, 8).
* dec2ruler16(number) -- Convenience function for dec2ruler(number, 16).

Google Drive Spreadsheet usage
------------------------------

Return fraction to nearest 1/2:

  =dec2ruler(2.29, 2)
  => '2 1/2'

* The first parameter is the decimal number to be converted.
* Google Spreadsheet hint: the second parameter of all dec2ruler functions can reference a common cell which can be used to change the precision of fractions across the spreadsheet.

Return fraction to nearest 1/16th using the dec2ruler16 convenience function:

  =dec2ruler16(5.7375)
  => '5 3/4'
