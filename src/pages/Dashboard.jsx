import React, { useState } from "react";
import "./dashboard.css";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const navLinks = [
    {
      id: 1,
      title: "Dashboard",
      link: "",
      icon: "bx bx-home-circle",
    },
    {
      id: 2,
      title: "Insights",
      link: "insights",
      icon: "bx bx-grid-alt",
    },
    {
      id: 3,
      title: "Categories",
      link: "categories",
      icon: "bx bx-carousel",
    },
    {
      id: 4,
      title: "Analysis",
      link: "analysis",
      icon: "bx bxs-bar-chart-square",
    },
    {
      id: 5,
      title: "Reports",
      link: "reports",
      icon: "bx bxs-report",
    },
  ];
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchValue !== "") {
      try {
        const response = await fetch(
          `http://localhost:5555/api/search?search=${searchValue}`
        );
        const result = await response.json();
        if (result.status === 1) {
          navigate(`/insights`, { state: result });
          setSearchValue("");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <aside>
        <nav>
          <ul>
            {navLinks.map((item, index) => {
              return (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className={item.id === 1 ? "active" : null}
                  >
                    <i className={item.icon}></i>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                onClick={() => document.body.classList.toggle("sb-expanded")}
              >
                <i className="bx bx-chevrons-right"></i>
                <span>Collapse</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main>
        <div className="search">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              value={searchValue}
              placeholder="Search for Insights by Title..."
              onChange={handleChange}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
