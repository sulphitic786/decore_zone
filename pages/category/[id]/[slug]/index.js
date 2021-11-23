import RelatedPostSingle from "../../../../components/RelatedPostSingle";
import styles from "./Post.module.css";
export default function PostDetail() {
    return <div className="container">
        <div className={styles.postedDetails}>
            <div className={styles.postHeader}>
                <h1>15 Affordable Chairs to Make Any Patio Feel More Luxe</h1>
                <h3>Comfortable seating options to spruce up your outdoor area.</h3>
                <p><span className={styles.postedBy}>By Katie Okamoto</span> Published November 4, 2021</p>
                <div className={styles.socialLinks}>
                    <a href="#" title=""><svg data-icon="twitter" className="b6f36323" width="40px" height="40px" viewBox="-11.5 -11.75 38 38" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="M17.2124 2.33913C16.5816 2.61342 15.9036 2.80113 15.1921 2.88427C15.9181 2.4557 16.4761 1.7777 16.7393 0.968558C16.0587 1.36456 15.3053 1.65342 14.5056 1.81027C13.8636 1.1357 12.9499 0.714844 11.9393 0.714844C9.99615 0.714844 8.42158 2.26627 8.42158 4.1777C8.42158 4.45027 8.45158 4.71342 8.51244 4.96542C5.58872 4.82227 2.99758 3.44484 1.26358 1.34913C0.960151 1.85999 0.787009 2.4557 0.787009 3.08999C0.787009 4.2917 1.40672 5.35027 2.35129 5.97084C1.77529 5.9537 1.23272 5.7977 0.75958 5.53884C0.757866 5.55256 0.757866 5.56713 0.757866 5.58256C0.757866 7.26084 1.97072 8.65884 3.58044 8.97684C3.28387 9.05742 2.97444 9.09942 2.65301 9.09942C2.42587 9.09942 2.20558 9.07627 1.99129 9.03599C2.43872 10.4117 3.73729 11.4137 5.27672 11.4411C4.07329 12.3694 2.55529 12.9231 0.907866 12.9231C0.625009 12.9231 0.343866 12.9068 0.0695801 12.8751C1.62615 13.8574 3.47501 14.4308 5.46101 14.4308C11.9299 14.4308 15.4681 9.15427 15.4681 4.57884C15.4681 4.42884 15.4647 4.28056 15.457 4.13142C16.1444 3.64284 16.741 3.03342 17.2124 2.33913Z" fill="#333333"></path></svg></a>
                    <a href="#" title=""><svg data-icon="facebook" className="b6f36323" width="40px" height="40px" viewBox="-14.25 -9.5 38 38" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="M2.76972 18.5728V9.99126H0.501221V6.90357H2.76972V4.26399C2.76972 2.19153 4.10935 0.287109 7.1982 0.287109C8.44798 0.287109 9.37102 0.407303 9.37102 0.407303L9.29984 3.29077C9.29984 3.29077 8.35696 3.28261 7.32657 3.28261C6.21449 3.28261 6.03595 3.79605 6.03595 4.64674V6.90357H9.38852L9.24266 9.99126H6.03595V18.5728H2.76972Z" fill="#333333"></path></svg></a>
                    <a href="#" title=""><svg data-icon="email" className="b6f36323" width="40px" height="40px" viewBox="-9.75 -12.25 38 38" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="M16.8044 3.49599L16.8147 3.50521L10.081 8.89751C9.91213 9.03161 9.70384 9.09949 9.49899 9.09949C9.29327 9.09949 9.08499 9.03161 8.91613 8.89751L2.18242 3.50521L2.1927 3.49599C2.17299 3.48258 2.16613 3.4633 2.1507 3.44822V2.21203H3.46727L9.49899 7.04029L15.5307 2.21203H16.8464V3.44822C16.831 3.4633 16.8241 3.48258 16.8044 3.49599ZM0.929443 13.2863H18.0723V0.714844H0.929443V13.2863Z" fill="#333333"></path></svg></a>
                </div>
            </div>
            <img src="/wallpaper-2048px-9558-2x1-1.jpg" alt="" />
            <p className={styles.description}>'Tis the season for mouthwatering turkey, your best pumpkin pie recipes and all of the fantastic fixins'! Turkey Day is one of the most festive and filling holidays, but if you want to skip cooking up some delicious homemade Thanksgiving dinner recipes this year, we've got all the info on the best restaurants open on Thanksgiving 2021.</p>
        </div>
        <div className="row">
        <div className="col-sm-9">
        <div className={styles.relatedList}>
        
        <RelatedPostSingle leftThumb item={{featureImage: '/winter-boots-lowres-9423.jpg', title: 'How to Clean a Dog Bed', postedAt: 'Published November 4, 2021', postedBy: 'Kaitlyn Wells', description: 'Using a few essentials cat and dog owners are likely to already own, it’s easy to turn a pet bed from a dingy mess into a comfortable hideaway.'}} />
        </div>
        </div>
        </div>
    </div>
}