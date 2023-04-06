import React, { useState, useContext } from "react";
import { TodoContext } from "../../App";
import { Button, Form, Input, Modal, Select, Space } from "antd";
import { Calendar } from "../Form/Calendar.component";

export const Update = ({ record }) => {
  const [, dispatchTodos] = useContext(TodoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(record.title);
  const [description, setDescription] = useState(record.description);
  const [date, setDate] = useState(record.date);
  const [timestamp, setTimestamp] = useState(record.timestamp);
  const [status, setStatus] = useState(record.status);

  const handleOk = () => {
    handleSubmit();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    dispatchTodos({
      type: "UPDATE_TODO",
      payload: [record.key, title, description, timestamp, date, status],
    });
    console.log(title, description, timestamp, date, status);
    setIsModalOpen(false);
  };

  // Open popup modal to update todo item and dispatch action to update todo item in state and local storage

  return (
    <>
      <a
        href="#update"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <Button type="primary">Update</Button>
      </a>
      {isModalOpen && (
        <Modal
          title="Update Todo"
          visible={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form onFinish={handleSubmit}>
            <Form.Item label="Title" name="title">
              <Input
                placeholder="Todo"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input
                placeholder="Description"
                value={description}
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
                  onChange={(value) => {
                    setStatus(value);
                  }}
                />
              </Space>
            </Form.Item>{" "}
            <Calendar setDate={setDate} />
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  setTimestamp(() => {
                    return (
                      new Date().toLocaleDateString() +
                      " " +
                      new Date().toLocaleTimeString()
                    );
                  });
                }}
              >
                Update
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};
