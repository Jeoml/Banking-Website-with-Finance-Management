import React from 'react'

const HeaderBox = ({type = "title", title, subtext, user}: HeaderBoxProps) => {
  return (
    <div className="header-box">
        <h1 className="hader-box-title">
            {title}
            {type === 'greeting' && (
                <span>{user}</span>
            )}
        </h1>
    </div>
  )
}

export default HeaderBox