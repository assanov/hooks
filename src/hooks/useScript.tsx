import useAsync from './useAsync';

function useScript(url: string) {
    return useAsync(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;

        return new Promise((resolve, rejected) => {
            script.addEventListener('load', resolve);
            script.addEventListener('error', rejected);
            document.body.appendChild(script);
        });
    }, [url]);
}
export default useScript;
