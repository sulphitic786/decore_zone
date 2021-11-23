
export default function MenuItem({ item }) {
    return (
      <li className="nav-link">
          <a href="#" title={item.title}>{item.title}</a>
          {item?.children?.length ? <ul className="submenu">{item.children.map((row, index) => <MenuItem key={index} item={row} />)}</ul> : null}
      </li>
    )
  }