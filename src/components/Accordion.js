import React from 'react';

class Accordion extends React.Component {
       state = {indexClicked:''}
      onItemClicked = (index) => {
        this.setState({indexClicked: index});
      }
      renderedItems =  this.props.items.map((item,index) => {
        return (<React.Fragment key={item.title}>
        <div className="title active" onClick={() => this.onItemClicked(index)}>
            <i className="dropdown icon"></i>
            {item.title}
        </div>
        <div className="content active">
            <p>{item.content}</p>
        </div>
        </React.Fragment>  
        )
      }) 
    
    render() {
       return(
         <div>
          {this.state.indexClicked }
         {this.renderedItems}
         </div>         
         );
      }
  }
export default Accordion;