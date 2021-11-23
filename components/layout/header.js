import Navbar from "./navbar";
import Sticky from 'react-sticky-el';

export default function Header() {
    return (<Sticky topOffset={100}>
      <div className="site-header">
        <div className="container">
          <a className="header-left" href={'/'} title="home page"><img src="/logo.svg" alt="logo" /></a>
          <Navbar />
        </div>
      </div>
    </Sticky>)
  }