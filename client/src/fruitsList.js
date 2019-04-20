import React, { Component } from "react";
import OneFruit from "./oneFruit";

class FruitsList extends Component {
  state = {
    fruits: [
      { name: "apple", color: "red", shape: "round" },
      { name: "banana", color: "yellow", shape: "cylinder" },
      { name: "orange", color: "orange", shape: "round" }
    ]
  };

  render() {
    const allFruits = this.state.fruits.map((fruit, index) => {
      return (
        <div>
          <OneFruit
            key={index}
            name={fruit.name}
            color={fruit.color}
            shape={fruit.shape}
          />
        </div>
      );
    });

    return (
      <div>
        <h1>Fruits List</h1>
        {allFruits}
      </div>
    );
  }
}

export default FruitsList;
