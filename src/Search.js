import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <form>
        <input
          type="search"
          placeholder="search todo's in a list...."
          className="search-box"
          value={this.props.searchValue}
          onChange={(e) => this.props.handleSearch(e)}
        />
      </form>
    );
  }
}

export default Search;
