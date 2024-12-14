import { Link, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import CartMini from "../components/CartMini";
function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout-header">
          <div className="layout-logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="layout-cart">
            <CartMini />
          </div>
        </header>
        <main className="layout-main">
        
          <Outlet />
        </main>
        <footer className="layout-footer">
          Copyright 2024 by 28tech
        </footer>
      </div>

    </>
  )
}
export default LayoutDefault;