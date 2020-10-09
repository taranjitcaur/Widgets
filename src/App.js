import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is React',
        content: 'React is a frontend Javascript framework.'
    },
    {
        title: 'Why use React',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating compenents'
    }
]

export default () => {
    return(
    <div className="ui grid">
        <Accordion items={items}/>   
        <Search/>  
    </div>
    );
};

