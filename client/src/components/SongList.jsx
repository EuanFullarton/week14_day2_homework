import React from 'react';

class SongList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedIndex: ''
    };
  }

  render() {
    const songsFromApi = this.props.songs.map((song, index) => {
      return <li value={ (index + 1) } key={ index }> { song['im:name'].label } </li>
    })

    return (
      <ol>
      { songsFromApi }
      </ol>
      );
  }
}

export default SongList;