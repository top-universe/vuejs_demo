const axios = require("axios");
const BASE = "http://localhost:3000";

/**
 * This is a facade class to bla bla
 * */

module.exports = class Axios {
  /**
   *
   * @param {*} action -> http verbs such as get and post
   * @param {*} endpoint -> api endpoint e.g /profiles
   * @param {*} data -> request data
   * @param {*} headers -> http headers
   * @returns
   */
  static async call(action, endpoint, data, headers) {
    try {
      var config = {
        method: action,
        url: `${BASE}/${endpoint}`,
        headers: headers,
        data: data,
      };

      return await axios(config);
    } catch (err) {
      throw err;
    }
  }
}
