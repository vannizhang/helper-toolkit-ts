# helper toolkit
A toolkit with helper functions needed for repetitive, tedious tasks.

## Installation:
```
npm i helper-toolkit-ts --save
```

## Usage:

### [URL functions](./src/url/README.md):
```
import { urlFns } from 'helper-toolkit-ts'
```

### [Number functions](./src/number/README.md):
```
import { numberFns } from 'helper-toolkit-ts'
```

### [String functions](./src/string/README.md):
```
import { stringFns } from 'helper-toolkit-ts'
```


### [date functions](./src/date/README.md):

```
import { dateFns } from 'helper-toolkit-ts'
```


### [misc functions](./src/misc/README.md):

```
import { miscFns } from 'helper-toolkit-ts'
```

### geometry functions:
```
import { geometryFns } from 'helper-toolkit-ts'
```

- `geometryFns.long2tile(-90.5, 12)` get tile number from longitude and zoom number

- `geometryFns.lat2tile(24.3, 8)` get tile number from latitude and zoom number