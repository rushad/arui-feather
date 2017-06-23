# Collapse

Компонент "подката": позволяет спрятать кусок текста за ссылку "Еще...".

```javascript
import Collapse from 'arui-feather/collapse';
```




## Props


| Prop  | Тип  | По умолчанию | Обязательный | Описание |
| ----- | ---- | ------------ | ------------ |----------|
| isExpanded | Boolean |  |  | Управление состоянием `expand`/`collapse` компонента |
| collapsedLabel | String | `'Раскрыть'`  |  | Текст ссылки в `expand` состоянии |
| expandedLabel | String | `'Закрыть'`  |  | Текст ссылки в `collapse` состоянии, можно указать состояниме null и тогда он не будет показан |
| direction | [DirectionEnum](#DirectionEnum) | `'up'`  |  | Направление раскрытия collapse, вниз (down) или наверх (up), по умолчанию он расскрывается вверх |
| children | Array.<Node>\|Node |  |  | Дочерние элементы `Collapse` |
| theme | [ThemeEnum](#ThemeEnum) |  |  | Тема компонента |
| className | Function\|String |  |  | Дополнительный класс |
| onExpandedChange | Function |  |  | Обработчик смены состояния `expand`/`collapse` |







## Типы






### <a id="DirectionEnum"></a>DirectionEnum

 * `'up'`
 * `'down'`


### <a id="ThemeEnum"></a>ThemeEnum

 * `'alfa-on-color'`
 * `'alfa-on-white'`



