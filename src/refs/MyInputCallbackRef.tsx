import React from 'react';
import './styles.css';
class MyInputCallbackRef extends React.PureComponent {
  inputTextCallbackRef: HTMLInputElement | null = null;
  constructor(props: any) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentDidMount() {
    console.log(this.inputTextCallbackRef);
  }

  //When you need refs instead of ID’s ?

  // works when focusing the input field.
  onFocus() {
    console.log(this.inputTextCallbackRef);
    //@ts-ignore
    this.inputTextCallbackRef.setAttribute(
      'class',
      'input__field input__field--highlighted'
    );
  }

  // works when exitting from the input field.
  onBlur() {
    //@ts-ignore
    this.inputTextCallbackRef.setAttribute('class', 'input__field');
  }

  render() {
    return (
      <>
        <div>
          <span> Input Text: </span>
          <input
            type='text'
            id='inputText'
            className='input__field'
            ref={elem => {
              this.inputTextCallbackRef = elem;
            }}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </div>
      </>
    );
  }
}

export default MyInputCallbackRef;
