import { RESTDataSource } from "apollo-datasource-rest";
import { makeDataLoader } from "../../utils/makeDataLoader";

export class PostsAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = `${process.env.API_BASE_URL}posts`;
    this.dataLoader = makeDataLoader.posts(this.getPosts.bind(this));
  }

  async getPost(id) {
    return this.get(id);
  }

  async getPosts(params = {}) {
    return this.get("", params);
  }
}
