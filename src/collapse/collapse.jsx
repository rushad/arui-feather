/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { autobind } from 'core-decorators';
import React from 'react';
import Type from 'prop-types';

import Link from '../link/link';
import SlideDown from '../slide-down/slide-down';

import cn from '../cn';
import performance from '../performance';

/**
 * Компонент "подката": позволяет спрятать кусок текста за ссылку "Еще...".
 */
@cn('collapse')
@performance()
class Collapse extends React.Component {
    static propTypes = {
        /** Управление состоянием `expand`/`collapse` компонента */
        isExpanded: Type.bool,
        /** Текст ссылки в `expand` состоянии */
        collapsedLabel: Type.string,
        /** Текст ссылки в `collapse` состоянии */
        expandedLabel: Type.string,
        /** Направление раскрытия collapse, вниз (down) или наверх (up), по умолчанию он расскрывается вверх */
        direction: Type.oneOf(['up', 'down']),
        /** Дочерние элементы `Collapse` */
        children: Type.oneOfType([Type.arrayOf(Type.node), Type.node]),
        /** Тема компонента */
        theme: Type.oneOf(['alfa-on-color', 'alfa-on-white']),
        /** Дополнительный класс */
        className: Type.oneOfType([Type.func, Type.string]),
        /** Обработчик смены состояния `expand`/`collapse` возвращает true или false */
        onExpandedChange: Type.func
    };

    static defaultProps = {
        collapsedLabel: 'Expand',
        direction: 'up',
        isExpanded: false
    };

    state = {
        isExpanded: this.props.isExpanded
    };

    render(cn) {
        return this.props.direction === 'up' ? this.renderUp(cn) : this.renderDown(cn);
    }

    renderDown(cn) {
        return (
            <div className={ cn }>
                { this.renderExpandedLink(cn) }
                { this.renderSlideDown() }
            </div>
        );
    }

    renderUp(cn) {
        return (
            <div className={ cn }>
                { this.renderSlideDown() }
                { this.renderExpandedLink(cn) }
            </div>
        );
    }

    renderSlideDown() {
        return (
            <SlideDown
                isExpanded={ this.state.isExpanded }
            >
                { this.props.children }
            </SlideDown>
        );
    }

    renderExpandedLink(cn) {
        return (
            <Link
                className={ cn('link') }
                pseudo={ true }
                onClick={ this.handleExpandedChange }
                text={ this.renderText() }
            />
        );
    }

    renderText() {
        if (this.props.expandedLabel) {
            return this.state.isExpanded
                ? this.props.expandedLabel
                : this.props.collapsedLabel;
        }

        return this.props.collapsedLabel;
    }

    @autobind
    handleExpandedChange() {
        const newExpandedValue = !this.state.isExpanded;
        this.setState({
            isExpanded: newExpandedValue
        });
        if (this.props.onExpandedChange) {
            this.props.onExpandedChange(newExpandedValue);
        }
    }
}

export default Collapse;
