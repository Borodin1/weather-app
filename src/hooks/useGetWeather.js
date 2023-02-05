import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { api } from '../api/api';
import { store } from '../lib/mobx';

export const useGetWeather = () => {
    const query = useQuery('weather', api.getWeather);
    const { data, isFetched } = query;

    useEffect(() => {
        if (!store.selectedDayId && Array.isArray(data) && data?.length) {
            store.setSelectedDayId(data[ 0 ].id);
        }
    }, [data]);

    return {
        data: Array.isArray(data) ? data : [],
        isFetched,
    };
};
