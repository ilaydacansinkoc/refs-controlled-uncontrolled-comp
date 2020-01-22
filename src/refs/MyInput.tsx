import React from 'react';
import './styles.css';
class MyInput extends React.PureComponent {
  inputText: React.RefObject<HTMLInputElement> | null = null;
  constructor(props: any) {
    super(props);
    this.inputText = React.createRef();
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentDidMount() {
    console.log(this.inputText);
  }

  // works when focusing the input field.
  onFocus() {
    //@ts-ignore
    this.inputText.current.setAttribute(
      'class',
      'input__field input__field--highlighted'
    );
  }

  // works when exitting from the input field.
  onBlur() {
    //@ts-ignore
    this.inputText.current.setAttribute('class', 'input__field');
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
            ref={this.inputText}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </div>
      </>
    );
  }
}

export default MyInput;
