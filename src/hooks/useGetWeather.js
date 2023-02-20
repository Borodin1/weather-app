import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { api } from '../api/api';
import { daysFilter } from '../helpers/daysFilter';
import { useStore } from './useStore';

export const useGetWeather = () => {
    const query = useQuery('weather', api.getWeather);
    const { data, isFetched, isSuccess } = query;
    const { weatherStore } = useStore();


    const getData = () => {
        if (isSuccess && Array.isArray(data)) {
            if (weatherStore.filtrationProperties) {
                return [...daysFilter(weatherStore.filtrationProperties, data)].slice(0, 7);
            }

            return data.slice(0, 7);
        }
    };

    useEffect(() => {
        if (Array.isArray(data) && data?.length) {
            weatherStore.setSelectedDayId(data[ 0 ]?.id);
        }
    }, [data]);


    return {
        data: Array.isArray(data) ? getData()  : [],
        isFetched,
    };
};
