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
}
export default new RequestRep();
