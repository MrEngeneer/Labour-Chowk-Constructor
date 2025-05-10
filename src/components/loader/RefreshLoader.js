import React, { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const RefreshLoader = ({ children, onRefresh }) => {
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const handleRefresh = () => {
    setRefreshing(true);
    onRefresh && onRefresh();
    wait(3000).then(() => setRefreshing(false));
  };

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      style={styles.scrollView}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  }
});
export default RefreshLoader;
