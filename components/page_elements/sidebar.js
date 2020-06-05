import React from "react";
import Link from "next/link";

function SideBar() {
  return (
    <div className="custom-space h-100">
      <ul className="navbar-nav sidebar text-center mx-auto pt-3">
        <Link href="/">
          <li className="nav-item">
            <img src="/images/dflux-logo.png"></img>
          </li>
        </Link>
        <hr className="w-50 border"></hr>
      </ul>

      <ul className="navbar-nav sidebar text-center mx-auto mb-auto">
        <li className="nav-item nav-create">
          <img src="/images/create.png"></img>

          <ul className="navbar-nav create-menu text-left pl-3">
            <Link href="/dashboards/create">
              <li className="nav-item">Dashboard</li>
            </Link>
            <Link href="/connectors/create">
              <li className="nav-item">Connector</li>
            </Link>
            <Link href="/queries/create">
              <li className="nav-item">Query</li>
            </Link>
            <Link href="/schedules/create">
              <li className="nav-item">Schedule</li>
            </Link>
          </ul>
        </li>

        <Link href="/datasources">
          <li className="nav-item">
            <img src="/images/data-sources.png"></img>
          </li>
        </Link>
        <Link href="/dashboards">
          <li className="nav-item">
            <img src="/images/dashboards.png"></img>
          </li>
        </Link>
        <Link href="/queries">
          <li className="nav-item">
            <img src="/images/queries.png"></img>
          </li>
        </Link>
        <Link href="/modeling">
          <li className="nav-item">
            <img src="/images/modeling.png"></img>
          </li>
        </Link>
        <Link href="/schedules">
          <li className="nav-item">
            <img src="/images/schedules.png"></img>
          </li>
        </Link>
        <Link href="/settings">
          <li className="nav-item">
            <img src="/images/settings.png"></img>
          </li>
        </Link>
      </ul>
      <ul className="navbar-nav sidebar text-center mx-auto pb-3">
        <Link href="/terms">
          <li className="nav-item ">
            <img src="/images/terms.png"></img>
          </li>
        </Link>
        <Link href="/notification">
          <li className="nav-item">
            <img src="/images/notification.png"></img>
          </li>
        </Link>
        <Link href="/profile">
          <li className="nav-item">
            <img src="/images/play_area.png" className="rounded-circle border p-2"></img>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
