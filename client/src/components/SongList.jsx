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
      return (
        <li value={ (index + 1) } key={ index }> { song['im:name'].label }
        <br/>
        { song['im:artist'].label }
        <br/>
        <img src={ song['im:image'][2].label } />
        <br/>
        <audio src={ song.link[1].attributes.href } type="audio/mp4" controls/>
        <br/>
        </li>
        )
    })

    return (
      <ol id='song-list'>
      { songsFromApi }
      </ol>
      );
  }
}

export default SongList;