/*
Purchasing Amazon used pallets

Use this as practice to keep track of and figure out prices and such
*/

//create an array for the current inventory



const currentInventory = [
  {
    name: 'Dell Keyboard',
    amazonPrice: 33.98,
    SalePrice: 28.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'PERLESMITH Full Motion TV Wall Mount for 37-80 Inch',
    amazonPrice: 54.97,
    SalePrice: 48.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'California Car Duster',
    amazonPrice: 27.48,
    SalePrice: 20.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'Big Sky Inflatable Joust Game',
    amazonPrice: 47.25,
    SalePrice: 40.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'Pizza Oven',
    amazonPrice: 72.99,
    SalePrice: 65.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: '2 Player Badminton set',
    amazonPrice: 15.98,
    SalePrice: 10.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'RubberMaid slim Trach 11.25 Gallon',
    amazonPrice: 48.00,
    SalePrice: 43.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'Hamilton Beach Coffe Maker',
    amazonPrice: 49.99,
    SalePrice: 45.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'Top Sofa Pet Bed',
    amazonPrice: 21.98,
    SalePrice: 17.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'HollyHOME tray end table',
    amazonPrice: 39.99,
    SalePrice: 35.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'Zenna Home Bathroom',
    amazonPrice: 27.86,
    SalePrice: 23.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'Ikea Golden Tray',
    amazonPrice: 64.99,
    SalePrice: 60.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'Tommy Bahama Chair',
    amazonPrice: 59.99,
    SalePrice: 55.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'Excersize mat',
    amazonPrice: 28.54,
    SalePrice: 23.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'Window Regulator',
    amazonPrice: 43.98,
    SalePrice: 35.00,
    ActualPrice: 0.0,
    qty: 4,
    PurchaseDate: '11/13/2000',
  },
  {
    name: 'Tarp',
    amazonPrice: 19.86,
    SalePrice: 15.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'Home Air Filters 16*24*4',
    amazonPrice: 58.00,
    SalePrice: 54.00,
    ActualPrice: 0.0,
    PurchaseDate: '11/13/2000'
  },
  {
    name: 'Window Regulator',
    amazonPrice: 29.98,
    SalePrice: 25.00,
    ActualPrice: 0.0,
    qty: 3,
    PurchaseDate: '11/13/2000',
  },
];

/*
Create a funtion to find out the price if every item sales at suggested price
*/
sumOfSalesPrice = (inventory, costOfPalet) => {
  const sumOfProduct = inventory.reduce( (prev, items) => {
    return prev += items.SalePrice
  }, 0)

  const isThereProfit = sumOfProduct - costOfPalet;

  if (isThereProfit < 0) {
    return `No profit, expect a loss of $${isThereProfit}`;
  } else {
    return `If everything sales at expected price the pallet will have a $${isThereProfit} profit`;
  }
}
const findProfit = sumOfSalesPrice(currentInventory, 150);
console.log(`findProfit: ${findProfit}`);
