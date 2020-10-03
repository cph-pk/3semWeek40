// 5 this in JavaScript

var car = {
    brand: "Nissan",
    getBrand: function () {
        console.log(this.brand);
    }
};

var getCarBrand = car.getBrand;

getCarBrand();   // output: undefined

// a)
/*
Variable getCarBrand henter functionen fra getBrand ud af objectet car, så 'this.brand'
er nu sat som global object og kan ikke referere til brand inde i car objectet.
*/

// b)
/*
el.addEventListener("click", car.getBrand); henter functionen ud af objectet car og
prøver nu at hente 'this.brand', som ikke findes som global object.
*/