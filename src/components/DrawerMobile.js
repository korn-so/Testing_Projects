import React, { useState } from "react";
import "./DrawerMobile.css";
import "antd-mobile/dist/antd-mobile.css";
// import 'antd/dist/antd.css';
import { Drawer, List, NavBar, Icon } from "antd-mobile";
import { Button, WhiteSpace, WingBlank } from "antd-mobile";

const DrawerMobile = () => {
  const [visible, setVisible] = useState(false);

  const onOpenChange = (...args) => {
    debugger;
    console.log(args);
    setVisible(!visible);
  };

  const onOpenChange1 = () => {
    debugger;
  };

  const sidebar = (
    <List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
        (i, index) => {
          if (index === 0) {
            return (
              <List.Item
                key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                multipleLine
              >
                Category
              </List.Item>
            );
          }
          return (
            <List.Item
              key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            >
              Category{index}
            </List.Item>
          );
        }
      )}
    </List>
  );

  return (
    <div>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: "#A6A6A6", textAlign: "center", paddingTop: 42 }}
        sidebar={sidebar}
        open={visible}
        onOpenChange={onOpenChange}
      >
        <NavBar icon={<Icon type="ellipsis" />} onLeftClick={onOpenChange}>
          Basic
        </NavBar>
        <Button type="primary" onClick={onOpenChange}>
          primary
        </Button>
        <WhiteSpace />
        <Button type="primary" disabled>
          primary disabled
        </Button>
        <WhiteSpace />
      </Drawer>
    </div>
  );
};

export default DrawerMobile;
