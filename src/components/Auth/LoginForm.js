import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { get } from 'lodash'
import { Form, Input, Button } from 'antd'

const Formwrap = styled.div`
  .formItem {
    display: flex;
    flex-direction: column;
    text-align: none;
  }
  .ant-form-item-label {
    text-align: left;
  }
`

function LoginForm(props) {
  const {
    handleSubmit,
    handleChange,
    authError,
    values,
    isValid,
    setErrors,
    errors,
    isFetching,
  } = props
  const err = get(authError, 'response.data.message')

  useEffect(() => {
    if (err) {
      setErrors({ loginError: err })
    }
  }, [err, setErrors])

  return (
    <Formwrap>
      <Form onFinish={handleSubmit}>
        <h4 style={{ color: '#7a8994' }}>Đăng nhập</h4>
        <Form.Item label="Email" className="formItem">
          <Input name="email" value={values.email} onChange={handleChange} />
          {errors.email && (
            <div id="feedback" style={{ color: 'red', marginTop: 10 }}>
              {errors.email}
            </div>
          )}
        </Form.Item>
        <Form.Item label="Mật khẩu" className="formItem">
          <Input.Password
            name="password"
            value={values.password}
            onChange={handleChange}
          />
           {errors.password && (
            <div id="feedback" style={{ color: 'red', marginTop: 10 }}>
              {errors.password}
            </div>
          )}
        </Form.Item>
        <Button
          data-test="login"
          disabled={!isValid}
          htmlType="submit"
          color="primary"
          style={{
            backgroundColor: '#007BE8',
            color: '#FFFFFF',
            borderRadius: 3,
          }}
          loading={isFetching}>
          Đăng nhập
        </Button>
      </Form>
    </Formwrap>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.object,
  isValid: PropTypes.bool,
  isFetching: PropTypes.bool
}

export default LoginForm
