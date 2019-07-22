import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {

    onTermSubmint = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmint} />
            </div>
        )
    };

}
export default App;