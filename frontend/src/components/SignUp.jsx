import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const API = "";

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!'
  }
};
const onFinish = async (values) => {
  try {
    const res = await fetch(`${API}/api/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.token);

      console.log("Login success");

      window.location.href = "/dashboard";
    } else {
      console.log("Login failed");
    }

  } catch (err) {
    console.error(err);
  }
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const SignUp = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    validateMessages={validateMessages}
    autoComplete="off"
  >

    <Form.Item 
        label="Email" 
        name="mail"
        rules={[{ type: 'email', required: true, message: 'Please input your Mail!' }]}>
      <Input />
    </Form.Item>

    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default SignUp;
