<<<<<<< HEAD
=======
Обычная ссылка
```
<div>
    {['s', 'm', 'l', 'xl'].map(size => (
        <span className='row'>
            <div className='column'>
                <Link
                    text='Ссылка'
                    size={ size }
                />
            </div>
            <div className='column'>
                <Link
                    text='Ссылка'
                    size={ size }
                    disabled={ true }
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
                    text='Ссылка'
                    size={ size }
                    pseudo={ true }
                />
            </div>
            <div className='column'>
                <Link 
                    text='Ссылка'
                    size={ size }
                    pseudo={ true }
                    disabled={ true }
                />
            </div>
        </span>
    ))}
</div>
```

```
const layoutStyle = {
    paddingRight: '10px'
};
const iconStyle = {
    marginRight: '5px'
};
<div>
<<<<<<< HEAD
    {['', 'pseudo', 'disabled', 'checked'].map(mod => (
        <div key={ mod }>
            {['s', 'm', 'l', 'xl'].map(size => {
                const props = {
                    text: `${mod ? `${mod} ` : ''}link`,
                    size,
                    [mod]: true
                };
                return  (
                    <span style={ layoutStyle }>
                        <Link { ...props } >
                            <Icon { ...props }
                                style={ iconStyle }
                                icon='ok' />
                        </Link>
                    </span>
                );
            })}
        </div>
=======
    {['s', 'm', 'l', 'xl'].map(size => {
        const props = {
            text: 'Ссылка',
            size
        };
        return (
            <span className='row' >
                <Link { ...props } >
                    <div style={ iconStyle }>
                        <Icon { ...props } 
                            style={ iconStyle }
                            icon='ok'
                        />
                    </div>
                </Link>
            </span>
        );
    })}
</div>
```

Ссылки без подчеркивания
```
<div>
    {['s', 'm', 'l', 'xl'].map(size => (
        <span className='row'>
            <div className='column'>
                <Link size={ size } >😊</Link>
            </div>
            <div className='column'>
                <Link size={ size } disabled={ true } >😊</Link>
            </div>
        </span>
    ))}
</div>
```
