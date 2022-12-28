import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Descriptions, notification } from "antd";
import Axios from "axios";
import { Card, Button, Form, Input } from "antd";
import { SettingFilled, SmileOutlined } from "@ant-design/icons";

export default function Login() {
  const navigate = useNavigate();
  const [fieldErrors, setfieldErrors] = useState({});

  const onFinish = (values) => {
    async function fn() {
      const { username, password } = values;

      setfieldErrors({});

      const data = { username, password };
      try {
        const response = await Axios.post("http://localhost:8000/accounts/api/token/", data);
        const { data: { access: jwtToken }} = response;
        console.log("response :", response)
        console.log("jwtToken:", jwtToken)

        // notification.open({
        //   message: "로그인 성공",
        //   description: "로그인 후 홈으로 이동",
        //   icon: <SmileOutlined />,
        // });
        // navigate("/home");
      } catch (error) {
        if (error.response) {
          notification.open({
            message: "로그인 실패",
            description: "실패지롱",
            icon: <SettingFilled />,
          });
          const { data: fieldsErrorMessages } = error.response;
          setfieldErrors(
            Object.entries(fieldsErrorMessages).reduce(
              (acc, [fieldName, errors]) => {
                acc[fieldName] = {
                  validateStatus: "error",
                  help: errors.join(" ")
                };
                return acc;
              },
              {}
            )
          );
        }
      }
    }
    fn();
  };


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card title="Login">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              min: 5,
              message: "min test 5글자 이상",
            },
          ]}
          hasFeedback
          {...fieldErrors.username}
          {...fieldErrors.detail}   // FIXME: 작동 안됨
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          {...fieldErrors.password}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
