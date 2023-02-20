import { format, toDate, setDefaultOptions } from 'date-fns';
import { ru } from 'date-fns/locale';
import { formatDate } from '../../helpers/formatDate';

export const Head = ({
    id, type, day,
}) => {
    return (
        <div className = 'head' key = { id }>
            <div className = { `icon ${type}` }></div>
            <div className = 'current-date'>
                <p>{ formatDate(day, 'EEEE') }</p>
                <span>{ ` ${formatDate(day, 'e')} ${formatDate(day, 'MMMM')} ` }</span>
            </div>
        </div>

    );
};
