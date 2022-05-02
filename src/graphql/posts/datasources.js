import { RESTDataSource } from "apollo-datasource-rest";
import { makeDataLoader } from "../../utils/makeDataLoader";
import { createNewPost } from "./utils/validateData";

export class PostsAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = `${process.env.API_BASE_URL}posts`;
    this.dataLoader = makeDataLoader.posts(this.getPosts.bind(this));
  }

  async getPost(id) {
    return this.get(id, undefined, {
      cacheOptions: {
        ttl: 60 * 60 // 1 hours
      }
    });
  }

  async getPosts(params = {}) {
    return this.get("", params, {
      cacheOptions: {
        ttl: 60 * 60 // 1 hours
      }
    });
  }

  async createPost(data) {
    createNewPost(data, this);

    return data;
  }
}
