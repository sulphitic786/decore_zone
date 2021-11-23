import styles from '../styles/Post.module.css'
export default function RecentDeal({ item }) {
    return (<div className={styles.recentPostItem}>
        <h4 className={styles.recentTitle}><a href={item?.url} title={item?.title}>{item?.title}</a></h4>
        <p className={styles.recentTime}>{item?.postedAt}</p>
    </div>)
}