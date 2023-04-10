import axios from "axios"
export default axios.create({
    // baseURL: "http://localhost:3000",
    baseURL: "https://conduit.productionready.io/api",

    headers: {
        "Content-type": "application/json"
    },

})