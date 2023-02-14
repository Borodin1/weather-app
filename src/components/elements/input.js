import cx from 'classnames';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/useStore';

export const Input = observer((props) => {
    const { weatherStore } = useStore();

    const input = (
        <input
            type = { props.type }
            value = { props.value }
            { ... props.register } />
    );

    const activeClassName = cx('checkbox', {
        selected: props.selected,
    });


    return (
        props.type === 'radio' ? (
            <label
                className = { activeClassName }
                onClick = { !weatherStore.filtrationProperties
                    ? () => { props.setActiveCheckbox(props.value); }
                    : null }>
                { props.label }
                { input }
            </label>
        )
            : (
                <p className = 'custom-input'>
                    <label>{ props.label }</label>
                    { input }
                </p>


            )
    );
});
