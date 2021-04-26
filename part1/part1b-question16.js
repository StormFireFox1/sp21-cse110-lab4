let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

for (typeOfCar in statistics) {
    if (typeOfCar[0] === "r" || statistics[typeOfCar] % 2 === 1) {
        console.log(typeOfCar);
    }
}