export default function useFetchGlobal(url, options = {}) {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);
    const {
        signal,
        abort
    } = new AbortController();

    loading.value = true;

    const baseURL = 'http://localhost:3000/api';

    const headers = {
        'Content-Type' : 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer 123456'
    };

    if(options.headers) {
        options.headers = {...headers, ...options.headers};
    }

    const fetchData = async () => {
        try {
            const res = await fetch(`${baseURL}${url}`, {signal, ...options});
            if(!res.ok) {
                error.value = 'Could not fetch data';
            }
            data.value = await res.json();
        } catch (err) {
            error.value = err.message;
        }
        loading.value = false;
    };

    return {data, error, loading, abort, fetchData};
}