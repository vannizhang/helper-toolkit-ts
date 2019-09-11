const capitalizeFirstLetter = (text: string) => {
  return (text = text
    .toLowerCase()
    .split(' ')
    .map((s: string) => {
      return s.charAt(0).toUpperCase() + s.substring(1);
    })
    .join(' '));
};

const hasHtmlTag = (text: string) => {
  return /<[a-z][\s\S]*>/i.test(text);
};

const stripHtmlTag = (text: string) => {
  if (!hasHtmlTag(text)) {
    return text;
  }

  const div = document.createElement('div');
  div.innerHTML = text;

  const outputText = div.textContent || div.innerText || '';
  return outputText;
};

const trunc =  (text='', n=0, useWordBoundary=false )=>{
  if(text.length <= n) { 
    return text;
  }

  const subString = text.substr(0, n-1);

  return ( useWordBoundary ? subString.substr(0, subString.lastIndexOf(' '))  : subString) + "&hellip;";
}

export { capitalizeFirstLetter, hasHtmlTag, stripHtmlTag, trunc };
