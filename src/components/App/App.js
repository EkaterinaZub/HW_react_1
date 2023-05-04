import styles from './App.module.css';
import {Title} from '../Title/Title.js'
import { Table } from '../Table/Table';


export const App=()=> {
  return (
    <div className={styles.container}>
    <Title/>
    <Table/>
      
    </div>
  );
}


