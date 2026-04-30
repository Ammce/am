import React from "react";

import "./SocialIcons.css";

const links = [
  { label: "GitHub", href: "https://github.com/ammce" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amel-muminovic-b5878173/",
  },
  { label: "Twitter", href: "https://twitter.com/HighSerendipity" },
  { label: "Medium", href: "https://medium.com/@ammce" },
  { label: "Instagram", href: "https://www.instagram.com/ammce/" },
  { label: "Email", href: "mailto:amcenp@gmail.com" },
];

function SocialIcons() {
  return (
    <ul className="social-links">
      {links.map((l) => (
        <li key={l.label}>
          <a
            className="social-link"
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-label">{l.label}</span>
            <span className="social-arrow">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialIcons;
