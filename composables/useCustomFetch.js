export default function useCustomFetch (url, options) {
    const config = useRuntimeConfig();

    return useFetch(
        url, 
        {
            baseURL: config.public.apiBase || 'http://localhost:3000',
            ...options,
        }
    )
}