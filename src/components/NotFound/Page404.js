import React from 'react'
import { Row, Col } from 'antd'

function Page404() {
  return (
    <Row className="w100 flex-center">
      <Col className="text-center">
        <div>
          <h1>404</h1>
          <h4>Oops! You&apos;re lost.</h4>
          <p>The page you are looking for was not found.</p>
        </div>
      </Col>
    </Row>
  )
}

export default Page404
