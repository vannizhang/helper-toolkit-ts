# Helper Functions Toolkit
A toolkit with helper functions needed for repetitive, tedious tasks.

## Installation:

To install the package, run:
```
npm i helper-toolkit-ts --save
```

## Helper functions for Date

## `getRoundedTimestamp`
Returns a rounded timestamp based on the specified number of minutes.

### Usage:

```js
import { getRoundedTimestamp } from 'helper-toolkit-ts'

const roundedDate = getRoundedDate(15);
console.log(roundedDate); // Output: 1656318000
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| numOfMinutes | number | number of minuts to round to |

### Returns:

| Type | Description |
|:--   | :--         |
| number | rounded time values in milliseconds |

</br>

## Helper functions for Number

## `abbreviateNumber`
Abbreviates a number by converting it into a shorter format with an appropriate suffix.

### Usage:

```js
const num = 1500;
const abbreviated = abbreviateNumber(num, 1);
console.log(abbreviated); // Output: '1.5K'
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| num | number | input number |
| fixed | number | number of decimal places to show |

### Returns:

| Type | Description |
|:--   | :--         |
| string | abbreviate number like 1K  |

<br/>

## `numberWithCommas`
Converts a number to a string representation with commas for better readability.

### Usage:

```js
import { numberWithCommas } from 'helper-toolkit-ts'

const number = 1000000;
const formattedNumber = numberWithCommas(number);
console.log(formattedNumber); // Output: '1,000,000'
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| num | number | input number |

### Returns:

| Type | Description |
|:--   | :--         |
| string | number separated by comma: 3,000 |

<br/>

## Helper functions for Strings

## `capitalizeFirstLetter`
Capitalizes the first letter of each word in a given text.

### Usage:

```js
import { capitalizeFirstLetter } from 'helper-toolkit-ts'

const capitalizedSentence = capitalizeFirstLetter('hello world');
console.log(capitalizedSentence); // Output: 'Hello World'
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| text | string | input text |

### Returns:

| Type | Description |
|:--   | :--         |
| string | string with first letter in uppercase |

<br/>

## `trunc`
Truncates a given text to a specified length and appends ellipsis (...) at the end if needed.

### Usage:

```js
import { trunc } from 'helper-toolkit-ts'

const sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const truncatedSentence = trunc(sentence, 20, true);
console.log(truncatedSentence); // Output: 'Lorem ipsum dolor...'
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| text | string | input text |
| n | number | max number of characters to keep |
| useWordBoundary | boolean | if true, keep the whole word at end |

### Returns:

| Type | Description |
|:--   | :--         |
| string | return the string end with ellipsis(...) if length of input string is longer than the max n |

<br/>

## Miscellaneous Helper Functions

## `generateUID`
Generates a unique identifier (UUID) using the version 4 format.

### Usage:

```js
import { generateUID } from 'helper-toolkit-ts'

const uid = generateUID();
console.log(uid); // Output: e.g., 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
|  |  |  |

### Returns:

| Type | Description |
|:--   | :--         |
| string | unique identifier string  |

<br/>

## `isMobileDevice`
Determines whether the current device is a mobile device.

### Usage:

```js
import { isMobileDevice } from 'helper-toolkit-ts'

const isMobile = isMobileDevice();
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
|  |  |  |

### Returns:

| Type | Description |
|:--   | :--         |
| boolean | if is using mobile device |

<br/>

## `isValidColor`
Checks if the provided color string is valid.

### Usage:

```js
import { isValidColor } from 'helper-toolkit-ts'

const color = '#ff0000';
const isValid = isValidColor(color);
console.log(isValid); // Output: true
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| colorStr | string | input color string (e.g. '#000', '#000000', 'rgb(0,0,0)') |

### Returns:

| Type | Description |
|:--   | :--         |
| boolean | if input string is valid color |

<br/>