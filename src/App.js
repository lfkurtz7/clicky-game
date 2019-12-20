import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import imagesJSON from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images: [],
    clicked: [],
    score: 0,
    highScore: 0
  };

  componentDidMount() {
    this.setState({ images: this.shuffle(imagesJSON), highScore: parseInt(localStorage.getItem("highScore")) || 0 })
  }

  shuffle = arr => {
    for (let i = 0; i < arr.length; i++) {
      let randIndex = Math.floor(Math.random() * arr.length);
      let tempOne = arr[i];
      let tempTwo = arr[randIndex];
      arr[i] = tempTwo
      arr[randIndex] = tempOne
    }
    return arr
  };

  // reset = () => {
  // let newArr = this.state.images.map(img => {
  //   img.clicked = false;
  //   return img
  // });
  // this.setState({ images: this.shuffle(newArr) }, () => console.log(this.state.images))
  // }

  handleClick = id => {
    let found = this.state.clicked.includes(id);
    console.log(found)
    if (found) {
      this.setState({
        clicked: [],
        images: this.shuffle(this.state.images),
        score: 0,
        highScore: this.state.highScore > this.state.score ? this.state.highScore : this.state.score
      }, () => localStorage.setItem("highScore", this.state.highScore))
    } else {
      this.setState({
        clicked: [...this.state.clicked, id],
        images: this.shuffle(this.state.images),
        score: this.state.score + 1
      }, () => console.log(this.state))
    }
    // let double = false;
    // this.state.images.map(img => {
    //   if (img.id === id) {
    //     if (img.clicked) {
    //       double = true
    //     } else {
    //       img.clicked = true
    //     }
    //   }

    //   return img
    // })
    // if (double) {
    //   this.reset();
    //   console.log("Game Over")
    // } else {
    //   this.setState({ images: this.shuffle(this.state.images) })
    // }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Matisse Clicky Game</Title> 
        <Title> Current Score: {this.state.score} High Score: {this.state.highScore}</Title>
        {this.state.images.map(image => (
          <ImageCard
            handleClick={this.handleClick}
            id={image.id}
            key={image.id}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
