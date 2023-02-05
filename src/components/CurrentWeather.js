export const CurrentWeather = ({
    temperature, rain_probability, humidity, id,
}) => {
    return (
        <div className = 'current-weather' key = { id } >
            <p className = 'temperature'>{ temperature }</p>
            <p className = 'meta'>
                <span className = 'rainy'>% { rain_probability }</span>
                <span className = 'humidity'>%{ humidity }</span>
            </p>
        </div>
    );
};
