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

export { parseQuery, parseHash, updateQueryParamInUrl, updateQueryParam };
