import React from 'react';

const PageButton = (props) => {
    return (
        <>
            <button className='page_button'>
                {props.label}
            </button>
        </>
    );
};

export default PageButton; 