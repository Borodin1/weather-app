// Core
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import { useStore } from '../hooks';

// other
import { Input } from '../components/elements/input';


export const FilterWeather = observer(() => {
    const [activeCheckBox, setActiveCheckbox] = useState('');
    const { weatherStore } = useStore();
    const {
        register, handleSubmit, watch, formState, reset,
    } = useForm({
        defaultValues: {
            minTemp: null,
            maxTemp: null,
        },
    });
    const valueRadio = {
        cloudy: 'cloudy',
        sunny:  'sunny',
    };

    const onReset = () => {
        weatherStore.resetFilter();
        setActiveCheckbox('');
        reset();
    };

    const onSubmit = (data) => {
        if (data.minTemp && data.maxTemp) {
            weatherStore.setFiltrationProperties(data);
        }
    };


    return (
        <form
            className = 'filter'
            onSubmit = { handleSubmit(onSubmit) }>

            <Input
                type = 'radio'
                label = 'Облачно'
                setActiveCheckbox = { setActiveCheckbox }
                selected = { activeCheckBox === valueRadio.cloudy }
                value = { valueRadio.cloudy }
                register = { register('typeRadio') } />

            <Input
                type = 'radio'
                label = 'Солнечно'
                setActiveCheckbox = { setActiveCheckbox }
                selected = { activeCheckBox === valueRadio.sunny }
                value = { valueRadio.sunny }
                register = { register('typeRadio') } />


            <Input
                type = 'number'
                register = { register('minTemp') }
                label = 'Минимальная температура' />

            <Input
                type = 'number'
                register = { register('maxTemp') }
                label = 'Максимальная температура' />

            { !weatherStore.filtrationProperties
                ? <button
                    disabled = { _.isEqual(watch(), formState.defaultValues) }
                    type = 'submit'>Отфильтровать</button>
                : <button
                    onClick = { onReset }>Сбросить</button>
            }
        </form>
    );
});
