export const fetchify = (isFetched, content) => {
    if (!isFetched) {
        return 'Загрузка...';
    }

    if (content) {
        return content;
    }

    return null;
};
