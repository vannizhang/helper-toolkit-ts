# helper toolkit
A toolkit with helper functions needed for repetitive, tedious tasks.

## Installation:
```
npm i helper-toolkit-ts --save
```

## Usage:

### URL functions:
```
import { urlFns } from 'helper-toolkit-ts'
```

- `urlFns.parseQuery()` split and parse window.location.query

- `urlFns.parseHash()` split and parse window.location.hash


### String functions:
```
import { stringFns } from 'helper-toolkit-ts'
```

- `stringFns.capitalizeFirstLetter('hello word')` capitalize first letter of each word in a string


### geometry functions:
```
import { geometryFns } from 'helper-toolkit-ts'
```

- `geometryFns.long2tile(-90.5, 12)` get tile number from longitude and zoom number

- `geometryFns.lat2tile(24.3, 8)` get tile number from latitude and zoom number