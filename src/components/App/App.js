import React, { Component } from 'react'
import jsonp from 'jsonp'

import Search from '../Search/Search'
import WikiContainer from '../WikiContainer/WikiContainer'
import s from './App.scss'

class App extends Component {
  state = {
    val: '',
    wikis: [],
  }

  handleSearchChange = e => this.setState({ val: e.target.value })
  handleSearchSubmit = e => {
    e.preventDefault()
    const api =
      'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='

    jsonp(api + this.state.val, null, (e, { query: { pages } }) => {
      if (e) {
        console.log(e)
      } else {
        this.setState(state => ({
          val: '',
          wikis: Object.keys(pages).map(k => pages[k]),
        }))
      }
    })
  }

  render() {
    const { wikis } = this.state

    return (
      <div className={s.wrapper}>
        <Search
          handleChange={this.handleSearchChange}
          handleSubmit={this.handleSearchSubmit}
          placeHolder={'Search Wikipedia'}
          searchValue={this.state.val}
        />
        <WikiContainer wikis={wikis} />
      </div>
    )
  }
}

export default App
