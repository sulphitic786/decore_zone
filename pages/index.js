import Head from 'next/head'
import Image from 'next/image'
import DailyDeal from '../components/DailyDeal'
import Post from '../components/Post'
import RecentDeal from '../components/RecentDeal'
import RelatedPost from '../components/RelatedPost'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
            <p className={styles.leadStatment}>Wirecutter is reader-supported. When you buy through links on our site, we may earn an affiliate commission.</p>
            <div className="commonSections">
              <div className="row">
                <div className="col-sm-2">
                  <div className="subscription-card">
                    <h4>We’re adding a paid subscription to Wirecutter</h4>
                    <a href="#">See plans</a> or <a href="#">learn more</a>
                  </div>
                  <RecentDeal item={{url: 'category/reviews/1', title: 'Target Early Black Friday: KitchenAid and Roomba Deals End Today', postedAt: 'Today'}} />
                  <h3 className="daily-deal-heading">New + Updated</h3>
                  <RecentDeal item={{url: 'category/reviews/2', title: 'The Wirecutter 50 Under $50', postedAt: 'Yesterday'}} />
                  <RecentDeal item={{url: 'category/reviews/3', title: 'The Best Bluetooth Tracker', postedAt: 'Yesterday'}} />
                  <RecentDeal item={{url: 'category/reviews/4', title: 'The 24 Best Gifts for Coffee Lovers', postedAt: 'Yesterday'}} />
                  <RecentDeal item={{url: 'category/reviews/5', title: 'The Best Drones for Photos and Video', postedAt: 'Yesterday'}} />
                  <RecentDeal item={{url: 'category/reviews/6', title: 'The 21 Best Tech Gifts for the Holidays', postedAt: 'Yesterday'}} />
                  <p className="view-all-link"><a href="#">See everything</a></p>
                </div>
                <div className="col-sm-8">
                  <Post slider />
                </div>
                <div className="col-sm-2">
                  <h3 className="daily-deal-heading">Daily deals</h3>
                  <p className="daily-deal-lead">Price drops on products we already love</p>
                  <DailyDeal />
                  <DailyDeal />
                  <DailyDeal />
                  <p className="view-all-link"><a href="#">See all 146 deals</a></p>
                </div>
              </div>
            </div>
            <div className="commonSections">
              <h3 className="postTitle">Home</h3>
              <p><a href="#" className="text-underline" alt="">Smart Home Devices</a>, <a href="#" className="text-underline" alt="">Cleaning</a>, <a href="#" className="text-underline" alt="">Bedroom</a> or <a href="#" className="text-underline" alt="">see all in Home</a></p>
              
              <div className="row">
                
                <div className="col-sm-7">
                  <RelatedPost item={{featureImage: 'comforters2020-2048px-9310-scaled.jpg', title: 'The Wirecutter 50 Under $50', postedAt: 'Updated October 7, 2021', postedBy: 'Wirecutter Staff', description: 'We scoured picks throughout our site to find 50 of the most useful things under $50, all of them Wirecutter-tested and Wirecutter-approved.'}} />
                </div>
                <div className="col-sm-5">
                  
                  <RelatedPost leftThumb item={{featureImage: 'cleaneverything-petbeds-2048px-3x2-1.jpg', title: 'How to Clean a Dog Bed', postedAt: 'Published November 4, 2021', postedBy: 'Kaitlyn Wells', description: 'Using a few essentials cat and dog owners are likely to already own, it’s easy to turn a pet bed from a dingy mess into a comfortable hideaway.'}} />
                  <RelatedPost leftThumb item={{featureImage: 'leafblowers-2048px-0121.jpg', title: 'The Best Leaf Blower', postedAt: 'Published November 3, 2021', postedBy: 'Doug Mahoney', description: 'We’ve added fresh picks for the quietest, most capable tools to clean up this fall.'}} />
                  <RelatedPost leftThumb item={{featureImage: 'smart-display-vs-photo-frame-2048px-3708.jpg', title: 'If You Love Your Photos, Don’t Use a Smart Display', postedAt: 'Published November 3, 2021', postedBy: 'Nena Farrell', description: 'Both smart displays and digital photo frames offer an easy way to bring a stream of photos into your daily life. Here’s how to choose which one is right for you.'}} />
                </div>
              </div>
            </div>
            <div className="commonSections">
              <h3 className="postTitle">Gifts</h3>
              <p><a href="#" className="text-underline" alt="">Gifts for Grown-Ups</a>, <a href="#" className="text-underline" alt="">Gifts for Babies and Kids</a>, <a href="#" className="text-underline" alt="">Holiday Decorating</a> or <a href="#" className="text-underline" alt="">see all in Gifts</a></p>
              <div className="row">
                <div className="col-sm-4">
                  <RelatedPost item={{featureImage: '20191008_50x50-630thumbnail.png', title: 'The Wirecutter 50 Under $50', postedAt: 'Updated October 7, 2021', postedBy: 'Wirecutter Staff', description: 'We scoured picks throughout our site to find 50 of the most useful things under $50, all of them Wirecutter-tested and Wirecutter-approved.'}} />
                </div>
                <div className="col-sm-4">
                  <RelatedPost item={{featureImage: 'techgiftsunder200-2048px-253-3x2-1.jpg', title: 'The 21 Best Tech Gifts for the Holidays', postedAt: 'UPDATED NoVEMBER 5, 2021', postedBy: 'Nena Farrell', description: 'Whether your recipient is a tech snob or a newbie, we have recommendations that will improve their everyday life.'}} />
                </div>
                <div className="col-sm-4">
                  <RelatedPost item={{featureImage: '2020_gg-family-bonding-3x2-1.jpg', title: 'The 20 Best Gifts for Families', postedAt: 'UPDATED NoVEMBER 3, 2021', postedBy: 'Dorie Chevlen, Kit Dillon, and Jennifer Hunter', description: 'These gifts will help your family build closer ties and create fun traditions for years to come, whether you’re celebrating the holidays together or apart.'}} />
                </div>
              </div>
            </div>
        </div>

      </main>
    </div>
  )
}
