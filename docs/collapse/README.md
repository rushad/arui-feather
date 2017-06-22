# Collapse

Компонент "подката": позволяет спрятать кусок текста за ссылку "Еще...".

```javascript
import Collapse from 'arui-feather/collapse';
```




## Props


| Prop  | Тип  | По умолчанию | Обязательный | Описание |
| ----- | ---- | ------------ | ------------ |----------|
| isExpanded | Boolean | `false`  |  | Управление состоянием `expand`/`collapse` компонента |
| collapsedLabel | String | `'Expand'`  |  | Текст ссылки в `expand` состоянии |
| expandedLabel | String |  |  | Текст ссылки в `collapse` состоянии |
| direction | [DirectionEnum](#DirectionEnum) | `'up'`  |  | Направление раскрытия collapse, вниз (down) или наверх (up), по умолчанию он расскрывается вверх |
| children | Array.<Node>\|Node |  |  | Дочерние элементы `Collapse` |
| theme | [ThemeEnum](#ThemeEnum) |  |  | Тема компонента |
| className | Function\|String |  |  | Дополнительный класс |
| onExpandedChange | Function |  |  | Обработчик смены состояния `expand`/`collapse` возвращает true или false |







## Типы






### <a id="DirectionEnum"></a>DirectionEnum

 * `'up'`
 * `'down'`


### <a id="ThemeEnum"></a>ThemeEnum

 * `'alfa-on-color'`
 * `'alfa-on-white'`



