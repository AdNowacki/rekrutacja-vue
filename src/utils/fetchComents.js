export const fetchComments = async () => {
    try {
        const result = await fetch('/comments.json');
        return await result.json();
    } catch (error) {
        throw Error(error);
    }
}