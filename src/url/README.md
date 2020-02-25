# URL functions
```
import { urlFns } from 'helper-toolkit-ts'
```

## parseQuery

parse `window.location.search` params in key value pairs

### Syntax:

```
urlFns.parseQuery()
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
|  |  |  |

### Returns:

| Type | Description |
|:--   | :--         |
| object | return `window.location.search` params in key value pairs |

<br/>

## parseHash

parse `window.location.hash` params in key value pairs

### Syntax:

```
urlFns.parseHash()
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
|  |  |  |

### Returns:

| Type | Description |
|:--   | :--         |
| object | return `window.location.hash` params in key value pairs |

<br/>

## updateQueryParamInUrl

replace entire `window.location.search` params string in the url using a new string

### Syntax:

```
urlFns.updateQueryParamInUrl(queryParam)
```

### Arguments: 

|Name | Type | Description |
|:--  |:--   | :--         |
| queryParam | string | new `window.location.search` params string |

### Returns:

| Type | Description |
|:--   | :--         |
| void |  |

<br/>

## updateQueryParam

update the `window.location.search` params by providing the key and value for the param to update

### Syntax:

```
urlFns.updateQueryParam({
    key: '',
    value: ''
})
```

### Options: 

|Name | Type | Description |
|:--  |:--   | :--         |
| key | string |  |
| value | string |  |

### Returns:

| Type | Description |
|:--   | :--         |
| void |  |

<br/>

## updateKeyValuePairInQueryString

### Syntax:

```
urlFns.updateKeyValuePairInQueryString({
  queryString: string;
  key: string;
  value: string | boolean | number;
})
```

### Options: 

|Name | Type | Description |
|:--  |:--   | :--         |
| queryString | string | input query string |
| key | string |  |
| value | value |  |

### Returns:

| Type | Description |
|:--   | :--         |
| string | return query string with updated value for param that has the name matches key |

### Example:

```
urlFns.updateKeyValuePairInQueryString({
    queryString: 'f=json&start=1&num=10&q=(hurricane)&categories=/Categories',
    key: 'start',
    value: 11,
})

// should return `f=json&start=11&num=10&q=(hurricane)&categories=/Categories`

```
<br/>