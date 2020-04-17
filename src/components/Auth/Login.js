import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

import logo from '../../assets/images/logo@2x.png'
import LoginForm from '../../containers/Auth/LoginForm'

const LogoWrap = styled.div`
  margin-bottom: 30px;
`

const Wrap = styled.div`
  display: flex;
  height: 100%;
`

const LeftColumn = styled.div`
  flex: 1;
  align-items: flex-end;
  display: none;
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`

const RightColumn = styled.div`
  width: 100%;
  background: #fff;
  padding: 80px 70px;
  @media only screen and (min-width: 992px) {
    width: 495px;
  }
`

const Info = styled.div`
  padding-left: 20px;
  padding-bottom: 30px;
  width: 100%;
`

function Login(props) {
  const { auth, goHome, handleLogin, isFetching } = props

  useEffect(() => {
    if (auth.isAuthenticated && auth.token) {
      goHome()
    }
  }, [auth, goHome])

  return (
    <Wrap>
      <LeftColumn>
        <Info>
          <h2>Stay hungry, stay foolish.</h2>
          <p style={{ fontSize: '12' }}>
            <b style={{ color: '#7e8994' }}>Steve Jobs</b> - Apple`s CEO
          </p>
        </Info>
      </LeftColumn>
      <RightColumn>
        <LogoWrap>
          <img src={logo} alt="Codersx" height="32px" />
        </LogoWrap>
        <LoginForm
          handleLogin={handleLogin}
          authError={auth.error}
          isFetching={isFetching}
        />
      </RightColumn>
      <ToastContainer hideProgressBar />
    </Wrap>
  )
}

export default Login
