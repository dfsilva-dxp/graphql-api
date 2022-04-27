import { RESTDataSource } from "apollo-datasource-rest";

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = `${process.env.API_BASE_URL}users`;
  }

  async getUser(id) {
    return this.get(id);
  }

  async getUsers(params = {}) {
    return this.get("", params);
  }
}
