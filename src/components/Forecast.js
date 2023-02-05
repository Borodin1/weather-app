// Hooks
import { format, toDate, setDefaultOptions } from 'date-fns';
import { ru } from 'date-fns/locale';
import { observer } from 'mobx-react-lite';
import cx from 'classnames';
import { useGetWeather } from '../hooks/useGetWeather';
import { store } from '../lib/mobx';

// helpers
import { fetchify } from '../helpers';


export const Forecast = observer(() => {
    const { data:weather, isFetched } = useGetWeather();

    const days = weather?.slice(0, 7);
    const renderDays = days.map(({
        id, type, day, temperature,
    }) => {
        setDefaultOptions({ locale: ru });
        const date = toDate(day);
        const dayName = format(new Date(date), 'EEEE');

        const dayClassname = cx(`day ${type}`, {
            selected: id === store.dayId,
        });

        return (
            <div
                className = { dayClassname } key = { id }
                onClick = { () => store.setSelectedDayId(id) }>
                <p>{ dayName }</p>
                <span>{ temperature }</span>
            </div>
        );
    });


    return (
        <div className = 'forecast'>
            { fetchify(isFetched, renderDays) }
        </div>
    );
});
