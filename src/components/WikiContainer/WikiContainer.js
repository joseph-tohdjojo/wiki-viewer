import React, { Component } from 'react'

import Wiki from '../Wiki/Wiki'
import s from './WikiContainer.scss'

const WikiContainer = ({ wikis }) => (
  <ul className={s.wrapper}>
    {wikis.length > 0 ? (
      wikis.map(wiki => {
        const { pageid, title, extract } = wiki
        return (
          <Wiki
            key={pageid}
            pageid={pageid}
            title={title}
            description={extract}
          />
        )
      })
    ) : (
      <Wiki title="Search for something" />
    )}
  </ul>
)

export default WikiContainer
