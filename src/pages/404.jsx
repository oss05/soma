import React from 'react';
import '../scss/Error.scss';

export default function Error() {
    return (
        <div className="error-container">
           <div className="code-area">
                <span style={{color: '#777', fontStyle: 'italic'}}>
                    / 404 page not found.
                </span>
                <span>
                <span style={{color: '#d65562'}}>
                    if
                </span>
                (<span style={{color: '#4ca8ef'}}>!</span><span style={{fontStyle: 'italic', color: '#bdbdbd'}}>found</span>)
                    {'{'}
                </span>
                <span>
                    <span style={{paddingLeft: 15, color: '#2796ec'}}>
                        <i style={{width: 10, display: 'inline-block'}} />throw
                    </span>
                    <span>
                        (<span style={{color: '#a6a61f'}}>"(╯°□°)╯︵ ┻━┻"</span>);
                    </span>
                    <span style={{display: 'block'}}>{'}'}</span>
                    <span style={{color: '#777', fontStyle: 'italic'}}>
                        / <a href="/">Go home!</a>
                    </span>
                </span>
            </div>
        </div>
    )
}
