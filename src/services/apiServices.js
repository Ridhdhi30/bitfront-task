import axios from 'axios'
class ApiService {
    BASE_API_URL =  "https://jsonplaceholder.typicode.com";
    reqQueue = {};
    constructor() { }
    async GET(path) {
      try {
        const res = await axios.get(this.BASE_API_URL + path);
        return { data: res.data, error: null };
      } catch (error) {
        return { data: null, error: error.data };
      }
    }
    async getUserProfile() {
        const res = await this.GET("/users");
        return res.data;
    }
    async albumsData(id){
        const res = await this.GET("/users/"+id+"/albums/");
        return res.data;
    }
    async phtotoList(id){
        const res = await this.GET("/albums/"+id+"/photos");
        return res.data;
    }
}

export default new ApiService();