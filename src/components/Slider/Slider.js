import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Slider.scss"; // Import the SCSS file
import logo from '../../logo-ppp.png'
import LangSwitchButton from "./LangSwitchButton ";


const Slider = () => {
  const {t} = useTranslation();

  return (
    <>  
      <input id="hamburger" className="hamburger" type="checkbox" />
      <label htmlFor="hamburger" className="hamburger">
        <i></i>
      </label>

      <nav className="primnav">
      <div className="icon">
            <img  src={logo} alt="logo">
        </img>
        </div>
        <ul>
          <li>

            <NavLink to="/">
              <svg className="icon">
                <use xlinkHref="#icon-home2"></use>
              </svg>{" "}
              {t("Header:home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <svg className="icon">
                <use xlinkHref="#icon-about-us"></use>
              </svg>{" "}
              {t("Header:about")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/solutions">
              <svg className="icon">
                <use xlinkHref="#icon-solution"></use>
              </svg>{" "}
              {t("Header:solution")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/soho">
              <svg className="icon">
                <use xlinkHref="#icon-soho"></use>
              </svg>{" "}
              {t("Header:soho")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/partnership">
              <svg className="icon">
                <use xlinkHref="#icon-partnership"></use>
              </svg>{" "}
              {t("Header:partnership")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <svg className="icon">
                <use xlinkHref="#icon-contact"></use>
              </svg>{" "}
              {t("Header:contact")}
            </NavLink>
          </li>
          <li>
            <a>
              <svg className="icon">
                <use xlinkHref="#icon-language"></use>
              </svg>{" "}
              {t("Header:language")}

            </a>
            <ul className="secnav">
              <li>
                <LangSwitchButton />
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <svg
        style={{ position: "absolute", width: 0, height: 0 }}
        width="0"
        height="0"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <symbol id="icon-bell2" viewBox="0 0 32 32">
            <title>bell2</title>
            <path
              className="path1"
              d="M32.047 25c0-9-8-7-8-14 0-0.58-0.056-1.076-0.158-1.498-0.526-3.532-2.88-6.366-5.93-7.23 0.027-0.123 0.041-0.251 0.041-0.382 0-1.040-0.9-1.891-2-1.891s-2 0.851-2 1.891c0 0.131 0.014 0.258 0.041 0.382-3.421 0.969-5.966 4.416-6.039 8.545-0.001 0.060-0.002 0.121-0.002 0.183 0 7-8 5-8 14 0 2.382 5.331 4.375 12.468 4.878 0.673 1.263 2.002 2.122 3.532 2.122s2.86-0.86 3.532-2.122c7.137-0.503 12.468-2.495 12.468-4.878 0-0.007-0.001-0.014-0.001-0.021l0.048 0.021zM25.82 26.691c-1.695 0.452-3.692 0.777-5.837 0.958-0.178-2.044-1.893-3.648-3.984-3.648s-3.805 1.604-3.984 3.648c-2.144-0.18-4.142-0.506-5.837-0.958-2.332-0.622-3.447-1.318-3.855-1.691 0.408-0.372 1.523-1.068 3.855-1.691 2.712-0.724 6.199-1.122 9.82-1.122s7.109 0.398 9.82 1.122c2.332 0.622 3.447 1.318 3.855 1.691-0.408 0.372-1.523 1.068-3.855 1.691z"
            ></path>
          </symbol>

          <symbol id="icon-home2" viewBox="0 0 32 32">
            <title>home2</title>
            <path
              className="path1"
              d="M16 1l-16 16 3 3 3-3v13h8v-6h4v6h8v-13l3 3 3-3-16-16zM16 14c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"
            ></path>
          </symbol>
          <symbol id="icon-about-us" viewBox="0 0 24 24">
            <title>about-us</title>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm0 19c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-14c-2.761 0-5 2.239-5 5 0 0.553 0.448 1 1 1s1-0.447 1-1c0-1.654 1.346-3 3-3s3 1.346 3 3c0 0.553 0.448 1 1 1s1-0.447 1-1c0-2.761-2.239-5-5-5z" />
          </symbol>

          <symbol id="icon-solution" viewBox="0 0 24 24">
            <title>solution</title>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 4.411 2.617 8.193 6.383 9.904V23a1 1 0 0 0 1.447.895l4.988-2.494A2 2 0 0 0 14 20h4c1.103 0 2-.897 2-2v-3.097c3.774-1.733 6-5.144 6-8.903C24 5.373 18.627 0 12 0zm-2 14h4v4h-4v-4zm5-12c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zm-4 5h4v4h-4v-4z" />
          </symbol>

          <symbol id="icon-soho" viewBox="0 0 32 32">
            <title>soho</title>
            <path
              className="path1"
              d="M14 4v-0.5c0-0.825-0.675-1.5-1.5-1.5h-5c-0.825 0-1.5 0.675-1.5 1.5v0.5h-6v4h6v0.5c0 0.825 0.675 1.5 1.5 1.5h5c0.825 0 1.5-0.675 1.5-1.5v-0.5h18v-4h-18zM8 8v-4h4v4h-4zM26 13.5c0-0.825-0.675-1.5-1.5-1.5h-5c-0.825 0-1.5 0.675-1.5 1.5v0.5h-18v4h18v0.5c0 0.825 0.675 1.5 1.5 1.5h5c0.825 0 1.5-0.675 1.5-1.5v-0.5h6v-4h-6v-0.5zM20 18v-4h4v4h-4zM14 23.5c0-0.825-0.675-1.5-1.5-1.5h-5c-0.825 0-1.5 0.675-1.5 1.5v0.5h-6v4h6v0.5c0 0.825 0.675 1.5 1.5 1.5h5c0.825 0 1.5-0.675 1.5-1.5v-0.5h18v-4h-18v-0.5zM8 28v-4h4v4h-4z"
            ></path>
          </symbol>
          <symbol id="icon-partnership" viewBox="0 0 30 32">
            <title>partnership</title>
            <path
              className="path1"
              d="M13.714 18.286v6.857c0 1.25-1.036 2.286-2.286 2.286h-9.143c-1.25 0-2.286-1.036-2.286-2.286v-6.857c0-1.25 1.036-2.286 2.286-2.286h9.143c1.25 0 2.286 1.036 2.286 2.286zM13.714 4.571v6.857c0 1.25-1.036 2.286-2.286 2.286h-9.143c-1.25 0-2.286-1.036-2.286-2.286v-6.857c0-1.25 1.036-2.286 2.286-2.286h9.143c1.25 0 2.286 1.036 2.286 2.286zM29.714 18.286v6.857c0 1.25-1.036 2.286-2.286 2.286h-9.143c-1.25 0-2.286-1.036-2.286-2.286v-6.857c0-1.25 1.036-2.286 2.286-2.286h9.143c1.25 0 2.286 1.036 2.286 2.286zM29.714 4.571v6.857c0 1.25-1.036 2.286-2.286 2.286h-9.143c-1.25 0-2.286-1.036-2.286-2.286v-6.857c0-1.25 1.036-2.286 2.286-2.286h9.143c1.25 0 2.286 1.036 2.286 2.286z"
            ></path>
          </symbol>
          <symbol id="icon-contact" viewBox="0 0 32 32">
            <title>contact</title>
            <path
              className="path1"
              d="M16 14.688l10.688-6.688h-21.375zM26.688 24v-13.313l-10.688 6.625-10.688-6.625v13.313h21.375zM26.688 5.313c1.438 0 2.625 1.25 2.625 2.688v16c0 1.438-1.188 2.688-2.625 2.688h-21.375c-1.438 0-2.625-1.25-2.625-2.688v-16c0-1.438 1.188-2.688 2.625-2.688h21.375z"
            ></path>
          </symbol>
          <symbol id="icon-language" viewBox="0 0 24 24">
            <title>language</title>
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-9H9v-2h2zm0-4H9V7h2z" />
          </symbol>
        </defs>
      </svg>
    </>
  );
};

export default Slider;
