export const productResolvers = {
  Query: {
    product: () => ({
      id: "uid-002",
      name: "Orange",
      price: 12.5,
      quantity: 260
    }),
    products: () => [
      {
        id: "uid-002",
        name: "Orange",
        price: 12.5,
        quantity: 260
      },
      {
        id: "uid-003",
        name: "Apple",
        price: 4.99,
        quantity: 377
      },
      {
        id: "uid-004",
        name: "Strawbery",
        price: 8.99,
        quantity: 725
      },
      {
        id: "uid-005",
        name: "Banana",
        price: 5.8,
        quantity: 1022
      }
    ]
  }
};
