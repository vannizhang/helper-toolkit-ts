const capitalizeFirstLetter = (text:string)=>{
    return text = text.toLowerCase().split(' ').map((s:string)=>{
        return s.charAt(0).toUpperCase() + s.substring(1);
    }).join(' ');
};

export {
    capitalizeFirstLetter
};