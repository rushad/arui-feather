/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { autobind } from 'core-decorators';
import createFragment from 'react-addons-create-fragment';
import React from 'react';
import Type from 'prop-types';

import cn from '../cn';
import performance from '../performance';

/**
 * Компонент группы радио-кнопок.
 */
@cn('radio-group')
@performance()
class RadioGroup extends React.Component {
    static propTypes = {
        /** Тип группы кнопок */
        type: Type.oneOf(['normal', 'button', 'line']),
        /** Значение выбранной радио-кнопки */
        value: Type.string,
        /** Отображение попапа с ошибкой в момент когда фокус находится на компоненте */
        error: Type.node,
        /** Управление шириной группы кнопок для типа 'button'. При значении 'available' растягивает группу на ширину родителя */
        width: Type.oneOf(['default', 'available']),
        /** Уникальное имя блока */
        name: Type.string,
        /** Управление возможностью изменения состояния 'checked' дочерних компонентов `Radio` */
        disabled: Type.bool,
        /** Дочерние элементы `RadioGroup`, как правило, компоненты `Radio` */
        children: Type.oneOfType([Type.arrayOf(Type.node), Type.node]),
        /** Тема компонента */
        theme: Type.oneOf(['alfa-on-color', 'alfa-on-white']),
        /** Дополнительный класс */
        className: Type.oneOfType([Type.func, Type.string]),
        /** Лейбл для группы */
        label: Type.node,
        /** Обработчик фокуса радиогруппы */
        onFocus: Type.func,
        /** Обработчик снятия фокуса с радиогруппы */
        onBlur: Type.func,
        /** Обработчик изменения значения 'checked' одного из дочерних радио-кнопок */
        onChange: Type.func
    };

    static defaultProps = {
        type: 'normal'
    };

    state = {
        value: '',
        focused: false
    };

    render(cn) {
        let children = null;
        let props = { name: this.props.name };
        let radioGroupParts = {};

        if (this.props.disabled !== undefined) {
            props.disabled = this.props.disabled;
        }

        if (this.props.children) {
            children = this.props.children.length ? this.props.children : [this.props.children];
        }

        if (this.props.type === 'button') {
            props = { ...props, width: this.props.width };
        }

        if (children) {
            this.radios = [];

            let value = this.props.value !== undefined
                ? this.props.value
                : this.state.value;

            React.Children.forEach(children, (radio, index) => {
                radioGroupParts[`radio-${index}`] = React.cloneElement(radio, {
                    ref: radio => this.radios.push(radio),
                    error: radio.props.error !== undefined
                        ? radio.props.error : Boolean(this.props.error),
                    checked: radio.props.checked !== undefined
                        ? radio.props.checked : (value === radio.props.value),
                    onChange: radio.props.onChange !== undefined
                        ? radio.props.onChange : this.handleRadioChange,
                    ...props
                });
            });
        }
        return (
            <span
                className={
                    `${cn({
                        type: this.props.type,
                        invalid: !!this.props.error,
                        ...props
                    })} control-group${this.props.error ? ' control-group_invalid' : ''}`
                }
                role='group'
                tabIndex='-1'
                onFocus={ this.handleFocus }
                onBlur={ this.handleBlur }
            >
                {
                    !!this.props.label &&
                    <div className={ cn('label') }>
                        { this.props.label }
                    </div>
                }
                { createFragment(radioGroupParts) }
                {
                    this.props.error &&
                    <span className={ cn('sub') }>
                        { this.props.error }
                    </span>
                }
            </span>
        );
    }

    @autobind
    handleRadioChange(value) {
        if (this.state.value !== value) {
            this.setState({ value });

            if (this.props.onChange) {
                this.props.onChange(value);
            }
        }
    }

    @autobind
    handleFocus(event) {
        this.setState({ focused: true });

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    @autobind
    handleBlur(event) {
        this.setState({ focused: false });

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    /**
     * Устанавливает фокус на первую радиокнопку в группе.
     *
     * @public
     */
    focus() {
        if (this.radios && this.radios[0]) {
            this.radios[0].focus();
        }
    }

    /**
     * Убирает фокус с группы радио-кнопок.
     *
     * @public
     */
    blur() {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    }
}

export default RadioGroup;
