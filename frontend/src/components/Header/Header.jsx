import logo from '../../assets/images/logo/lunapay-logo-no-bg.png'
import styles from "./Header.module.css";
function Header( {title} ) {

    return(

    <header className={styles["lp-header"]}>
  <div className={styles["lp-header__inner"]}>
    <a className={styles["lp-brand"]} href="/">
      <img
        className={styles["lp-brand__logo"]}
        src={logo}
        alt="LunaPay logo"
      />
      <span className={styles["lp-brand__name"]}>{title}</span>
    </a>

    <div className={styles["lp-header__right"]}></div>
  </div>
</header>


    );
}

export default Header;