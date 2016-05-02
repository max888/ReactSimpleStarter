import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCxRj4TAwkUplf6mNDvMZpVmPG38qsNUeE';

// Create a new component. This component should produce some HTML.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>  {
      this.setState({ videos });
      // above is the same as ({videos: videos}) and can be used in ES6 where key and value are the same
    });


  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }

}


// Take this components generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
