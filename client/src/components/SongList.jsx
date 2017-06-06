import React from 'react';

class SongList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedIndex: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const songsFromApi = this.props.songs.map((song, index) => {
      console.log(song)
      return <option value={ index } key={ index }> { song['im:name'].label } </option>
    })

    return (
      <select id="songs" onChange={ this.handleChange } value={ this.state.selectedIndex }>
      { songsFromApi }
      </select>
      );
  }

  handleChange(event) {
    const index = event.target.value;
    this.setState({ selectedIndex: index });

    const song = this.props.songs[index];
    this.props.onSelectSong(song);
  }
}

export default SongList;