import React, {useState, useEffect, useRef} from 'react';
const Dropdown = ({listContent}) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setSelected] = useState(false);
    const [isChildSelected, setChildSelected] = useState(false);
    const ref = useRef();
    useEffect(() => {
        document.body.addEventListener('click', (event) => {
          if (ref.current.contains(event.target)) {
            return;
          }    
          setChildSelected(false);
        });
      }, []);
    
    const parentElementClicked = (event) => {
        setSelected(true);
        setChildSelected(!isChildSelected);                
    }  
    const childElementClicked = (event, value) => {
        setSelectedValue(value);
    } 
  
    const renderedItems =  listContent.map((item, index) => {
    return(<div className="item" onClick={(e)=> childElementClicked(e, item.value)} key={item.value}>{item.value}</div>)})
       return(        
        <React.Fragment>     
            <div className="eight wide column" ref={ref}> 
            <div className="eight wide column"><label>Select a color</label></div>         
            <div className={`ui selection dropdown error ${(isSelected ? "active visible" : !isSelected)}`} 
            onClick = {(e) => parentElementClicked(e)}>            
            {selectedValue === '' ? 'Select' : selectedValue}            
            <i className="dropdown icon"></i>
            <div className={`menu transition ${(isChildSelected ? "visible" : "hidden")}`} style={{display: "block !important"}}>
                {renderedItems}
            </div>
            </div></div>
        </React.Fragment>   
        );
    }
export default Dropdown; 