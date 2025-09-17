
import useFetch from '../hooks/useFetch';

function GetCategory(categoryId) {
  const { data: category, isPending, error } = useFetch('http://localhost:8000/categories/' + categoryId);
  if (!isPending && !error) {
    return category.name;
  }
  return '';
}

function Validate(password) {
  let arr = password.split('');
  let i = 0;
  let isValid = true;

  arr.forEach(function (element, index, array) {
    switch (i) {
      case 0:
        if (!CheckCode(element.charCodeAt(0), 72)) {isValid=false;}
        break;
      case 1:
        if (!CheckCode(element.charCodeAt(0), 105)) {isValid=false;}
        break;
      case 2:
        if (!CheckCode(element.charCodeAt(0), 108)) {isValid=false;}
        break;
      case 3:
        if (!CheckCode(element.charCodeAt(0), 108)) {isValid=false;}
        break;
      case 4:
        if (!CheckCode(element.charCodeAt(0), 116)) {isValid=false;}
        break;
      case 5:
        if (!CheckCode(element.charCodeAt(0), 111)) {isValid=false;}
        break;
      case 6:
        if (!CheckCode(element.charCodeAt(0), 112)) {isValid=false;}
        break;
      case 7:
        if (!CheckCode(element.charCodeAt(0), 112)) {isValid=false;}
        break;
      case 8:
        if (!CheckCode(element.charCodeAt(0), 101)) {isValid=false;}
        break;
      case 9:
        if (!CheckCode(element.charCodeAt(0), 114)) {isValid=false;}
        break;
      case 10:
        if (!CheckCode(element.charCodeAt(0), 35)) {isValid=false;}
        break;
      default:
    }
    i++;
  });

  return isValid;
}

function CheckCode(codeIn, correctCode) {
  if (codeIn === correctCode) {
    return true;
  }
  return false;
}

export { GetCategory, Validate };