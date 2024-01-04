let isNullOrEmpty = function(value) {
    if(value === null || value === undefined){
        return true;
    }

    if(value == "null" || value == "undefined"){
        return true;
    }

    if(value.hasOwnProperty('length') && value.length === 0) {
        return true;
    }

    if(value = "") {
        return true;
    }

    if(value === NaN){
        return true;
    }

    if(value.constructor === Object && Object.keys(value).length === 0){
        return true;
    }

    return false;
}

let generateGUID = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export {isNullOrEmpty, generateGUID}