import styles from './Table.module.css'
import { table } from '../data/table.js'


export const Table = () => {
    return (
        < div className={styles.container} >
        {
            table.map(item => {
                const popular = item.popular ? styles.popular : ''
                const bacgraund = item.popular ? styles.bacgraund : ''
               
                return (
                    <div className={styles.table} key={item.id}>
                    {item.title1 ?                             
                            <h3 className={styles.title}><span className={styles.color}>POPULAR</span>{item.title}</h3>
                             :<h3 className={styles.title}>{item.title}</h3> 
                            }
                        <p className={[styles.pricing, popular].join(' ')}><span className={styles.span}>{item.pricing1}</span> {item.pricing}</p> 
                        <p className={styles.product}>{item.text}</p>
                        <p className={styles.size}>{item.size}</p>
                        <button className={[styles.button, bacgraund].join(' ')}>LEARN MORE</button>

                    </div>
                    
                    
                )
        })
    }
        </div >
    )
};
