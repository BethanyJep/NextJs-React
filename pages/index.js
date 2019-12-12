import Link from 'next/link';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const images = [
  '/static/portfolio/13.png',
  '/static/portfolio/11.png',
  '/static/portfolio/12.png',
  '/static/portfolio/10.png'
];

const Homepage = () => (
  <Layout>
    <div className="cover">
      <div className="hello">
        <h1>Hi, I'm InnCreator</h1>
        <div>A Developer, Designer and Leader</div>
        <Link href="/service">
          <a className="view-more">What I do</a>
        </Link>
      </div>
    </div>
    <div className="latest-work">
      <h2>Latest Work</h2>
      <Gallery images={images} />
      <div className="">
        <Link href="/portfolio">
          <a className="view-more">View All</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 600px;
        background: transparent url(/static/cover.jpg) no-repeat center center;
        background-size: cover;
      }
      .hello {
        position: absolute;
        top: 60px;
        left: 60px;
        background: #fff;
        padding: 30px;
      }
      .hello h1 {
        margin: 0 0 10px 0;
      }
      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
      }
      .latest-work {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 60px;
      }
      @media (max-width: 480px) {
        .hello {
          left: 30px;
          right: 30px;
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
    `}</style>
  </Layout>
);

export default Homepage;
