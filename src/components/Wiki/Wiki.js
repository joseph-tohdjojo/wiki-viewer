import React, { Component } from 'react'

import s from './Wiki.scss'

const Wiki = ({ pageid, title, description }) => (
  <li className={s.wrapper}>
    <a href={pageid ? `https://en.wikipedia.org/?curid=${pageid}` : '#'}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
    </a>
  </li>
)

export default Wiki
