import { gql } from "apollo-server";

export const filtersTypeDeds = gql`
  input FiltersInput {
    _sort: String
    _order: OrderFilter
    _start: Int
    _limit: Int
  }

  enum OrderFilter {
    ASC
    DESC
  }
`;
