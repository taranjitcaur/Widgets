import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);
   const updateStateItem = (index) => {
        setActiveIndex(index);
   }
   const renderedItems =  items.map((item, index) => {  
    const active = (index === activeIndex) ? 'active' : '';
      return(<React.Fragment key={index}>         
        <div className= {`title ${active}`} onClick = {() => updateStateItem(index)}>
          <i className="dropdown icon"></i>
            {item.title}
        </div>
        <div className={`content ${active}`}>
        {item.content}
        </div>
      </React.Fragment>
      )
    }
  )
 return <div className="eight wide column"><label>Questionnaire</label><div className="ui styled accordion">{renderedItems}</div></div>;
}
export default Accordion;