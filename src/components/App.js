// https://semantic-ui.com/collections/grid.html
import React from "react";
import SearchBar from "./SearchBar";
import axiosObject from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {

    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.getSearchBarState('Best Drum &amp; Bass ')
    }


    getSearchBarState = async (term) => {
        console.log(`getSearchBarState() callback ... Got value: ${term}`);

        await axiosObject.get(
            '/search',
            {
                params: {q: term}
            })
            .then(response => this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            }))
    };

    onVideoSelect = (video) => {
        console.log('onVideoSelect(video):', video);
        this.setState({selectedVideo: video})
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.getSearchBarState}/>

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default App