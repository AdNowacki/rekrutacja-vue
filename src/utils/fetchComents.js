export const fetchComments = async () => {
    try {
        const result = await fetch('/comments.json');
        const data = await result.json();
        return data;
    } catch (error) {
        throw Error(error);
    }
}