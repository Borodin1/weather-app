import {  computed, makeAutoObservable } from 'mobx';

export class WeatherStore {
    isFiltered = false;
    dayId = '';
    activeBox = '';
    filtrationProp = null;

    constructor() {
        makeAutoObservable(
            this,
            { rootStore: false },
            // { filtrationProp: computed },
            {
                autoBind: true,
            },
        );
    }

    get filtrationProperties() {
        return this.filtrationProp;
    }

    setFiltrationProperties(props) {
        this.filtrationProp = props;
    }

    resetFilter() {
        this.filtrationProp = null;
    }


    setType(type) {
        this.type = type;
    }

    get activeCheckbox() {
        return this.activeBox;
    }

    setActiveCheckbox(type) {
        this.activeBox = type;
    }

    setMinTemperature(temp) {
        this.minTemperature = temp;
    }

    setMaxTemperature(temp) {
        this.maxTemperature = temp;
    }


    get isFormBlocked() {
        return (
            this.type === ''
            && this.minTemperature === ''
            && this.maxTemperature === ''
        );
    }

    get selectedDayId() {
        return this.dayId;
    }

    setSelectedDayId(day) {
        this.dayId = day;
    }

    get selectedType() {
        return this.type;
    }
}

export const store = new WeatherStore();
