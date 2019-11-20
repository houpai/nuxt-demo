import axios from "axios";

export default function({ route }) {
  console.log("调用了中间件", route);
//   return axios.post("http://my-stats-api.com", {
//     url: route.fullPath
//   });
}
