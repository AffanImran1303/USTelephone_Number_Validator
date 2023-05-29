# USTelephone_Number_Validator
A program which validates the provided US number.

const reg = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/

Breaking down the reg;
1) '^' Start of the string.
2) '(1\s?)?' matches an optional group which begins with '1' followed by an optional whitespace character
3) '(\d{3}|\(\d{3}\))' matches either 3-digits or 3-digits enclosed in ().
4) '[\s\-]?' matches an optional whitespace character or a hyphen. Allows for seperation bewtween parts of phone number.
5) '\d{3}' matches exactly 3-digits.
6) '[\s\-]?' matches an optional whitespace character or a hyphen.
7) '\d{4}' matches exactly 4-digits.
8) '$' End of the string.
