
```
function renderAddons() {
    return (
        <RadioGroup type={ 'button' }>
            {['₽', '$', '€'].map(item =>
                <Radio
                    key={ item }
                    size='m'
                    type={ 'button' }
                    text={ item }
                />
            )}
        </RadioGroup>
    );
}
<div>
    <Input
        size='m'
        placeholder='Введите сумму'
        rightAddons={ renderAddons() }
        maskFormatCharacters={{validate: (symb)=> parseInt(sym)}}
    />
</div>    
```

Обычные
```
const sizes = ['s', 'm', 'l', 'xl'];
<div>
    {sizes.map(size => (
        <div className='row'>
             <Input
                placeholder='Введите что-нибудь'
                view='line'
                size={ size }
             />
        </div>
    ))}
</div>
```

С крестиком "Очистить" TODO
```
const sizes = ['s', 'm', 'l', 'xl'];
<div>
    {sizes.map(size => (
        <div className='row'>
             <Input
                placeholder='Введите что-нибудь'
                value='Корм для кота'
                clear={ true }
                view='line'
                size={ size }
             />
        </div>
    ))}
</div>
```

С шириной 100%
```
const sizes = ['s', 'm', 'l', 'xl'];
<div>
    {sizes.map(size => (
        <div className='row'>
             <Input
                placeholder='Введите что-нибудь длинное'
                width='available'
                view='line'
                size={ size }
             />
        </div>
    ))}
</div>
```

С ошибкой
```
const sizes = ['s', 'm', 'l', 'xl'];
<div>
    {sizes.map(size => (
        <div className='row'>
             <Input
                placeholder='Введите что-нибудь'
                error='Только кириллические символы'
                view='line'
                size={ size }
                value={'Конsтантин'}
             />
        </div>
    ))}
</div>
```

С Иконкой
```
const sizes = ['s', 'm', 'l', 'xl'];
<div>
    {sizes.map(size => (
        <div className='row'>
             <Input
                placeholder='Введите ваше имя'
                view='line'
                size={ size }
                icon={ <Icon size={ size } icon='user' /> }
             />
        </div>
    ))}
</div>
```

Disabled
```
const sizes = ['s', 'm', 'l', 'xl'];
<div>
    {sizes.map(size => (
        <div className='row'>
             <Input
                placeholder='Введите ваше имя'
                disabled={ true }
                view='line'
                size={ size }
             />
        </div>
    ))}
</div>
```