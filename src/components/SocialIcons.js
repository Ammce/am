import React from 'react';

import './SocialIcons.css';

function SocialIcons() {
  return (
    <div className='social-icons'>
      <ul>
        <li className='icon-circle'>
          <a target='_blank' href='https://github.com/ammce'>
            <i className='fa fa-github' aria-hidden='true'></i>
          </a>
        </li>
        <li className='icon-circle'>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/amel-muminovic-b5878173/'
          >
            <i className='fa fa-linkedin' aria-hidden='true'></i>
          </a>
        </li>
        <li className='icon-circle'>
          <a target='_blank' href='https://www.facebook.com/Ammmce/'>
            <i className='fa fa-facebook' aria-hidden='true'></i>
          </a>
        </li>
        <li className='icon-circle'>
          <a target='_blank' href='https://twitter.com/HighSerendipity'>
            <i className='fa fa-twitter' aria-hidden='true'></i>
          </a>
        </li>
        <li className='icon-circle'>
          <a target='_blank' href='https://www.instagram.com/ammce/'>
            <i className='fa fa-instagram' aria-hidden='true'></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcons;
