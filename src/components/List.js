import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <div>
        <div className='list'>
          <h1>My 3D objects</h1>
          <ul>
            {this.props.entries.map((entry) => (
              <li key={entry.name}>
                <a href='/#' onClick={() => this.props.onChange(entry)}>
                  {entry.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
