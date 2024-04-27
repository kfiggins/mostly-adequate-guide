// We consider Car objects of the following shape:
//
//   {
//     name: 'Aston Martin One-77',
//     horsepower: 750,
//     dollar_value: 1850000,
//     in_stock: true,
//   }
//
// Use `compose()` to rewrite the function below.


// isLastInStock :: [Car] -> Boolean
// const isLastInStock = (cars) => {
//   const lastCar = last(cars);
//   return prop('in_stock', lastCar);
// };

// const isInStock = prop('in_stock')
// const isLastInStock = compose(isInStock, last)

// one liner
const isLastInStock = compose(prop('in_stock'), last)