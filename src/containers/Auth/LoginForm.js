import { withFormik } from 'formik'
import LoginForm from '../../components/Auth/LoginForm'

export default withFormik({
  displayName: 'login',
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Email không được để trống'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Địa chỉ email của bạn không hợp lệ'
    }
    if (!values.password) {
      errors.password = 'Mật khẩu không được để trống'
    }
    return { ...errors }
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    const { handleLogin } = props
    handleLogin(values)
    setSubmitting(false)
  },
})(LoginForm)
