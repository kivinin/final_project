import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import './footer.css';

function Footer(): JSX.Element {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left footer">
      <div className="text-center p-3" style={{ backgroundColor: 'black' }}>
        <svg display="none">
          <symbol id="icon_instagram" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </symbol>
          <symbol id="icon_telegram" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
            />
          </symbol>
          <symbol id="icon_vk" viewBox="0 0 576 512">
            <path
              fill="currentColor"
              d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"
            />
          </symbol>
          <symbol id="icon_whatsapp" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            />
          </symbol>
        </svg>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <img
              src="logo.jpg"
              style={{ width: '150px', height: '150px', borderRadius: '50%' }}
              alt="phto"
            />
          </div>
          <div
            style={{
              display: 'flex',
              color: 'white',
              flexDirection: 'row',
              alignItems: 'stretch',
              justifyContent: 'space-around',
              width: '600px',
            }}
          >
            <div
              style={{
                display: 'flex',
                color: 'white',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >

              <div className='textFot'>+7 982 410 8293</div>
              <div className='textFot'>RESOLE@YANDEX.RU</div>
              <div className='textFot'> 12:00 - 20:00 </div>

            </div>
            <div
              style={{
                display: 'flex',
                color: 'white',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >
              <div className='textFot'>МЕНЮ </div>
              <div className='textFot'>УСЛУГИ</div>
              <div className='textFot'>ДО/ПОСЛЕ</div>
            </div>
            <div
              style={{
                display: 'flex',
                color: 'white',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >

              <div>ЕЩЕ</div>
              <div>О НАС</div>
              <div>ВАКАНСИИ</div>
              <div>ОТЗЫВЫ</div>
            </div>
          </div>
          <div>
            <div className="social instagram">
              <a href="https://instagram.com/resole.86?igshid=YmMyMTA2M2Y=" target="_blank" title="Это Instagram">
                <svg>
                  <use xlinkHref="#icon_instagram"></use>
                </svg>
              </a>
            </div>
            <div className="social telegram">
              <a href="#" target="_blank" title="Это Telegram">
                <svg>
                  <use xlinkHref="#icon_telegram"></use>
                </svg>
              </a>
            </div>
            <div className="social vk">
              <a href="https://vk.com/resole86" target="_blank" title="Это Vk">
                <svg>
                  <use xlinkHref="#icon_vk"></use>
                </svg>
              </a>
            </div>
            <div className="social whatsapp">
              <a href="#" target="_blank" title="Это Whatsapp">
                <svg>
                  <use xlinkHref="#icon_whatsapp"></use>
                </svg>
              </a>
              <div></div>
            </div>

            <img
              className="tn-atom__img t-img loaded"
              data-original="https://static.tildacdn.com/tild3035-3736-4335-a539-613938626365/HorizontalLogos5.png"
              src="https://thumb.tildacdn.com/tild3035-3736-4335-a539-613938626365/-/resize/856x/-/format/webp/HorizontalLogos5.png"
              alt="errorlol"
              style={{ display: 'flex', flexDirection: 'column' }}
            />
          </div>
          <div style={{ width: '200px', color: 'white' }}>
            Made by Elbrus Bears 2023-{new Date().getFullYear()}
          </div>
        </div>
      </div>
    </MDBFooter>
  );
}

export default Footer;
