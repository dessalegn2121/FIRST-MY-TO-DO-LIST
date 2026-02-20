import React from 'react'


const Programming = () => { 
    const Program = [
        'Python','Java','C++','JavaScript',
    ];

    return ( 
        <div className="program">
            {Program.map((name, index) => (
                <h1 key={index}>{name}</h1>
            ))}
        </div>
    );
}

export default Programming;
