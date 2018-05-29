/*  eslint-disable react/no-unused-state */
/*  eslint-disable trailing-comma */
/*  eslint-disable no-unused-vars */

import React from 'react';
import ReactPaginate from 'react-paginate';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      events: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInput(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  handleSearch() {
    fetch(`http://localhost:3000/events?q=${this.state.searchTerm}&_page=1`)
      .then(res => res.json())
      .then((res) => {
        console.log('here is res', res);
        this.setState({
          events: res
        });
      })
      .catch((err) => {
        console.log('here is err', err);
      });
  }

  render() {
    return (
      <div>
        <input placeholder="Search here" onChange={this.handleInput} />
        <button onClick={this.handleSearch}>Search</button>
        {
        this.state.events.map((event, i) =>
          (
            <div key={event}>
              <div>{event.date}</div>
              <div>{event.description}</div>
            </div>
          ))}

            <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                      //  breakLabel={<a href="">...</a>}
                      //  breakClassName={"break-me"}
                      //  pageCount={10}
                      //  marginPagesDisplayed={1}
                      //  pageRangeDisplayed={3}
                      //  onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    );
  }
}


export default App;

