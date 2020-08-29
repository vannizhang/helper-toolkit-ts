const parseQuery = (): any => {
  const queryString = window.location.search.substring(1);
  return parsePairsFromString(queryString);
};

const parseHash = (): any => {
  const hashString = window.location.hash.substring(1);
  return parsePairsFromString(hashString);
};

// update a query param by providing key and value
const updateQueryParam = ({ key = '', value = '' } = {}) => {
  if (key) {
    const queryParams = parseQuery();

    queryParams[key] = value;

    const queryParamsStr = Object.keys(queryParams)
      .map(paramKey => {
        const val = queryParams[paramKey];
        return `${paramKey}=${val}`;
      })
      .join('&');

    updateQueryParamInUrl(queryParamsStr);
  }
};

// update the entire query param string in the url
const updateQueryParamInUrl = (queryParam = '') => {
  if (queryParam) {
    const newUrl = window.location.origin + window.location.pathname + '?' + queryParam;
    window.history.replaceState({ path: newUrl }, '', newUrl);
  }
};

const parsePairsFromString = (inputStr = '') => {
  const output: { [key: string]: string } = {};

  const pairs = inputStr.split('&');

  for (const item of pairs) {
    const pair = item.split('=');
    const key: string = decodeURIComponent(pair[0]);
    const value: string = decodeURIComponent(pair[1] || '');

    if (key) {
      output[key] = value;
    }
  }

  return output;
};

interface IUpdateKeyValuePairInQueryStringParams {
  queryString: string;
  key: string;
  value: string | boolean | number;
}

const updateKeyValuePairInQueryString = ({
  queryString,
  key,
  value,
}: IUpdateKeyValuePairInQueryStringParams): string => {
  if (queryString && key) {
    const queryParams = parsePairsFromString(queryString);

    queryParams[key] = value.toString();

    const queryParamsStr = stringifyQueryParams(queryParams);

    return queryParamsStr;
  }

  return '';
};

const stringifyQueryParams = (queryParams: any): string => {
  const queryParamsStr = Object.keys(queryParams)
    .map((paramKey: any) => {
      const val: any = queryParams[paramKey];
      return `${paramKey}=${val}`;
    })
    .join('&');

  return queryParamsStr;
};

// update a hash param by providing key and value
const updateHashParam = ({ key = '', value = '' } = {}) => {
  if (key) {
    const hashParams = parseHash();

    hashParams[key] = value;

    const queryParamsStr = Object.keys(hashParams)
      .map(paramKey => {
        const val = hashParams[paramKey];
        return `${paramKey}=${val}`;
      })
      .join('&');

    window.location.hash = queryParamsStr;
  }
};

export {
  parseQuery,
  parseHash,
  updateQueryParamInUrl,
  updateQueryParam,
  updateKeyValuePairInQueryString,
  updateHashParam,
};
