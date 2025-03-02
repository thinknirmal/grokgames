import { ref } from 'vue';
import { createMiddleware } from './middleware';

export function useBackflowAPI() {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);
    const middleware = createMiddleware();

    const request = async (method: string, endpoint: string, payload?: Record<string, any>, params?: Record<string, any>) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await middleware.request({
                url: endpoint,
                method,
                data: payload,
                params,
            });

            if (response) {
                data.value = response.data;
                return response.data; // Return the data
            }
        } catch (err) {
            error.value = err;
            throw err; // Throw the error
        } finally {
            loading.value = false;
        }
    };

    return {
        data,
        error,
        loading,
        getData: (endpoint: string, params?: Record<string, any>) => request('get', endpoint, undefined, params),
        postData: (endpoint: string, payload?: Record<string, any>, params?: Record<string, any>) => request('post', endpoint, payload, params),
        patchData: (endpoint: string, payload?: Record<string, any>, params?: Record<string, any>) => request('patch', endpoint, payload, params),
        putData: (endpoint: string, payload?: Record<string, any>, params?: Record<string, any>) => request('put', endpoint, payload, params),
        deleteData: (endpoint: string, params?: Record<string, any>) => request('delete', endpoint, undefined, params),
        downloadFile: async (endpoint: string, params?: Record<string, any>) => {
            loading.value = true;
            error.value = null;

            try {
                const response = await middleware.request({
                    url: endpoint,
                    method: 'get',
                    params,
                    responseType: 'blob',
                });

                if (response) {
                    // Get filename from Content-Disposition header
                    const contentDisposition = response.headers['content-disposition'];
                    let filename = 'download';
                    if (contentDisposition) {
                        const filenameMatch = contentDisposition.match(/filename=(.+)/);
                        if (filenameMatch) {
                            filename = filenameMatch[1].replace(/["']/g, '');
                        }
                    }

                    // Create download link and trigger download
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', filename);
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                    window.URL.revokeObjectURL(url);
                }
            } catch (err) {
                error.value = err;
                throw err;
            } finally {
                loading.value = false;
            }
        },
    };
}