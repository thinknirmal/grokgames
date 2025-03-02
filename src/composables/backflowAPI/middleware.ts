import axios from 'axios';

export function createMiddleware() {
    const middleware = axios.create({
        baseURL: import.meta.env.VITE_BACKFLOW_API_BASE_URL,
    });

    middleware.interceptors.request.use(
        (config) => {
            config.headers["Cache-Control"] = "no-cache, no-store";
            config.headers.Pragma = "no-cache";
            config.headers.Expires = "0";
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return middleware;
}