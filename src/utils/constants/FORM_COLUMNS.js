import React from "react";

import { Delete } from "../../components/Delete/Delete.component";
import { Title } from "../../components/Title/Title.component";
import { Description } from "../../components/Description/Description.component";
import { Timestamp } from "../../components/Timestamp/Timestamp.component";
import { Update } from "../../components/Update/Update";
import { Done } from "../../components/Status/Status"

export const FORM_COLUMNS = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    filters: [
      {
        text: "Hide Completed",
        value: "hide",
      },
    ],
    onFilter: (_, record) => record.completed === "false",
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    filters: [
      {
        text: "Hide Completed",
        value: "hide",
      },
    ],
    onFilter: (_, record) => record.completed === "false",
    render: (text, record) => {
      return <Description record={record}>{text}</Description>;
    }
  },
  {
    title: "Timestamp",
    dataIndex: "timestamp",
    key: "timestamp",
    render: (text, record) => {
      return <Timestamp record={record}>{text}</Timestamp>;
    }
  },
  {
    title: "Deadline",
    dataIndex: "date",
    key: "date",
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    }
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: (_, record) => {
      return (
        <>
          <Done record={record} />
          <Delete record={record} />
          <Update record={record} />
        </>
      );
    },
  },
];
