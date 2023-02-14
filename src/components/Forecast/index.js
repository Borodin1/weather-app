// Hooks
import { format, toDate, setDefaultOptions } from 'date-fns';
import { ru } from 'date-fns/locale';
import { observer } from 'mobx-react-lite';
import cx from 'classnames';
import { useEffect } from 'react';
import { useGetWeather } from '../../hooks/useGetWeather';

// helpers
import { fetchify } from '../../helpers';
import { useStore } from '../../hooks/useStore';


export const Forecast = observer(() => {
    const { data, isFetched } = useGetWeather();
    const { weatherStore } = useStore();

    const renderDays = data.map(({
        id, type, day, temperature,
    }) => {
        setDefaultOptions({ locale: ru });
        const date = toDate(day);
        const dayName = format(new Date(date), 'EEEE');

        const dayClassname = cx(`day ${type}`, {
            selected: id === weatherStore.selectedDay,
        });

        return (
            <div
                className = { dayClassname } key = { id }
                onClick = { () => weatherStore.setSelectedDayId(id) }>
                <p>{ dayName }</p>
                <span>{ temperature }</span>
            </div>
        );
    });


    return (
        <div className = 'forecast'>
            { renderDays.length
                ? fetchify(isFetched, renderDays)
                : <p className = 'message'>
                По заданным критериям нет доступных дней!
                </p> }

        </div>
    );
});
