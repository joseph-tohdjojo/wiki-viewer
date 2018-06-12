import React, { Component } from 'react'

import s from './Search.scss'

class Search extends Component {
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { handleChange, handleSubmit, searchValue, placeHolder } = this.props

    return (
      <form className={s.wrapper} onSubmit={handleSubmit}>
        <span className={s.searchIcon}>🔍</span>
        <input
          className={s.input}
          type="text"
          onChange={handleChange}
          placeholder={placeHolder}
          value={searchValue}
        />
      </form>
    )
  }
}

export default Search
