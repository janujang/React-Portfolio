import React, { Component } from "react";
import logo from "./logo.svg";
import "./MainPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./hoc/Layout/Layout";
import { Section } from "./components/Section/Section";
import { LandingScreen } from "./components/LandingScreen/LandingScreen";
import { CustomnBtn } from "./components/CustomBtn/CustomBtn";
import { Row, Col } from "react-bootstrap";
import { CardComponent } from "./components/CardComponent/CardComponent";
import Grid from "./components/Grid/Grid";
import { render } from "@testing-library/react";
import axios from "axios";

// let previousContent = (
//   <React.Fragment>
//     <Section title="About" numCol={2} backgroundColor="#2C3E50">
//       <div>
//         {/* <p>{about}</p> */}
//         <p>
//           {Object.entries(this.state.fileContent).length === 0
//             ? "hello"
//             : this.state.fileContent.sections[0].content[0].description}
//         </p>
//         <CustomnBtn>Download Resume</CustomnBtn>
//       </div>

//       <div>
//         <p>{about}</p>
//         <CustomnBtn>Download Resume</CustomnBtn>
//       </div>
//     </Section>

//     <Section title="Experience" numCol={2} backgroundColor="#E74C3C">
//       <Row>{cardsElem}</Row>
//     </Section>
//     <Section title="Timeline" numCol={2} backgroundColor="#E74C3C"></Section>
//     <Section title="Projects" numCol={2} backgroundColor="#ECF0F1">
//       <p>{about}</p>
//     </Section>
//     <Section title="Contact" numCol={1} backgroundColor="#2980B9">
//       {this.state.aboutText}
//     </Section>
//   </React.Fragment>
// );
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileContent: {},
      admin: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://portfolio-fbc2f.firebaseio.com/sites.json")
      .then((response) => {
        let elements = Object.keys(response.data);
        console.log(
          "output",
          response.data[elements[elements.length - 1]].site
        );
        this.setState({
          fileContent: response.data[elements[elements.length - 1]].site,
        });
      })
      .catch((error) => {
        // this.setState({ error: true });
        console.log(error);
      });
  }
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    // console.log([...query]);
    const params = [...query];
    if (params.length != 0) {
      console.log(params[0][1]);
      if (params[0][1] == "true") {
        this.setState({ admin: true });
      }
    }

    // const ingredients = {};
    // let price = 0;
    // for (let param of query.entries()) {
    //   if (param[0] === "price") {
    //     price = param[1];
    //   } else {
    //     ingredients[param[0]] = +param[1];
    //   }
    // }
    // this.setState({ ingredients: ingredients, totalPrice: price });
  }

  handleFile = (e) => {
    const content = e.target.result;
    let result = JSON.parse(content);
    console.log("file content", result);
    console.log(result.siteTitle);
    this.setState({ fileContent: result.site });

    axios
      .post("https://portfolio-fbc2f.firebaseio.com/sites.json", result)
      .then((response) => {
        // this.setState({ loading: false, purchasing: false });
        console.log(response);
      })
      .catch((error) => {
        // this.setState({ loading: false, purchasing: false });
        console.log(error);
      });
    // You can set content in state and show it in render.
  };

  handleChangeFile = (file) => {
    let fileData = new FileReader();
    fileData.onloadend = this.handleFile;
    fileData.readAsText(file);
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log(this.state.isEditMode);
  }

  handleChange(event) {
    this.setState({ aboutText: event.target.value });
  }
  render() {
    let content =
      Object.entries(this.state.fileContent).length === 0
        ? "No Content"
        : this.state.fileContent.sections.map((section) => {
            let sectionContent = section.content.map((item) => {
              if (item.description) {
                return <p>{item.description}</p>;
              } else if (item.button) {
                return <CustomnBtn>{item.button}</CustomnBtn>;
              } else if (item.cards) {
                const cards = item.cards.map((cardItem) => (
                  <CardComponent
                    title={cardItem.title}
                    content={cardItem.list}
                  />
                ));
                return <Row>{cards}</Row>;
              }
            });
            return (
              <Section title={section.title} backgroundColor={section.color}>
                {sectionContent}
              </Section>
            );
          });
    let fileInput = this.state.admin ? (
      <div className="editMode">
        <input
          type="file"
          accept=".json"
          onChange={(e) => this.handleChangeFile(e.target.files[0])}
        />
      </div>
    ) : (
      "hello"
    );
    return (
      <div className="App">
        <Layout>
          {fileInput}
          <LandingScreen />
          <Row>{content}</Row>
          {/* <Grid /> */}
        </Layout>
      </div>
    );
  }
}

// Consider using zoom in out page scroll for one of the pages: https://ihatetomatoes.net/demos/zoom-into-image-page-scroll/

export default MainPage;
