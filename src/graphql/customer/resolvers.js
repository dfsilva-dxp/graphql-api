export const customerResolvers = {
  Customer: {
    date: (customer) =>
      new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "numeric",
        year: "numeric"
      }).format(customer.currentDate)
  },
  Query: {
    customer: () => ({
      id: "uid-001",
      name: "Daniel Silva",
      email: "dfsilva.dxp@gmail.com",
      currentDate: new Date()
    }),

    customers: () => [
      {
        id: "uid-001",
        name: "Daniel Silva",
        email: "dfsilva.dxp@gmail.com",
        currentDate: new Date()
      },
      {
        id: "uid-002",
        name: "Flávia Silva",
        email: "flavia.dxp@gmail.com",
        currentDate: new Date()
      }
    ]
  }
};
