const FooterMenuBox = ({ title, linkItems, containerClassName ="" }) => {
    return (
      <div className={`box ${containerClassName}`}>
        <h3 className="mb-lg-3 mb-2">{title}</h3>
        <ul className="ps-0">
          {linkItems.map((link, index) => (
            <li key={index}>
              <a href={link.linkUrl}>{link.displayText}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default FooterMenuBox;