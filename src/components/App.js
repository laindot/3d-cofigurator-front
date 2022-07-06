import React, { Component } from 'react';
import Layout from './Layout';
import List from './List';
import Render from './Render';
import Controls from './Controls';

class App extends Component {
  state = {
    entries: [
      {
        name: 'Box',
        shape: 'box',
        color: '#00ff00',
      },
      {
        name: 'Sphere',
        shape: 'sphere',
        color: '#ff0000',
      },
      {
        name: 'Octahedron',
        shape: 'octahedron',
        color: '#0000ff',
      },
    ],
    currentEntry: {},
  };

  HandleOnChange = (entry) => {
    this.setState({
      currentEntry: entry,
    });
    console.log(this.state.currentEntry);
  };

  render() {
    return (
      <Layout>
        <List entries={this.state.entries} onChange={this.HandleOnChange} />
        <Render entry={this.state.currentEntry} />
        <Controls />
      </Layout>
    );
  }
}

export default App;
