// 1) Article List
// 2) Article Detail
// 3) Search article by title
// gowtham@silverminegroup.com
// https://newsapi.org/v2/everything?q=tech&apiKey=008c2c412a2b403698bc29a732374513&pageSize=10&page=1q

import React, { Component } from 'react';
import axios from 'axios';

class Title extends Component {
  constructor() {
    super();
    this.state = { news: [] };
  }

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tech&apiKey=008c2c412a2b403698bc29a732374513&pageSize=10&page=1q`
      )
      .then((res) => {
        console.log(res);
        this.setState({ news: res.data.articles });
      });
  }
  render() {
    return (
      <div>
        <ol>
          {this.state.news.map((p) => (
            <li key={p.publishedAt}>{p.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Title;
