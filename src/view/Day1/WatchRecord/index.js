import React from 'react';
import { ListView, View, Text } from 'react-native';
import styles from './styles';

const WatchRecord = ({ record }) => {
  let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  let dataSource = ds.cloneWithRows(record);

  return (
    <ListView
      style={styles.recordList}
      dataSource={dataSource}
      renderRow={rowData => (
        <View style={styles.recordItem}>
          <Text style={styles.recordItemTitle}>{rowData.title}</Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.recordItemTime}>{rowData.time}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default WatchRecord;