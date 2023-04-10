import http from "@/api/http-common"
import authHeader from "./auth-header"

class favoriteData {
    favorite(slug) {
        return http.post(`/articles/${slug}/favorite`, { headers: authHeader() })
    }
    unFavorite(slug) {
        return http.delete(`/article/${slug}/favorite`, { headers: authHeader() })
    }
}
export default new favoriteData();