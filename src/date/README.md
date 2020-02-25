# Date functions
```
import { dateFns } from 'helper-toolkit-ts'
```

## addMinutesToCurrentTime

### Syntax:

```
dateFns.addMinutesToCurrentTime(numOfMinToAdd)
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| numOfMinToAdd | number |  |

### Returns:

| Type | Description |
|:--   | :--         |
| number | result in milliseconds  |

<br/>

## getMonthName



### Syntax:

```
dateFns.getMonthName(monthIndex, isShort)
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| monthIndex | number |  |
| isShort | boolean | if true, return the abbreviation month name (e.g. Jan) |

### Returns:

| Type | Description |
|:--   | :--         |
| string | month name |

<br/>

## getRoundedDate

Round the current time down to the nearest n minutes into milliseconds (e.g. 10:57AM => 10:55 AM)

### Syntax:

```
dateFns.getRoundedDate(numOfMinutes)
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| numOfMinutes | number | number of minuts to round to |

### Returns:

| Type | Description |
|:--   | :--         |
| number | rounded time values in milliseconds |