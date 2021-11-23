import styles from '../styles/Post.module.css'
export default function DailyDeal({ item }) {
    return (
        <div className={styles.dailyPostItem}>
            <img className={styles.dailyFeatureImage} src={item?.featureImage || "wallpaper-2048px-9558-3x2-1.jpg"} alt="" />
            <h4 className={styles.dailyTitle}><a href={item?.url} title={item?.title}>{item?.title || 'FoodSaver Vacuum Sealer Bag and Roll Combo Pack'}</a></h4>
            <p className={styles.dailyPrice}>{item?.postedBy || <><span>$33</span> <del>$43</del> from Costco</>}</p>
            <p className={styles.dailyDescription}>{item?.description || 'Costco membership required (price includes shipping)'}</p>
        </div>
    )
}