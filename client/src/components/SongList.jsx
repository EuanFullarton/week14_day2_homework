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
      console.log(song)

      return (
        <li value={ (index + 1) } key={ index }> { song['im:name'].label }
        <br/>
        { song['im:artist'].label }
        <br/>
        <img src={ song['im:image'][0].label }/>
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