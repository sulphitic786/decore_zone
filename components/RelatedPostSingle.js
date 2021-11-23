import styles from '../styles/Post.module.css'
import Button from './elements/Button'
import { Slideshow } from './Post'
export default function RelatedPostSingle({ item }) {
    return (
        <div className={styles.postItem + " "+ styles.halfThumb}>
            <div className={styles.featureImage}>
                <Slideshow images={[
                    {
                        original: '/nintendo-switch-oled-2048px-2x1-1.jpg',
                        thumbnail: '/nintendo-switch-oled-2048px-2x1-1.jpg',
                    },
                    {
                        original: '/nintendo-switch-oled-2048px-2x1-1.jpg',
                        thumbnail: '/nintendo-switch-oled-2048px-2x1-1.jpg',
                    },
                    {
                        original: '/nintendo-switch-oled-2048px-2x1-1.jpg',
                        thumbnail: '/nintendo-switch-oled-2048px-2x1-1.jpg',
                    }
                ]} />
            </div>
            <div className={styles.postBody}>
                <h4 className={styles.relatedTitle}><a href={item?.url} title={item?.title}>{item?.title}</a></h4>
                {/* <p className={styles.postedAt}>{item?.postedAt}</p> */}
                <p className={styles.relatedAuthor}>by {item?.postedBy}</p>
                <p>
                <table>
                    <tr>
                        <td>
                            <strong>Amazone<br/>
                            150$ </strong><br/>
                            <Button>Shop Now</Button>
                        </td>
                        <td>
                            <strong>Amazone<br/>
                            150$ </strong><br/>
                            <Button>Shop Now</Button>
                        </td>
                        <td>
                            <strong>Amazone<br/>
                            150$ </strong><br/>
                            <Button>Shop Now</Button>
                        </td>
                    </tr>
                </table>
                </p>
                <p className={styles.relatedDescription}>{item?.description}</p>
            </div>
        </div>
    )
}