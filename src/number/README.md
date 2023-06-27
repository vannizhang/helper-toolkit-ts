# Helper functions for Number

## `abbreviateNumber`
Abbreviates a number by converting it into a shorter format with an appropriate suffix.

### Usage:

```
import { abbreviateNumber } from 'helper-toolkit-ts'
abbreviateNumber(1000) // '1k'
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

```
import { numberWithCommas } from 'helper-toolkit-ts'
numberWithCommas(1000) // '1,000'
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