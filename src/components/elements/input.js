import cx from 'classnames';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';

export const Input = observer(({
    type, value, register, label,
}) => {
    return (
        <p className = 'custom-input'>
            <label>{ label }</label>
            <input
                type = { type }
                value = { value }
                { ... register } />
        </p>

    );
});
