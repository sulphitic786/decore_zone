export default function Footer() {
  const footerWidget1 = {
    title: "",
    links: [
      {url: '#', title: "Popular"},
      {url: '#', title: "Tech"},
      {url: '#', title: "Home & Garden"},
      {url: '#', title: "Sleep"},
      {url: '#', title: "Kitchen & Dining"},
      {url: '#', title: "Money"},
    ]
  }

  const footerWidget2 = {
    title: "",
    links: [
      {url: '#', title: "Gifts"},
      {url: '#', title: "Appliances"},
      {url: '#', title: "Travel"},
      {url: '#', title: "Health & Fitness"},
      {url: '#', title: "Baby & Kid"},
      {url: '#', title: "Outdoors"},
    ]
  }
  
  const footerWidget3 = {
    title: "",
    links: [
      {url: '#', title: "Pets"},
      {url: '#', title: "Hobby & Crafts"},
      {url: '#', title: "Software & Apps"},
      {url: '#', title: "Office"},
      {url: '#', title: "Cars"},
      {url: '#', title: "Adult"},
    ]
  }
  const footerWidget4 = {
    title: "",
    links: [
      {url: '#', title: "Deals"},
      {url: '#', title: "Lists"},
      {url: '#', title: "Blog"},
    ]
  }

    return (
      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <ul className="footer-links">
                {footerWidget1.links.map((row, index) => <li key={index}><a href={row.url} title={row.title}>{row.title}</a></li>)}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3">
              <ul className="footer-links">
                {footerWidget2.links.map((row, index) => <li key={index}><a href={row.url} title={row.title}>{row.title}</a></li>)}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3">
              <ul className="footer-links">
                {footerWidget3.links.map((row, index) => <li key={index}><a href={row.url} title={row.title}>{row.title}</a></li>)}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3">
              <ul className="footer-links">
                {footerWidget4.links.map((row, index) => <li key={index}><a href={row.url} title={row.title}>{row.title}</a></li>)}
              </ul>
            </div>
          </div>
          <div className="row footer-bottom">
            <div className="col-sm-6">
              <p>&copy; 2021 Wirecutter, Inc., A New York Times Company</p>
            </div>
            <div className="col-sm-6">
              <ul className="social-links">
                <li>Follow us: </li>
                <li>
                  <a href="#" title="">
                    <img src="data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%2044%2044%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill%2Drule%3D%22evenodd%22%3E%3Crect%20fill%3D%22%23ffffff%22%20height%3D%2244%22%20width%3D%2244%22%20rx%3D%2222%22%2F%3E%3Cpath%20fill%3D%22%23333333%22%20d%3D%22M20%2032%2E7v%2D9%2E5h%2D2%2E4V20H20v%2D3c0%2D2%2E3%201%2E6%2D4%2E4%205%2D4%2E4h2%2E4V16H25c%2D1%200%2D1%2E3%2E4%2D1%2E3%201%2E4V20h3%2E7l%2D%2E2%203%2E2h%2D3%2E5v9%2E5H20z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <img src="data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%2039%2039%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill%2Drule%3D%22evenodd%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M38%2E192%2019%2E483c0%2010%2E32%2D8%2E376%2018%2E684%2D18%2E71%2018%2E684S%2E772%2029%2E802%2E772%2019%2E483C%2E776%209%2E165%209%2E15%2E8%2019%2E486%2E8s18%2E71%208%2E365%2018%2E71%2018%2E683%22%2F%3E%3Cpath%20fill%3D%22%23333333%22%20d%3D%22M26%2E908%2010%2E642H13%2E136a2%2E143%202%2E143%200%200%200%2D2%2E148%202%2E14v13%2E762c0%201%2E182%2E962%202%2E14%202%2E148%202%2E14h13%2E772a2%2E144%202%2E144%200%200%200%202%2E147%2D2%2E14V12%2E782c0%2D1%2E182%2D%2E96%2D2%2E14%2D2%2E147%2D2%2E14zm%2D2%2E934%202%2E82c0%2D%2E312%2E253%2D%2E565%2E564%2D%2E565h1%2E694c%2E312%200%20%2E565%2E253%2E565%2E564v1%2E693a%2E564%2E564%200%200%201%2D%2E565%2E564h%2D1%2E694a%2E564%2E564%200%200%201%2D%2E564%2D%2E564v%2D1%2E69zm%2D3%2E93%202%2E76a3%2E468%203%2E468%200%200%201%203%2E473%203%2E462%203%2E468%203%2E468%200%200%201%2D3%2E474%203%2E462%203%2E468%203%2E468%200%200%201%2D3%2E474%2D3%2E462%203%2E468%203%2E468%200%200%201%203%2E472%2D3%2E46zM27%2E36%2026%2E43a%2E565%2E565%200%200%201%2D%2E565%2E563h%2D13%2E55a%2E565%2E565%200%200%201%2D%2E565%2D%2E564v%2D8%2E46h2%2E258c%2D%2E294%2E422%2D%2E393%201%2E21%2D%2E393%201%2E712%200%203%2E02%202%2E466%205%2E476%205%2E496%205%2E476%203%2E03%200%205%2E497%2D2%2E457%205%2E497%2D5%2E476%200%2D%2E5%2D%2E072%2D1%2E278%2D%2E437%2D1%2E712h2%2E26v8%2E457z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <img src="data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%2044%2044%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill%2Drule%3D%22evenodd%22%3E%3Crect%20fill%3D%22%23ffffff%22%20height%3D%2244%22%20width%3D%2244%22%20rx%3D%2222%22%2F%3E%3Cpath%20fill%3D%22%23333333%22%20d%3D%22M32%2E7%2017l%2D2%2E2%2E5a3%2E8%203%2E8%200%200%200%201%2E7%2D2%208%208%200%200%201%2D2%2E5%2E8A4%204%200%200%200%2027%2015c%2D2%2E3%200%2D4%201%2E8%2D4%204v%2E8a11%2011%200%200%201%2D8%2D4%203%2E7%203%2E7%200%200%200%2D%2E4%202c0%201%2E2%2E7%202%2E4%201%2E7%203a4%204%200%200%201%2D1%2E7%2D%2E4c0%202%201%2E3%203%2E4%203%203%2E8H16a4%204%200%200%200%203%2E6%202%2E7%207%2E8%207%2E8%200%200%201%2D4%2E8%201%2E3h%2D1a11%2011%200%200%200%206%201%2E7c7%200%2011%2D5%2E7%2011%2D11a7%2E8%207%2E8%200%200%200%202%2D2%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }