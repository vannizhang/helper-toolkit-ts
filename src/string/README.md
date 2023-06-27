# Helper functions for Strings

## capitalizeFirstLetter
Capitalizes the first letter of each word in a given text.

### Usage:

```js
import { capitalizeFirstLetter } from 'helper-toolkit-ts'
capitalizeFirstLetter('hello world') // 'Hello World'
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

## trunc
Truncates a given text to a specified length and appends ellipsis (...) at the end if needed.

### Syntax:

```js
import { trunc } from 'helper-toolkit-ts'
trunc('long text to trucated', 10, true) // 'long text...'
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