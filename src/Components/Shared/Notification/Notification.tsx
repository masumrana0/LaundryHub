import React, { useMemo } from "react";
import { Button, Divider, Space, notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";

interface INoticationProps {
  description: string;
  placement:
    | "top"
    | "topLeft"
    | "topRight"
    | "bottom"
    | "bottomLeft"
    | "bottomRight";
}

const Notification = ({ description, placement }: INoticationProps) => {
  if (
    [
      "top",
      "topLeft",
      "topRight",
      "bottom",
      "bottomLeft",
      "bottomRight",
    ].includes(placement)
  ) {
    notification.info({
      message: `Notification`,
      description: description,
      placement: placement,
    });
  } else {
    console.error("Invalid placement value provided for notification");
  }
};

export default Notification;
