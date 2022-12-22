import BrikApi from "./BrikApi";

class RequestRep {
  async getProducts({ page, limit, search, showAll }) {
    try {
      const params = {
        page,
        limit,
        showAll: true,
      };
      if (search) {
        params.search = search;
      }
      // if (showAll) {
      //   params.showAll = showAll;
      // }
      const response = await BrikApi({
        url: `/product`,
        method: `get`,
        params,
      });
      return {
        data: response.data[0],
        totalCount: response.data[1],
      };
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================getProducts");
    }
  }
  async postOrder(payload) {
    try {
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
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================postOrder");
    }
  }
}
export default new RequestRep();
