import React from "react";

class Square extends React.Component{
 render() {
     return (
     <button className = "square" onClick={function(){alert("clicked");}}>
         {this.props.data}
         </button>
 )
}
}

export default Square