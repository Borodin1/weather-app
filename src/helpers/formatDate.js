import { format, toDate, setDefaultOptions } from 'date-fns';
import { ru } from 'date-fns/locale';


export const formatDate = (date, formatType) => {
    if (!date) {
        return null;
    }
    setDefaultOptions({ locale: ru });
    const formattedDate = toDate(date);
    const dayName = format(new Date(formattedDate), formatType);

    return dayName;
};
