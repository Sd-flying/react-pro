import React from 'react';
// import { Menu } from 'antd';
import { Icon } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    AppleOutlined,
    GitlabOutlined,
    CodepenOutlined,
    AntDesignOutlined,
    SkypeOutlined,
    InstagramOutlined,
    BulbOutlined,
    CarryOutOutlined,
    CopyrightCircleOutlined,
    DeploymentUnitOutlined

} from '@ant-design/icons';

const menuList = [
    {
        title:'首页',
        key:'/admin/home',

    },
    {
        title:'UI',
        key:'/admin/ui',
        children:[
            {
                title:'表格',
                key:'/admin/ui/buttons',

            },
            {
                title:'弹框',
                key:'/admin/ui/modals',
                icon: <DesktopOutlined style={{ color: 'white' }}/>
            },
            {
                title:'Loading',
                key:'/admin/ui/loadings',
                icon: <PieChartOutlined style={{ color: 'white' }}/>
            },
            {
                title:'通知提醒',
                key:'/admin/ui/notification',
                icon: <TeamOutlined style={{ color: 'white' }}/>
            },
            {
                title:'全局Message',
                key:'/admin/ui/messages',
                icon: <AppleOutlined style={{ color: 'white' }}/>
            },
            {
                title:'Tab页签',
                key:'/admin/ui/tabs',
                icon: <GitlabOutlined style={{ color: 'white' }}/>
            },
            {
                title:'图片画廊',
                key:'/admin/ui/gallery',
                icon: <CodepenOutlined style={{ color: 'white' }}/>
            },
            {
                title:'轮播图',
                key:'/admin/ui/carousel',
                icon: <AntDesignOutlined style={{ color: 'white' }}/>
            },
            {
                title:'redux获取数据/插入数据',
                key:'/admin/ui/richs',
                icon: <SkypeOutlined style={{ color: 'white' }}/>
            }
        ]
    },
    {
        title:'表单',
        key:'/admin/form',
        children:[
            {
                title:'登录',
                key:'/admin/form/login',
                icon: <InstagramOutlined style={{ color: 'white' }}/>
            },
            {
                title:'注册',
                key:'/admin/form/register',
                icon: <BulbOutlined style={{ color: 'white' }}/>
            }
        ]
    },
    {
        title:'表格',
        key:'/admin/table',
        children:[
            {
                title:'基础表格',
                key:'/admin/table/basic',
                icon: <CarryOutOutlined style={{ color: 'white' }}/>
            },
            {
                title:'高级表格',
                key:'/admin/table/high',
                icon: <CopyrightCircleOutlined style={{ color: 'white' }}/>
            }
        ]
    },
    {
        title:'富文本',
        key:'/admin/rich'
    },
    {
        title:'城市管理',
        key:'/admin/city'
    },
    {
        title:'订单管理',
        key:'/admin/order',
        btnList:[
            {
                title:'订单详情',
                key:'detail'
            },
            {
                title:'结束订单',
                key:'finish'
            }
        ]
    },
    {
        title:'员工管理',
        key:'/admin/user'
    },
    {
        title:'车辆地图',
        key:'/admin/bikeMap'
    },
    {
        title:'图表',
        key:'/admin/charts',
        children:[
            {
                title:'柱形图',
                key:'/admin/charts/bar'
            },
            {
                title:'饼图',
                key:'/admin/charts/pie'
            },
            {
                title:'折线图',
                key:'/admin/charts/line'
            },
        ]
    },
    {
        title:'权限设置',
        key:'/admin/permission'
    },
];
export default menuList;
