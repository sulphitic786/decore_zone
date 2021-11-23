import styles from '../styles/Post.module.css'
export default function RelatedPost({ item, leftThumb }) {
    return (
        <div className={styles.postItem + " "+(leftThumb ? styles.leftThumb : '')}>
            <div className={styles.featureImage}>
                <img src={item?.featureImage} alt="" />
            </div>
            <div className={styles.postBody}>
                <h4 className={styles.relatedTitle}><a href={item?.url} title={item?.title}>{item?.title}</a></h4>
                <p className={styles.postedAt}>{item?.postedAt}</p>
                <p className={styles.relatedAuthor}>by {item?.postedBy}</p>
                <p className={styles.relatedDescription}>{item?.description}</p>
            </div>
        </div>
    )
}