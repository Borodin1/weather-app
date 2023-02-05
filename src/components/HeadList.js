import React from 'react';
import { observer } from 'mobx-react-lite';
import { Head, CurrentWeather } from '.';
import { useGetWeather } from '../hooks/useGetWeather';
import { store } from '../lib/mobx';
import { fetchify } from '../helpers';


export const HeadList = observer(() => {
    const { data, isFetched } = useGetWeather();


    const currentDate = data.filter((day) => day.id === store.selectedDayId);

    const renderJSX = currentDate.map((days) => {
        return (
            <React.Fragment key = { days.id }>
                <Head { ...days } />
                <CurrentWeather  { ...days } />
            </React.Fragment>
        );
    });


    return (
        <>
            { fetchify(isFetched, renderJSX) }
        </>
    );
});
