import { format, toDate, setDefaultOptions } from 'date-fns';
import { ru } from 'date-fns/locale';

export const Head = ({
    id, type, day,
}) => {
    setDefaultOptions({ locale: ru });
    const date = toDate(day);

    const weekName = format(new Date(date), 'EEEE');
    const dayName = format(new Date(date), 'd');
    const monthName = format(new Date(date), 'MMMM');

    return (
        <div className = 'head' key = { id }>
            <div className = { `icon ${type}` }></div>
            <div className = 'current-date'>
                <p>{ weekName }</p>
                <span>{ ` ${dayName} ${monthName} ` }</span>
            </div>
        </div>

    );
};
