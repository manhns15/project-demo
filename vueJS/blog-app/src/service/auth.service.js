import http from '@/api/http-common'
class AuthService {
    login(user) {
        return http.post("/users/login", {
            user: {
                email: user.email,
                password: user.password
            }
        }).then(res => {
            if (res.data.user.token) {
                localStorage.setItem('user', JSON.stringify(res.data))
            }
            return res.data
        })
    }
    logout() {
        localStorage.removeItem('user')
    }
    register(user) {
        return http.post("/users",
            {
                user: {
                    username: user.username,
                    email: user.email,
                    password: user.password
                }
            })
    }
}
export default new AuthService()