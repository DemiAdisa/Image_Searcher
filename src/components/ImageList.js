import React from "react";

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageLink = this.props.images.map((image) => {
      return <img key={image.id} src={image.webformatURL} alt="image" />;
    });
    return <div>{imageLink}</div>;
  }
}

export default ImageList;
