# Helper functions for Date

## `getRoundedTimestamp`
Returns a rounded timestamp based on the specified number of minutes.

### Usage:

```
import { getRoundedTimestamp } from 'helper-toolkit-ts'

getRoundedTimestamp(15) // 1687902300000
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| numOfMinutes | number | number of minuts to round to |

### Returns:

| Type | Description |
|:--   | :--         |
| number | rounded time values in milliseconds |