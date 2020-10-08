import React from 'react';

const Accordion = ({items})=> {
    const onItemClicked = (index) => {
        console.log('Item clicked', index);
    }
    const renderedItems =  items.map((item,index) => {
        return (<React.Fragment key={item.title}>
        <div className="title active" onClick={() => onItemClicked(index)}>
            <i className="dropdown icon"></i>
            {item.title}
        </div>
        <div className="content active">
            <p>{item.content}</p>
        </div>
        </React.Fragment>  
        )
      })   
      return renderedItems;
 }
export default Accordion;