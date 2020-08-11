import React from 'react';
import { Image } from 'react-bootstrap';

import SocialIcons from '../components/SocialIcons';

import './index.css';

function index() {
  return (
    <div>
      <div className='container register'>
        <div className='row'>
          <div className='col-md-3 register-left'>
            <Image
              roundedCircle
              src='https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.0-9/67367469_2977188448990489_5400083297751531520_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=vnV1CBHMDjsAX-9I88e&_nc_ht=scontent.fbeg5-1.fna&oh=2b6a2ac2e37062bbf04af0811a4bb62f&oe=5F56358A'
              alt=''
            />
            <h3>Amel Muminovic</h3>
            <p>
              Full Stack Engineer <br /> Node <br /> React <br /> Golang <br />
              SQL & NoSQL DBs <br /> REST & GraphQL <br /> AWS
            </p>
            <a
              href='https://srv-file18.gofile.io/download/DSgHsD/Amel%20Muminovic%20CV%202020%20-%20Updated.pdf'
              type='submit'
              name=''
              value='Download CV'
            >
              {' '}
              Download CV{' '}
            </a>
            <br />
          </div>
          <div className='col-md-9 register-right'>
            <ul
              className='nav nav-tabs nav-justified'
              id='myTab'
              role='tablist'
            >
              <li className='nav-item'>
                <a
                  onClick={(e) => e.preventDefault()}
                  className='nav-link active'
                  id='home-tab'
                  data-toggle='tab'
                  href=''
                  role='tab'
                  aria-controls='home'
                  aria-selected='true'
                >
                  Hello
                </a>
              </li>
              <li className='nav-item'>
                <a
                  onClick={(e) => e.preventDefault()}
                  className='nav-link'
                  id='profile-tab'
                  data-toggle='tab'
                  href=''
                  role='tab'
                  aria-controls='profile'
                  aria-selected='false'
                >
                  World
                </a>
              </li>
            </ul>
            <div className='tab-content' id='myTabContent'>
              <div
                className='tab-pane fade show active'
                id='home'
                role='tabpanel'
                aria-labelledby='home-tab'
              >
                <h3 className='register-heading'>Here's my story</h3>
                <div className='row register-form'>
                  I am a full-stack Javascript developer with more than 4 years
                  of professional experience and with 7 years of overall
                  computer science and programming experience. Two very
                  important parts of programming jobs are a scientific approach
                  to the problem and good English skills ( in order to
                  understand the tasks). A Bachelor's Degree in Computer Science
                  forced me to establish a scientific approach to the problems
                  in general and solve them efficiently. Poor English skills
                  usually can lead to delays in task delivery. My entire studies
                  were held exclusively in English. In addition, I have lived in
                  the USA for a while, and I believe there won't be any
                  understanding problems. Other than that, I am open towards
                  jumping from one technology to another and I do not find it as
                  some extra effort I should put for a job or employer, but
                  rather I feel joy and excitement about learning something new
                  I can use and be proud of. I love to write: secure, tested,
                  clean, easy to maintain and performant code.
                </div>
                <div>
                  <h4 className='lets-connect-heading'>Lets connect</h4>
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
