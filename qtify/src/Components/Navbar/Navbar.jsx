import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>

      <Search
        placeholder={"Search a album of your choice"}
        searchData={searchData}
      ></Search>
      <Button>{"Give Feedback"}</Button>
    </nav>
  );
}

export default Navbar;
