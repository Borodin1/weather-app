// Components
import { observer } from 'mobx-react-lite';
import {
    Forecast, HeadList,
} from './components';
import { FilterWeather } from './forms/FilterWeather';


// Instruments


export const App = observer(() => {
    return (
        <main >
            <FilterWeather />
            <HeadList />
            <Forecast />
        </main>
    );
});

