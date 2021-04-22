import React, { Component } from "react";
import axios from "axios";
export class S3Upload extends Component {
  constructor(props) {
    super(props);
    this.createImage = this.createImage.bind(this);
    this.state = {
      success: false,
      url: "",
      image: "",
      uploadURL: "",
    };
  }
  //
    onFileChange = (e) => {
    this.setState({ success: false, image: "" });
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    this.createImage(files[0]);
  };

  createImage(file) {
    let MAX_IMAGE_SIZE = 100000000;
    let reader = new FileReader();
    reader.onload = (e) => {
      console.log("length: ", e.target.result.includes("data:image/jpeg"));
      if (!e.target.result.includes("data:image/jpeg")) {
        return alert("Wrong file type - JPG only.");
      }
      if (e.target.result.length > MAX_IMAGE_SIZE) {
        return alert("Image is loo large.");
      }
      //this.image = e.target.result;
      this.setState({ image: e.target.result });
    };
    reader.readAsDataURL(file);
  }

  uploadImage = async (e) => {
    // The API_ENDPOINT is was created by a lambda function in AWS UI callled cookup-s3
    let API_ENDPOINT =
      "https://co3png7oj4.execute-api.us-east-2.amazonaws.com/default/cookup-s3";
    e.preventDefault();
    console.log("Upload clicked");

    //   Preparing the upload get the Url to upload the image from an S3 Lamaba function
    // get the URL that can be used to put upload a picture to see s3
    await axios.get(API_ENDPOINT).then((res) => {
      let response = res.data;
      this.setState({ response });

      console.log("The Response is : ", response);
      console.log("The Response URL is : ", response.uploadURL); // this is the url
      console.log("Uploading The Image: ", this.state.image);
      this.setState({ success: true }); // after the url is retrieved successfully the picture can be uploaded

      let binary = atob(this.state.image.split(",")[1]);
      let array = [];
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      let blobData = new Blob([new Uint8Array(array)], { type: "image/jpeg" });

      // Uploadds/Put the image inside of s3 using the binary data of the picture
      console.log("Uploading API to: ", response.uploadURL);
      const result = fetch(response.uploadURL, {
        method: "PUT",
        body: blobData,
      });

      console.log("Result: ", result);

      // Final URL for the user doesn't need the query string params
      this.uploadURL = response.uploadURL.split("?")[0];
    });
  };
  render() {
    const SuccessMessage = () => (
      <div style={{ padding: 50 }}>
        <h3 style={{ color: "green" }}>SUCCESSFUL UPLOAD</h3>
        <a href={this.state.image}>Access the file here</a>
        <br />
      </div>
    );
    return (
      <div className="App">
        <center>
          <h1>UPLOAD A FILE</h1>
          {this.state.success ? <SuccessMessage /> : null}
          <input
            type="file"
            name="filetName"
            id="filetName"
            onChange={this.onFileChange}
          />
          <br />
          <button onClick={this.uploadImage}>UPLOAD</button>
        </center>
      </div>
    );
  }
}

export default S3Upload;
