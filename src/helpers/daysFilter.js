export const daysFilter = (filtrationProp, arr) => {
    let filteredDays = [...arr];
    if (filtrationProp?.typeRadio) {
        filteredDays = [...filteredDays.filter((day) => day.type === filtrationProp.typeRadio)];
    }
    if (filtrationProp?.minTemp) {
        filteredDays = [...filteredDays.filter((day) => day.temperature >= filtrationProp.minTemp)];
    }
    if (filtrationProp?.maxTemp) {
        filteredDays = [...filteredDays.filter((day) => day.temperature <= filtrationProp.maxTemp)];
    }

    return filteredDays;
};
