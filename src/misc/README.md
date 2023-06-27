# Miscellaneous Helper Functions

## `generateUID`
Generates a unique identifier (UUID) using the version 4 format.

### Usage:

```
import { generateUID } from 'helper-toolkit-ts'

generateUID(); // 
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

```
import { isMobileDevice } from 'helper-toolkit-ts'
isMobileDevice()
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

## isValidColor
Checks if the provided color string is valid.

### Usage:

```
import { isValidColor } from 'helper-toolkit-ts'
isValidColor()
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