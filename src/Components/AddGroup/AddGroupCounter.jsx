// import React from "react";
// import "../../sass/styles.scss";

// class AddGroupCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 1,
//       array: [0],
//       names: [""],
//     };
//   }

//   handleSpan = (e) => {
//     e.preventDefault();
//     let tempArr = this.state.array;
//     if (e.currentTarget.innerText === "+") {
//       this.setState(
//         {
//           counter: this.state.counter + 1,
//         },
//         () => {
//           tempArr = Array.from({ length: this.state.counter }, (v, k) => k);
//           this.setState({
//             array: tempArr,
//           });
//         }
//       );
//     }
//     if (e.currentTarget.innerText === "-" && this.state.counter !== 1) {
//       this.setState(
//         {
//           counter: this.state.counter - 1,
//         },
//         () => {
//           tempArr = Array.from({ length: this.state.counter }, (v, k) => k);
//           this.setState({
//             array: tempArr,
//           });
//         }
//       );
//     }
//   };

//   updateMembersNames = (e, indx) => {
//     let updatedNames = [...this.state.names];
//     updatedNames[indx] = e.target.value;
//     this.setState(
//       {
//         names: updatedNames,
//       },
//       () => this.props.updateMembersNames(this.state.names)
//     );
//   };

//   render() {
//     return (
//       <div>
//         <div className="counter">
//           <button
//             className="btn btn-primary"
//             onClick={(e) => this.handleSpan(e)}
//           >
//             -
//           </button>
//           <span>{this.state.counter}</span>
//           <button
//             className="btn btn-primary"
//             onClick={(e) => this.handleSpan(e)}
//           >
//             +
//           </button>
//         </div>
//         {this.state.array.map((indx) => (
//           <div key={indx} className="listOfMembers">
//             <input
//               id="names"
//               type="text"
//               placeholder="Enter Name"
//               className="form-control"
//               onChange={(e) => this.updateMembersNames(e, indx)}
//             />
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default AddGroupCounter;
import React, { useState } from "react";
import "../../sass/styles.scss";

const AddGroupCounter = ({ updateMembersNames }) => {
  const [counter, setCounter] = useState(1);
  const [array, setArray] = useState([0]);
  const [names, setNames] = useState([""]);

  const handleSpan = (e) => {
    e.preventDefault();
    let tempArr = [...array];
    if (e.currentTarget.innerText === "+") {
      setCounter(counter + 1);
      tempArr = Array.from({ length: counter + 1 }, (v, k) => k);
    }
    if (e.currentTarget.innerText === "-" && counter !== 1) {
      setCounter(counter - 1);
      tempArr = Array.from({ length: counter - 1 }, (v, k) => k);
    }
    setArray(tempArr);
  };

  const handleNameUpdate = (e, indx) => {
    let updatedNames = [...names];
    updatedNames[indx] = e.target.value;
    setNames(updatedNames);
    updateMembersNames(updatedNames);
  };

  return (
    <div>
      <div className="counter">
        <button className="btn btn-primary" onClick={handleSpan}>
          -
        </button>
        <span>{counter}</span>
        <button className="btn btn-primary" onClick={handleSpan}>
          +
        </button>
      </div>
      {array.map((indx) => (
        <div key={indx} className="listOfMembers">
          <input
            id="names"
            type="text"
            placeholder="Enter Name"
            className="form-control"
            onChange={(e) => handleNameUpdate(e, indx)}
          />
        </div>
      ))}
    </div>
  );
};

export default AddGroupCounter;
