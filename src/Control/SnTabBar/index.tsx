import * as React from 'react';
import { TabBar } from 'saltui';
import { Time, Plus } from 'salt-icon';

class SnTabBar extends React.Component {
  tabBarItems = [
    {
      title: '首页',
      icon: <Time />,
      path: '/star',
    },
    {
      title: '收藏',
      icon: <Time />,
      badge: 'new',
      badgeStyle: { right: -5 },
      path: '/a/star',
    },
    {
      title: '隐藏',
      icon: <Plus />,
      iconHeight: 40,
      items: [{
        title: '用户',
        icon: <Time />,
        badge: 8,
        name: 'user',
        path: '/b/user',
      }, {
        title: '时间',
        icon: <Time />,
        badge: 8,
        name: 'time',
        path: '/b/time',
      }],
      path: '/center',
    },
    { title: '地图', icon: <Time />, badge: 8, path: '/b/star' },
    { title: '我的', icon: <Time />, badge: 8, path: '/c/star' },
  ];
  constructor(props: any) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    const onChange = (activeIndex: any) => {
      // 这里是触发每个item之后的回调，会返回当前点击的item的index 值
      console.log(activeIndex);
    };

    const tabBarStyle = {};

    return (<div>
      <TabBar
        tabBarStyle={tabBarStyle}
        activeIndex={this.state['activeIndex']}
        onChange={onChange}
        iconHeight={24}
        cIconHeight={50}
        items={this.tabBarItems}
      />
    </div>);
  }
}

export default SnTabBar
