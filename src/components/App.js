import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";

//App Component (Root Component)
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(entryValue) {
    const response = await axios.get(
      `https://pixabay.com/api/?key=25105082-789f7ead1325817cca6548f93&q=${entryValue}&image_type=photo`
    );

    console.log(response.data.hits);
    this.setState({ images: response.data.hits });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: 30 }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
