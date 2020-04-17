import React from 'react'
import styled from 'styled-components'

import { Spin } from 'antd'

const UseWrapper = styled.div`
  .globalLoading {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99;
    background: rgba(0, 0, 0, 0.03);
    width: 100% !important;
    position: absolute;
  }
`

const GlobalLoading = ({ isFetching }) => {
  let xhtml = null
  if (isFetching) {
    xhtml = (
      <div className="globalLoading flex-center">
        <Spin />
      </div>
    )
  }
  return <UseWrapper>{xhtml}</UseWrapper>
}

export default GlobalLoading