import { RESTDataSource } from "apollo-datasource-rest";
import { makeDataLoader } from "../../utils/makeDataLoader";

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = `${process.env.API_BASE_URL}users`;
    this.dataLoader = makeDataLoader.users(this.getUsers.bind(this));
  }

  async getUser(id) {
    return this.get(id, undefined, {
      cacheOptions: {
        ttl: 60 * 60 // 1 hours
      }
    });
  }

  async getUsers(params = {}) {
    return this.get("", params, {
      cacheOptions: {
        ttl: 60 * 60 // 1 hours
      }
    });
  }
}
