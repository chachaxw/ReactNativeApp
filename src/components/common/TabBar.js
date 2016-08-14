import React, { Component, TabBarIOS } from 'react-native';

class TabBar extends Component {
  render() {
    return (
        <TabBarIOS barTintColor="#f2f2f2" tintColor="orange">
            <TabBarIOS.Item title="首页">
            </TabBarIOS.Item>
            <TabBarIOS.Item title="发现">
            </TabBarIOS.Item>
            <TabBarIOS.Item title="我的">
            </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
};

export default TabBar;
