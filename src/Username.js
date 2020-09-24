// 1) Article List
// 2) Article Detail
// 3) Search article by title
// Gowtham Muthukumarsamy12:55 PM
// gowtham@silverminegroup.com
// https://newsapi.org/v2/everything?q=tech&apiKey=008c2c412a2b403698bc29a732374513&pageSize=10&page=1q

import React, { Component } from 'react';
import axios from 'axios';

class Name extends Component {
  constructor() {
    super();
    this.state = { news: [] };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      console.log(res);
      this.setState({ news: res.data });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.news.map((p) => (
            <li>{p.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Name;
