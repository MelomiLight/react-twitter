import React from 'react';

class TweetInput extends React.Component {
  input = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    const { value } = this.input.current;

    if (!value.trim()) {
      return;
    }

    this.props.onSubmit(value, event);
    this.input.current.value = '';
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="What's happening?" ref={this.input} />
        <button type="submit">Tweet</button>
      </form>
    );
  }
}

export default TweetInput;
