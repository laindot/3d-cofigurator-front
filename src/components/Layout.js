import React from 'react';

const Layout = ({ children }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  };

  return <div style={styles.container}>{children}</div>;
};

export default Layout;
