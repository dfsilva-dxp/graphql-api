import { gql } from "apollo-server";

export const filtersTypeDeds = gql`
  input FiltersInput {
    _sort: String
    _order: String
    _start: Int
    _limit: Int
  }
`;
