# String functions
```
import { stringFns } from 'helper-toolkit-ts'
```

## capitalizeFirstLetter

### Syntax:

```
stringFns.capitalizeFirstLetter(text)
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

## hasHtmlTag

### Syntax:

```
stringFns.hasHtmlTag(text)
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| text | string | input text |

### Returns:

| Type | Description |
|:--   | :--         |
| boolean | if input string contains HTML tag |

<br/>

## stripHtmlTag

### Syntax:

```
stringFns.stripHtmlTag(text)
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| text | string | input text |

### Returns:

| Type | Description |
|:--   | :--         |
| string | text with HTML tags removed |

<br/>

## trunc

### Syntax:

```
stringFns.trunc(text, n, useWordBoundary)
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