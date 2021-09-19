import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-box">
          <Link to="/">
            <StaticImage
              src="../images/logo.svg"
              alt="Natours logo"
              width={50}
            />
          </Link>
        </div>
        <div className="message-box">
          <h1 className="heading">
            <span className="heading-top">outdoors</span>
            <span className="heading-bottom">is where life happens</span>
          </h1>
        </div>
      </header>
    </>
  )
}
