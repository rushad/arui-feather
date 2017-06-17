Обычная ссылка
```
<div>
    {['s', 'm', 'l', 'xl'].map(size => (
        <span className='row'>
            <div className='column'>
                <Link
                    text='Вернуться в интернет-банк'
                    size={ size }
                />
            </div>
        </span>
    ))}
</div>
```
Псевдо ссылка
```
const layoutStyle = {
    paddingRight: '10px'
};
<div>
    {['s', 'm', 'l', 'xl'].map(size => (
        <span className='row'>
            <div className='column'>
                <Link
                    text='Показать больше'
                    size={ size }
                    pseudo={ true }
                />
            </div>
        </span>
    ))}
</div>
```

Ссылки без подчеркивания TODO РОВНЫЕ КОЛОНКИ
```
<div>
    {['s', 'm', 'l', 'xl'].map(size => (
        <span className='row'>
            <div className='column'>
                <Link size={ size } >😊</Link>
            </div>
            
            <div className='column'>
                <Link size={ size } >¯\_(ツ)_/¯</Link>
            </div>
            
        </span>
    ))}
</div>
```
