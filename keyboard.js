import React from 'react'

class Keyboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }


  componentDidMount(){
    const keys = document.querySelectorAll(".keyboard-row button")
    console.log(keys.length)
    for (let i = 0; i < keys.length; i++) {
      keys[i].onclick = ({ target }) => {
        const key = target.getAttribute("data-key");
        this.props.onKeyClicked(key);
        console.log(key);
      };
  }
  }

  render(){
    return(
      <div>
      <div class="keyboard-container">
      <div class="keyboard-row">
          <button data-key="q">q</button>
          <button data-key="w">w</button>
          <button data-key="e">e</button>
          <button data-key="r">r</button>
          <button data-key="t">t</button>
          <button data-key="y">y</button>
          <button data-key="u">u</button>
          <button data-key="i">i</button>
          <button data-key="o">o</button>
          <button data-key="p">p</button>
        </div>

        <div class="keyboard-row">
          <div class="spacer-half"></div>
          <button data-key="a">a</button>
          <button data-key="s">s</button>
          <button data-key="d">d</button>
          <button data-key="f">f</button>
          <button data-key="g">g</button>
          <button data-key="h">h</button>
          <button data-key="j">j</button>
          <button data-key="k">k</button>
          <button data-key="l">l</button>
          <div class="spacer-half"></div>
        </div>

        <div class="keyboard-row">
          <button data-key="enter" class="wide-button">Enter</button>
          <button data-key="z">z</button>
          <button data-key="x">x</button>
          <button data-key="c">c</button>
          <button data-key="v">v</button>
          <button data-key="b">b</button>
          <button data-key="n">n</button>
          <button data-key="m">m</button>
          <button data-key="del" class="wide-button">Delete</button>
        </div>
  </div>
      </div>      
  )
  }
  
    
}

export default Keyboard;

/*
const keys = document.querySelectorAll(".keyboard-row button");

for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const key = target.getAttribute("data-key");

      console.log(key);
    };
}
*/
