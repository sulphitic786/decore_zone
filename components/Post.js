import styles from '../styles/Post.module.css'
import { Fade } from 'react-slideshow-image';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import 'react-slideshow-image/dist/styles.css'

export const Slideshow = ({ images, thumbnailPosition }) => {
    return (
      <div className="slide-container">
        <ImageGallery thumbnailPosition={thumbnailPosition || 'bottom'} items={images} />
      </div>
    )
}

export default function Post({ item, slider }) {
    const images = [
        'wallpaper-2048px-9558-2x1-1.jpg',
        'nintendo-switch-oled-2048px-2x1-1.jpg',
        '20210818_NoTimeForGames_2x1_New.png'
    ];
    return (
        <div className={styles.postItem}>
            <div className={styles.featureImage}>
                {slider ? <Slideshow images={images} /> : <img className={styles.featureImage} src={item?.featureImage || "wallpaper-2048px-9558-3x2-1.jpg"} alt="" />}
            </div>
            <div className={styles.postBody}>
                <h2 className={styles.postTitle}><a href="#" title={item?.title}>{item?.title || 'The Best Removable Wallpapers'}</a></h2>
                <p className={styles.author}>by {item?.postedBy || 'Katie Okamoto'}</p>
                <p className={styles.description}>{item?.description || 'After months of researching and testing removable wallpapers, we found the three best peel-and-stick papers with endless patterns to choose from.'}</p>
            </div>
        </div>
    )
}