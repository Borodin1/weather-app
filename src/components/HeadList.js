// Core
import React, { useEffect, useState } from 'react';

// MobX
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';
// Components
import { Head, CurrentWeather } from './Head';

// Hooks
import { useGetWeather } from '../hooks/useGetWeather';
import { useStore } from '../hooks/useStore';

// helpers
import { fetchify } from '../helpers';


export const HeadList = observer(() => {
    const { data, isFetched } = useGetWeather();
    const { weatherStore } = useStore();
    const [filterDays, setFilterDays] = useState(null);

    useEffect(() => {
        runInAction(() => {
            if (weatherStore.filtrationProperties) {
                setFilterDays(data[ 0 ]);
            }
        });
    }, [weatherStore.filtrationProperties]);

    console.log(weatherStore.selectedDayId);

    const currentDate = data.filter((day) => day.id === weatherStore.selectedDayId);

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
