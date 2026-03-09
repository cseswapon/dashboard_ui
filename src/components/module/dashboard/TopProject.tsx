"use client";

import { Table, Avatar, Tag, Select } from "antd";
import type { ColumnsType } from "antd/es/table";

interface ProjectData {
  key: string;
  user: { name: string; role: string; avatar: string };
  project: string;
  priority: string;
  budget: string;
}

const columns: ColumnsType<ProjectData> = [
  {
    title: "Assigned",
    dataIndex: "user",
    key: "user",
    render: (user) => (
      <div className="flex items-center gap-3">
        <Avatar src={user.avatar} size="large" />
        <div>
          <p className="text-[14px] font-bold text-slate-800 dark:text-gray-200 m-0 leading-tight">
            {user.name}
          </p>
          <p className="text-xs text-slate-400 m-0">{user.role}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Project",
    dataIndex: "project",
    key: "project",
    render: (text) => (
      <span className="text-slate-500 dark:text-slate-400">{text}</span>
    ),
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
    render: (priority) => {
      let color = "blue";
      if (priority === "Low") color = "cyan";
      if (priority === "Yellow") color = "orange";
      if (priority === "Very high") color = "purple";
      if (priority === "High") color = "error";
      return (
        <Tag
          color={color}
          className="rounded-md border-none px-2 py-0.5 font-medium"
        >
          {priority}
        </Tag>
      );
    },
  },
  {
    title: "Budget",
    dataIndex: "budget",
    key: "budget",
    render: (text) => (
      <span className="font-bold text-slate-800 dark:text-gray-200">
        {text}
      </span>
    ),
  },
];

const data: ProjectData[] = [
  {
    key: "1",
    user: {
      name: "John Doe",
      role: "Web Designer",
      avatar: "https://i.pravatar.cc/150?u=1",
    },
    project: "Elite admin",
    priority: "Low",
    budget: "$3.5k",
  },
  {
    key: "2",
    user: {
      name: "John Doe",
      role: "Web Designer",
      avatar: "https://i.pravatar.cc/150?u=2",
    },
    project: "Material Design",
    priority: "Yellow",
    budget: "$3.5k",
  },
  {
    key: "3",
    user: {
      name: "John Doe",
      role: "Web Designer",
      avatar: "https://i.pravatar.cc/150?u=3",
    },
    project: "Spike Dashboard",
    priority: "Very high",
    budget: "$3.5k",
  },
  {
    key: "4",
    user: {
      name: "John Doe",
      role: "Web Designer",
      avatar: "https://i.pravatar.cc/150?u=4",
    },
    project: "Elite admin",
    priority: "High",
    budget: "$3.5k",
  },
];

const TopProjects = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Top Projects
          </h3>
          <p className="text-sm text-slate-400">Best employees</p>
        </div>
        <Select
          defaultValue="march"
          style={{ width: 120 }}
          className="custom-select"
        >
          <Select.Option value="march">March 2022</Select.Option>
          <Select.Option value="april">April 2022</Select.Option>
        </Select>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="custom-ant-table"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default TopProjects;
