import http from "@/api/http-common"
import authHeader from "./auth-header"
class ArticleData {
    getAll() {
        return http.get("/articles", { headers: authHeader() })
    }

    getArticleFeed(author) {
        return http.get(`/articles/?author=${author}`, { headers: authHeader() })
    }
    getArticle(slug) {
        return http.get(`/articles/${slug}`)
    }
    getAllTags() {
        return http.get(`tags`)
    }
    getArticleLimit() {
        return http.get(`/articles/?limit=2`)
    }
    getArticlePagination(page) {
        return http.get(`/articles/?page=${page}`)
    }
    createArticle(data) {
        return http.post(`/articles`, data, { headers: authHeader() })
    }
    updateArticle(slug, data) {
        return http.put(`/articles/${slug}`, data, { headers: authHeader() })
    }
    delete(slug) {
        return http.delete(`/articles/${slug}`, { headers: authHeader() })
    }
}
export default new ArticleData();