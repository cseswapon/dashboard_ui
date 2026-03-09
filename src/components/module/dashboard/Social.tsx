import React from "react";
import { Card, Avatar, Button, Typography } from "antd";
import { MessageOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Social: React.FC = () => {
  return (
    <Card className="border-0! p-0!">
      <div className="flex gap-4">
        <Avatar
          size={64}
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
          className="rounded-xl"
        />

        <div className="flex-1">
          <Title level={4} className="m-0!">
            Super awesome, Vue coming soon!
          </Title>
          <Text type="secondary" className="text-sm">
            22 March, 2022
          </Text>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        {/* Team Avatars */}
        <Avatar.Group maxCount={4} size="middle">
          <Avatar src="https://i.pravatar.cc/150?u=1" />
          <Avatar src="https://i.pravatar.cc/150?u=2" />
          <Avatar src="https://i.pravatar.cc/150?u=3" />
          <Avatar src="https://i.pravatar.cc/150?u=4" />
          <Avatar style={{ backgroundColor: "#e6f7ff", color: "#1890ff" }}>
            +8
          </Avatar>
        </Avatar.Group>

        <Button
          type="text"
          icon={<MessageOutlined style={{ color: "#94a3b8" }} />}
          className="flex items-center bg-gray-50 rounded-lg px-4"
        >
          <span className="ml-1 font-bold text-slate-600">24</span>
        </Button>
      </div>
    </Card>
  );
};

export default Social;
