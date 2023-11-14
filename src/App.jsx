import styles from './style';

const App = () => {
  return (
    <div className=''>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`{${styles.boxWidth}`}>Navbar</div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>
    </div>
  );
};

export default App;
