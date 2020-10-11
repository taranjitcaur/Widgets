import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const dropDown = [
    {
        'label': 'The color is red',
        'value': 'red'
    },
    {
        'label': 'The color is blue',
        'value': 'blue'
    },
    {
        'label': 'A shade of grey',
        'value': 'grey'
    }
]


export default () => {
    return(
    <div className="ui grid">
        <Dropdown listContent={dropDown} selectVal={'blue'}/>
        <Accordion items={items}/> 
        <Search/>   
    </div>
    );
};


