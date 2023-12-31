import React, { Component } from 'react';

class UpdateContent extends Component {
  render() {
    return (
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post" onSubmit={function(e){
          e.preventDefault();
          this.props.onSubmit(
            e.target.title.value,
            e.target.desc.value
          );
        }.bind(this)}>
          <p><input type="text" placeholder="title" name="title"></input></p>
          <p><textarea name="desc" placeholder="description"></textarea></p>
          <p><input type="submit"></input></p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;