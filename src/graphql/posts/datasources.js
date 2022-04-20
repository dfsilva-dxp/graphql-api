import { RESTDataSource } from "apollo-datasource-rest";

export class PostsAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = `${process.env.API_BASE_URL}posts`;
  }

  async getPost(id) {
    return this.get(id);
  }

  async getPosts(params = {}) {
    return this.get("", params);
  }
}
