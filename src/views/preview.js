import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import './preview.css'

const Preview = (props) => {
  return (
    <div className="preview-container">
      <Helmet>
        <title>Preview - FlexSync</title>
        <meta property="og:title" content="Preview - FlexSync" />
      </Helmet>
      <div className="preview-top-container">
        <nav data-role="Header" className="preview-navbar">
          <Link to="/" className="preview-navlink">
            <h1 className="preview-logo">
              <span>FLEX</span>
              <span className="preview-text01">SYNC</span>
            </h1>
          </Link>
          <div className="preview-right-side">
            <div className="preview-links-container">
              <Link to="/" className="preview-home">
                Home
              </Link>
              <Link to="/features" className="preview-features">
                Features
              </Link>
              <span className="preview-preview">Preview</span>
              <Link to="/sign-up" className="preview-get-started button">
                <span>
                  <span>Get Started</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
          <div data-role="BurgerMenu" className="preview-burger-menu">
            <svg viewBox="0 0 1024 1024" className="preview-burger-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="preview-mobile-menu">
            <div className="preview-nav">
              <div className="preview-top">
                <h1>Travel</h1>
                <div data-role="CloseMobileMenu" className="preview-close-menu">
                  <svg viewBox="0 0 1024 1024" className="preview-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="preview-right-side1">
                <div className="preview-links-container1">
                  <span className="preview-text05">Home</span>
                  <span className="preview-text06">About</span>
                  <span className="preview-text07">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="preview-follow-container">
              <span className="preview-text09">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="preview-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="preview-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="preview-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="preview-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="preview-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="preview-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="preview-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="preview-container1">
          <div className="preview-workout">
            <div className="preview-arm-workouts">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fEFybSUyMHdvcmtvdXR8ZW58MHx8fHwxNzA5MzU3Mzg4fDA&amp;ixlib=rb-4.0.3&amp;w=1000"
                className="preview-image"
              />
              <div className="preview-container2">
                <span className="preview-text10">Arm Workouts</span>
                <span className="preview-text11">
                  Focuses on strengthening and toning your upper body, including
                  biceps, triceps, and forearms, through exercises like curls,
                  push-ups, and rows.
                </span>
              </div>
            </div>
            <div className="preview-core-workouts">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1580491934424-f4d543ccbf05?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN8ZW58MHx8fHwxNzA5MjI2NDQxfDA&amp;ixlib=rb-4.0.3&amp;w=1000"
                className="preview-image1"
              />
              <div className="preview-container3">
                <span className="preview-text12">Core Workouts</span>
                <span className="preview-text13">
                  Places emphasis on the development and fortification of your
                  abdominal muscles, alongside the enhancement of your balance
                  and stability.
                </span>
              </div>
            </div>
            <div className="preview-leg-workouts">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGxlZyUyMHdvcmtvdXR8ZW58MHx8fHwxNzA5MjI2NTA4fDA&amp;ixlib=rb-4.0.3&amp;w=1000"
                className="preview-image2"
              />
              <div className="preview-container4">
                <span className="preview-text14">Leg Workouts</span>
                <span className="preview-text15">
                  Strengthens and tones your lower body, enhancing your balance
                  and stability, and are essential for overall fitness and
                  athletic performance
                </span>
              </div>
            </div>
          </div>
          <div className="preview-diet">
            <div className="preview-pescatarian">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1609842947408-b5ad4dd13628?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHBlc2NhdGFyaWFufGVufDB8fHx8MTcwOTIyNjU3OXww&amp;ixlib=rb-4.0.3&amp;w=1000"
                className="preview-image3"
              />
              <div className="preview-container5">
                <span className="preview-text16">Pescatarian</span>
                <span className="preview-text17">
                  Includes fish and seafood, but excludes meat and poultry.
                  It&apos;s a flexible diet that allows for a wide range of
                  foods, including vegetables, fruits, grains, and dairy
                  products.
                </span>
              </div>
            </div>
            <div className="preview-mediteranean">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1508170754725-6e9a5cfbcabf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxtZWRpdGVycmFuZWFuJTIwZGlldHxlbnwwfHx8fDE3MDkyMjY2MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1000"
                className="preview-image4"
              />
              <div className="preview-container6">
                <span className="preview-text18">Mediterranean</span>
                <span className="preview-text19">
                  Emphasizes plant-based foods, such as vegetables, fruits,
                  whole grains, and legumes, along with moderate amounts of
                  dairy products, fish, poultry, and olive oil.
                </span>
              </div>
            </div>
            <div className="preview-vegetarian">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHZlZ2V0YXJpYW58ZW58MHx8fHwxNzA5MjI2NjUwfDA&amp;ixlib=rb-4.0.3&amp;w=1000"
                className="preview-image5"
              />
              <div className="preview-container7">
                <span className="preview-text20">Vegetarian</span>
                <span className="preview-text21">
                  Consume plant-based foods, which include fruits, vegetables,
                  whole grains, legumes, nuts, seeds, and oils. They may also
                  consume honey.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="preview-footer">
        <div className="preview-mobile-footer">
          <div className="preview-icons-container1">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="preview-link3"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="preview-icon11"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="preview-link4"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="preview-icon13"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="preview-link5"
            >
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="preview-icon15"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
          </div>
          <div className="preview-links-container2">
            <span className="preview-text22">
              <span className="preview-text23">
                © 2024 Early Access, All Rights Reserved 
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="preview-desktop-footer">
          <div className="preview-menu">
            <div className="preview-links-container3">
              <span className="preview-text25">
                © 2024 Early Access, All Rights Reserved 
              </span>
            </div>
            <div className="preview-follow-container1">
              <span className="preview-text26">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="preview-icons-container2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="preview-link6"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="preview-icon17"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="preview-link7"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="preview-icon19"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="preview-link8"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="preview-icon21"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview