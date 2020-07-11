export const normalizeResponseErrors = res => {
    if (!res.ok) {
        if (
            res.heads.has('content-type') && 
            res.headers.get('content-type').startsWith('application/json')
        )   {
            return res.json().then(err => Promise.reject(err));
        }
        return Promise.reject({
            code: res.status, 
            message: res.statusText
        });
    }
    return res;
}