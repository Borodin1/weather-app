// Components

import {
    Filter, Forecast, HeadList, Weather,
} from './components';


// Instruments


export const App = () => {
    return (
        <main >
            <Filter />
            <HeadList />
            <Forecast />
        </main>
    );
};

