import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { Helmet } from "react-helmet";

import "./admin-workouts.css";

const AdminWorkouts = (props) => {
  const [workouts, setWorkouts] = useState([]);
  const history = useHistory();
  const logoutURL = "https://flexsync-api.onrender.com/api/auth/logout";

  const fetchWorkouts = async () => {
    try {
      const response = await fetch(
        "https://flexsync-api.onrender.com/api/userWorkout",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      setWorkouts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (workout) => {
    try {
      const response = await fetch(
        `https://flexsync-api.onrender.com/api/userWorkout/${workout}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      fetchWorkouts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(logoutURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      history.replace("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);
  return (
    <div className="admin-workouts-container">
      <Helmet>
        <title>Dashboard</title>
        <meta property="og:title" content="Workouts" />
      </Helmet>
      <div className="admin-workouts-container1">
        <ul className="list admin-workouts-ul">
          <li className="list-item admin-workouts-logo">
            <Link to="/">
              <h1 className="admin-workouts-logo1">
                <span>FLEX</span>
                <span className="admin-workouts-text01">SYNC</span>
              </h1>
            </Link>
          </li>
          <li className="list-item admin-workouts-accounts">
            <Link to="/admin-home" className="admin-workouts-navlink1">
              Accounts
            </Link>
          </li>
          <li className="list-item admin-workouts-workouts">
            <span className="admin-workouts-text02">
              <span>Workouts</span>
              <br></br>
            </span>
          </li>
          <li className="list-item admin-workouts-meal-plans">
            <Link to="/admin-meal-plans" className="admin-workouts-navlink2">
              Meal Plans
            </Link>
          </li>
          <li className="list-item admin-workouts-statistics">
            <Link to="/admin-statistics" className="admin-workouts-navlink3">
              <span className="admin-workouts-text05">Statistics</span>
              <br></br>
            </Link>
          </li>
          <li className="list-item admin-workouts-log-out">
            <span className="admin-workouts-text07" onClick={handleLogout}>
              Log Out
            </span>
          </li>
        </ul>
        <div className="admin-workouts-admin-content">
          <div className="admin-workouts-hero">
            <div className="admin-workouts-header">
              <span className="admin-workouts-title">TITLE</span>
              <span className="admin-workouts-category">
                <span>CATEGORY</span>
                <br></br>
              </span>
              <span className="admin-workouts-parameters">
                <span>PARAMETERs</span>
                <br></br>
              </span>
              <span className="admin-workouts-creator">
                <span>creator</span>
                <br></br>
              </span>
              <span className="admin-workouts-actions">
                <span>Actions</span>
                <br></br>
              </span>
            </div>
            <div className="admin-workouts-admin-data">
              {workouts.map((item, index) => (
                <div key={index} className="admin-workouts-account">
                  <div className="admin-workouts-details">
                    <span className="admin-workouts-username">
                      {item.title}
                    </span>
                    <span className="admin-workouts-age">
                      <span>{item.category}</span>
                      <br></br>
                    </span>
                    <span className="admin-workouts-gender">
                      <span>{item.parameters}</span>
                      <br></br>
                    </span>
                    <span className="admin-workouts-user-role">
                      <span>{item.creator}</span>
                      <br></br>
                    </span>
                    <div className="admin-workouts-actions1">
                      {/* <svg
                        viewBox="0 0 1024 1024"
                        className="admin-workouts-edit"
                      >
                        <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                      </svg> */}
                      <svg
                        viewBox="0 0 1024 1024"
                        className="admin-workouts-delete"
                        onClick={() => handleDelete(item.title)}
                      >
                        <path d="M598 598h84l-170-172-170 172h84v170h172v-170zM256 298h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60v-512zM810 170v86h-596v-86h148l44-42h212l44 42h148z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="admin-workouts-footer">
        <div className="admin-workouts-mobile-footer">
          <div className="admin-workouts-icons-container">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="admin-workouts-link"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="admin-workouts-icon02"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="admin-workouts-link1"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="admin-workouts-icon04"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="admin-workouts-link2"
            >
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="admin-workouts-icon06"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
          </div>
          <div className="admin-workouts-links-container">
            <span className="admin-workouts-text22">
              <span className="admin-workouts-text23">
                © 2024 Early Access, All Rights Reserved 
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="admin-workouts-desktop-footer">
          <div className="admin-workouts-menu">
            <div className="admin-workouts-links-container1">
              <span>© 2024 Early Access, All Rights Reserved </span>
            </div>
            <div className="admin-workouts-follow-container">
              <span className="admin-workouts-text26">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <div className="admin-workouts-icons-container1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="admin-workouts-link3"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="admin-workouts-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="admin-workouts-link4"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="admin-workouts-icon10"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="admin-workouts-link5"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="admin-workouts-icon12"
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
  );
};

export default AdminWorkouts;
