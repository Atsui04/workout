import styles from "./TabPanel.module.css";

const TabPanel = ({ children }) => {
  return <div className={styles.tabPanel}>{children}</div>;
};

export default TabPanel;
