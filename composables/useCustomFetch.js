export default function useCustomFetch (url, options) {
    const config = useRuntimeConfig();

    return useFetch(
        url, 
        {
            baseURL: config.public.baseURL || 'http://localhost:3000',
            ...options,
        }
    )
}