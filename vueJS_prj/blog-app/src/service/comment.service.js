import http from "@/api/http-common"
import authHeader from "./auth-header"

class CommentData {
    getComment(slug) {
        return http.get(`/articles/${slug}/comments`, { headers: authHeader() })
    }
    createComment(slug, bodyComment) {
        return http.post(`/articles/${slug}/comments`, bodyComment, { headers: authHeader() })
    }
    deleteComment(slug, id) {
        return http.delete(`/articles/${slug}/comments/${id}`, { headers: authHeader() })
    }
}
export default new CommentData();