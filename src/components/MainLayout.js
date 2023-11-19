import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import {
  AiOutlineDashboard,
  AiOutlineCustomerService,
  AiOutlineShopping,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { SiBrandfolder } from "react-icons/si";
import { GiSwordBrandish } from "react-icons/gi";
import {
  BiCategory,
  BiCategoryAlt,
  BiColor,
  BiSolidColor,
} from "react-icons/bi";
import { FaClipboardList, FaBlog, FaList } from "react-icons/fa";
import { SiBlogger, SiBloglovin } from "react-icons/si";
import { TbCategoryFilled, TbCategory2 } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";

import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>DC</span>
            <span className='lg-logo'>Dev Corner</span>
          </h2>
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className='fs-4' />,
              label: "DashBoard",
            },
            {
              key: "customers",
              icon: <AiOutlineCustomerService className='fs-4' />,
              label: "customers",
            },
            {
              key: "Catalog",
              icon: <AiOutlineShopping className='fs-4' />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShopping className='fs-4' />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineShopping className='fs-4' />,
                  label: "Product list",
                },
                {
                  key: "brands",
                  icon: <SiBrandfolder className='fs-4' />,
                  label: "Brands",
                },
                {
                  key: "brand-list",
                  icon: <GiSwordBrandish className='fs-4' />,
                  label: "Brand list",
                },
                {
                  key: "category",
                  icon: <BiCategory className='fs-4' />,
                  label: "Category",
                },
                {
                  key: "category-list",
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <BiColor className='fs-4' />,
                  label: "Color",
                },
                {
                  key: "color-list",
                  icon: <BiSolidColor className='fs-4' />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "order",
              icon: <FaClipboardList className='fs-4' />,
              label: "Orders",
            },
            {
              key: "blog",
              icon: <FaBlog className='fs-4' />,
              label: "blogs",
              children: [
                {
                  key: "add-blog",
                  icon: <SiBlogger className='fs-4' />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <SiBloglovin className='fs-4' />,
                  label: "Blog List",
                },
                {
                  key: "add-blog-category",
                  icon: <TbCategoryFilled className='fs-4' />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <TbCategory2 className='fs-4' />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaList className='fs-4' />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      {/* <div className='slider'></div> */}
      <Layout>
        <Header
          className='d-flex justify-content-between pe-5 ps-1'
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className='d-flex align-items-center gap-1'>
            <div className=' position-relative'>
              <IoMdNotifications className='fs-4 m-4' />
              <span className='position-absolute badge bg-warning rounded-circle'>
                3
              </span>
            </div>
            <div className='d-flex gap-2 align-items-center'>
              <div className=''>
                <img
                  // className='img-fluid'
                  src='https://st.depositphotos.com/1003593/2504/i/450/depositphotos_25042169-stock-photo-customer-concept.jpg'
                  alt='home'
                />
              </div>
              <div className='d-flex gap-2 flex-column align-items-center  w-100'>
                <div className='links'>
                  <h4 className='mb-0 fs-4'>zakaraya oudaimah</h4>
                  <p className='mb-0'>zakaraya.oudaimah@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
