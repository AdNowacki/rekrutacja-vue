export const formatDate = (isoString) => {
    if (!isoString) return '';

    const date = new Date(isoString);

    return new Intl.DateTimeFormat('pl-PL', {
        dateStyle: 'short',
        timeStyle: 'short',
        hour12: false
    }).format(date);
}
