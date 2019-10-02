import React, { Component } from "react";
import firebase from "firebase";
import config from "./configurations/firebaseConfig";
import "./App.css";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import ListScreen from "./screens/listScreen/ListScreen";
import {
  SearchbarContainer,
  NavbarTitle,
  SearchInnerContainer,
  Dropdown
} from "./AppStyles";

class App extends Component {
  constructor(props) {
    // Initialize Firebase
    firebase.initializeApp(config);
    super(props);
    this.state = {
      selectedCategory: "",
      categoryList: [],
      filtered: [],
      escalated: [],
      searchTerm: "",
      displayItem: false,
      itemSelected: {},
      categories: [],
      dateUdpated: ""
    };
  }

  componentDidMount() {
    let ref = firebase.database().ref("/");

    ref.once("value", snapshot => {
      const data = snapshot.val();
      let date = new Date(data.data.date);
      let escalated = data.escalated.slice(0, 30);

      this.setState({
        categories: data.data.scrapes,
        dateUdpated: date.toString(),
        escalated: escalated
      });
    });
  }

  selectCategory = e => {
    if (e.target.value === "0") {
      this.setState({
        selectedCategory: "",
        categoryList: [],
        filtered: [],
        searchTerm: ""
      });
    } else {
      this.setState({
        selectedCategory: e.target.value,
        categoryList: this.state.categories[e.target.value],
        filtered: this.state.categories[e.target.value]
      });
    }
  };

  goHome = e => {
    this.setState({
      selectedCategory: "",
      categoryList: [],
      filtered: [],
      searchTerm: ""
    });
  };

  filterList = e => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.categoryList;
      newList = currentList.filter(i => {
        let lc = i.title.toLowerCase();
        let filter = e.target.value.toLowerCase();

        return lc.includes(filter);
      });
    } else {
      newList = this.state.categoryList;
    }

    this.setState({
      filtered: newList
    });
  };

  render() {
    return (
      <div className="App">
        <SearchbarContainer>
          <SearchInnerContainer>
            <NavbarTitle onClick={this.goHome}>amazon scrapy</NavbarTitle>
            <Dropdown
              name="selectedCategory"
              value={this.state.selectedCategory}
              onChange={this.selectCategory}
            >
              <option value="0">Select category</option>
              {Object.keys(this.state.categories).map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
            </Dropdown>
          </SearchInnerContainer>
        </SearchbarContainer>
        {!this.state.selectedCategory ? (
          <HomeScreen escalated={this.state.escalated} />
        ) : (
          <ListScreen
            categorySelected={this.state.selectedCategory}
            updatedDate={this.state.dateUdpated}
            filteredData={this.state.filtered}
          />
        )}
      </div>
    );
  }
}

export default App;
