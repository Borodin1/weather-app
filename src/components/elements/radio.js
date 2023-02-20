import cx from 'classnames';
import { useStore } from '../../hooks';

export const Radio = ({
    type, value, register, selected, setActiveCheckbox,
    label,
}) => {
    const { weatherStore } = useStore();

    const activeClassName = cx('checkbox', {
        selected,
    });

    return (
        <label
            className = { activeClassName }
            onClick = { !weatherStore.filtrationProperties
                ? () => { setActiveCheckbox(value); }
                : null }>
            { label }
            <input
                type = { type }
                value = { value }
                { ... register } />
        </label>
    );
};
