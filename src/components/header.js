import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <>
    <Wrapper>
      <header>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </header>
    </Wrapper>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `natours`,
}

const Wrapper = styled.section``

export default Header
