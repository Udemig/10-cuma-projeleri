const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e52e3bfef4msh2b3dc66d0cfb4a8p16624ejsn1c91d9af0240",
    "x-rapidapi-host": "twitter-api45.p.rapidapi.com",
  },
};
const baseUrl = "https://twitter-api45.p.rapidapi.com";

export class API {
  constructor() {}
  // Kullanıcı Verisi
  async getuser(username) {
    try {
      const res = await fetch(
        `https://twitter-api45.p.rapidapi.com/screenname.php?screenname=${username}`,
        options
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("Error:", err);
    }
  }
  // Diğer Veriler
  async fetchData(endpoint, paramName, paramValue) {
    try {
      const res = await fetch(
        ` ${baseUrl}${endpoint}?${paramName}=${paramValue}`,
        options
      );
      const data = await res.json();
      // console.log(data);
      return data;
    } catch (err) {
      console.log("Error:", err);
    }
  }
}
