import { deleteProduct } from "./AsyncThunk";
import BrikApi from "./BrikApi";

class RequestRep {
  async getProducts({ page, limit, search, showAll }) {
    const params = {
      page,
      limit,
    };
    if (search) {
      params.search = search;
    }
    if (showAll) {
      params.showAll = showAll;
    }
    const response = await BrikApi({
      url: `/product`,
      method: `get`,
      params,
    });
    return {
      data: response.data[0],
      totalCount: response.data[1],
    };
  }
  async postOrder(payload) {
    const response = await BrikApi({
      method: "post",
      url: `/order`,
      data: payload,
    });
    const product = await this.getProducts({ page: 1 });
    return {
      data: response.data,
      product,
    };
  }

  async deleteProduct(id) {
    const response = await BrikApi({
      method: "delete",
      url: `/product/${id}`,
    });
    const product = await this.getProducts({ page: 1, showAll: true });
    return {
      data: response.data,
      product,
    };
  }

  async createProduct(payload) {
    const response = await BrikApi({
      method: "post",
      url: `/product`,
      data: payload,
    });
    const product = await this.getProducts({ page: 1, showAll: true });
    return {
      data: response.data,
      product,
    };
  }
  async editProduct(payload) {
    const response = await BrikApi({
      method: "put",
      url: `/product`,
      data: payload,
    });
    const product = await this.getProducts({ page: 1, showAll: true });
    return {
      data: response.data,
      product,
    };
  }
}
export default new RequestRep();
