import React, { useState, useContext } from "react";
import { Button, Col, Form, Row, Typography, Input, Space, Select } from "antd";
import { TagsOutlined } from "@ant-design/icons";

import { openNotification } from "../../utils/functions/openNotification";

import { Calendar } from "./Calendar.component";

import { TodoContext } from "../../App";
import TextArea from "antd/es/input/TextArea";

const { Title } = Typography;

export const AddTodoForm = () => {
  const [form, setForm] = useState("");
  const [description, setDescription] = useState("");
  const [timestamp, setTimestamp] = useState();
  const [status, setStatus] = useState("OPEN");
  const [date, setDate] = useState();
  const [, dispatchTodos] = useContext(TodoContext);

  const hasDate = date ? true : false;

  const formSubmit = () => {
    if (form && date && form.length >= 5) {
      dispatchTodos({
        type: "ADD_TODO",
        payload: [form, description, timestamp, date, status],
      });
      openNotification("bottomLeft", "TODO added");
      console.log("form", form);
      setForm("");
      setDescription("");
      setDate("");
    } else {
      openNotification("bottomLeft", "Title must be a minimum of 5 letters");
    }
  };

  return (
    <>
      <Form onFinish={formSubmit}>
        <Title level={4}>Add TODO item</Title>
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item label="Title" name="title">
              <Input
                prefix={
                  <TagsOutlined /> // Icon
                }
                onChange={(e) => {
                  setForm(e.target.value);
                  setTimestamp(() => {
                    return (
                      new Date().toLocaleDateString() +
                      " " +
                      new Date().toLocaleTimeString()
                    );
                  });
                }}
              />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <TextArea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Space>
                <Select
                  defaultValue={status}
                  style={{ width: 120 }}
                  options={[
                    { value: "OPEN", label: "OPEN" },
                    { value: "WORKING", label: "WORKING" },
                    { value: "OVERDUE", label: "OVERDUE" },
                    { value: "DONE", label: "DONE" },
                  ]}
                  onChange={(e) => {
                    setStatus(e);
                  }}
                />
              </Space>
            </Form.Item>
          </Col>
          {form && form.length >= 5 && <Calendar setDate={setDate} />}

          {form && form.length < 5 && (
            <Title className="TitleLength" type="danger" level={4}>
              Length must be more than 5 letters
            </Title>
          )}
          {description && description.length < 5 && (
            <Title className="TitleLength" type="danger" level={4}>
              Length must be more than 5 letters
            </Title>
          )}
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" block disabled={!hasDate}>
            Add TODO
          </Button>
        </Row>
      </Form>
    </>
  );
};
