const _ = {
    // The forEach() method calls a function once for each element in an array, in order.
    // El método foreach ejecuta una función una vez por cada elemento de mi arreglo, en orden.
    myEach: (array, fn) => {
        for (let i = 0; i < array.length; i++) {
            fn(array[i], i, array);        
        }
    },
    // The filter() method creates an array filled with all array elements that pass a test (provided as a function).
    // El metdo Filter crea un arrar y lo llena con todos los elementos que aprueban el test (el de la función suministrada)
    myFilter: (array, fn) => {
        const data = [];
        for(let i = 0; i < array.length; i++) {
            if(fn(array[i], i)) {
                data.push(array[i])
            }
        }
        return data;
    },
    //The map() method creates a new array with the results of calling a function for every array element.
    //El metodo map crea un nuevo arreglo con el resultado de la operación en una función por cada elemento del arreglo
    myMap: (array, fn) => {
        const data = [];
        for (let i = 0; i < array.lengt; i++) {
            if(fn(array[i], i, array)) {
                data.push(fn(array[i]));
            }
        }
        return data;
    },
    //The find() method returns the value of the first element in an array that pass a test (provided as a function).
    //El metodo find devuelve el valor de el primer elemento de un array que pasa una condicion establecida
    myFind: (array, fn) => {
        for (let i = 0; i < array.length; i++) {
            if(fn(array[i], i)) {
                return array[i]
            }
        }
    },
    //The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).
    // El methodo findIndex() devuelve el index de el primer elemento en un array que cumple una condición
    myFindIdex: (array, fn) => {
        for (let i = 0; i < array.length; i++) {
            if(fn(array[i], i)) {
                return i;
            }
        }
    },
    //Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.
    //Retorna true si el valor está presente en la lista. Usa indexOf internamente, si la list a es un array. usa formIndex para comenzar tu busqueda con un indice dado.
    myContains: (array, value) => {
        let answer;
        for (let i = 0; i < array.length; i++) {
            if (value === array[i]) {
                answer = true
            }else{
                answer = false;
            }
        }
        return answer;
    },
    //Returns a copy of the array with all instances of the values removed.
    //Devuelve una copia de la matriz con todas las instancias de los valores eliminados.
    myWithout: (array, value) => {
        let newArray = array;
        for (let i = 0; i < newArray.length; i++) {
            if (value === newArray[i]) {
                newArray.splice(i, 1);
            }
        }
        return newArray;
    }
}

const numbers = [1,2,3,4,5,6,7,8,9,10]

//Test myFilter <------
_.myEach(numbers, () => console.log('hola desde myEach'));

//Test myFilter <------
const biggerThan8 = _.myFilter(numbers,(element) => {
    return element > 8;
});
console.log(biggerThan8);

//Test myMap <---------
const suma3 = _.myMap(numbers, (element) => element + 3);
console.log(suma3);

// Test myFind <--------
const than3 = _.myFind(numbers, (element) => element > 2);
console.log(than3);

// Test myFindIndex <---
const indexOfSome = _.myFindIdex(numbers, (element) => element === 8);
console.log(indexOfSome);

// Test myContains <----
const answer = _.myContains(numbers, 2);
console.log(answer);

//Test myWithout <------
let arrayNumbers = [1,3,4,5,7,8,4,2,4,12,4]
const newArray = _.myWithout(arrayNumbers, 4);
console.log(newArray);