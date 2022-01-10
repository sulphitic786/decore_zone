import styles from '../styles/RelatedPost.module.css'
import Button from './elements/Button'
import { Slideshow } from './Post'
export default function RelatedPostSingle({ counter, item }) {
    return (<>
        <h4 className={styles.relatedTitle}>{counter}. <a href={item?.url} title={item?.title}>{item?.title}</a></h4>
        <div className={styles.postItem + " "+ styles.halfThumb}>
            <div className={styles.featureImage+" "+styles.relatedPostImage}>
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
                    },
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
            <div className={styles.postBody+" "+styles.relatedPostBody}>
                {/* <p className={styles.postedAt}>{item?.postedAt}</p> */}
                {/* <p className={styles.relatedAuthor}>by {item?.postedBy}</p> */}
                <p>
                <table>
                    <tr>
                        <td align='center'>
                            <strong style={{fontSize: "1.3em", display: 'block',}}>150$ </strong>
                            <a href={null} title=""><img width="130" src="/affliates/1.jpg" alt="" /></a>
                        </td>
                        <td align='center' style={{paddingLeft: 10}}>
                            <strong style={{fontSize: "1.3em", display: 'block',}}>150$ </strong>
                            <a href={null} title=""><img width="130" src="/affliates/2.jpg" alt="" /></a>
                        </td>
                        <td align='center' style={{paddingLeft: 10}}>
                            <strong style={{fontSize: "1.3em", display: 'block',}}>150$ </strong>
                            <a href={null} title=""><img width="130" src="/affliates/3.jpg" alt="" /></a>
                        </td>
                    </tr>
                </table>
                </p>
                <p className={styles.relatedDescription}>{item?.description}</p>
            </div>
        </div>
        </>
    )
}