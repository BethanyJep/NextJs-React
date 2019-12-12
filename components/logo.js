import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>InnCreator</a>
    </Link>
    
    <style jsx>{`
      .logo a {
        display: block;
        width: 120px;
        padding: 20px;
      }
      @media (max-width: 600px) {
        .logo {
          display: inline-block;
        }
      }
    `}</style>
  </div>
);

export default Logo;
