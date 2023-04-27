import React, { useState } from 'react';
import './StyleNavbar.css';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { RootState, useAppDispatch } from '../../store';
import ModalCart from '../Modal/ModalCart';
import { logoutUser } from '../Auth/authSlice';

function Navbar(): JSX.Element {
  const { carts } = useSelector((store: RootState) => store.carts);
  const [modal, setModal] = useState(false);
  const dispatch = useAppDispatch();
  const clickModal = (): void => {
    setModal((prev) => !prev);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navBarScroll">
        <div className="container-fluid blockNavbar" >
          <div style={{position:"absolute", color:"#b1fbe2", fontSize:"8rem" , left:"47%", bottom:"-60%", letterSpacing:"40px", opacity:"0.7"}}>Resole</div>
        <div >
            <img style={{width:"70px", height:"70px", borderRadius:"50%"}} src='logo.jpg'/>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {!modal ? (
              <button
                type="button"
                onClick={clickModal}
                style={{ border: 'none', margin:"0 20px 0 0"}}
                className="nav-link active zPov"
              >
                КОРЗИНА
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={clickModal}
                  style={{ border: 'none', margin:"0 20px 0 0"}}
                  className="nav-link active zPov"
                >
                  КОРЗИНА
                </button>
                <ModalCart clickModal={clickModal} />
              </>
            )}
            <div className="navbar-nav">
              <a className="nav-link active zPov" aria-current="page" href="#">
                ВЫЗВАТЬ КУРЬЕРА
              </a>
              <a className="nav-link disabled"> </a>
            </div>
            {/* <div className="navbar-nav">
              <a className="nav-link active zPov" aria-current="page" href="#">
                ДО/ПОСЛЕ
              </a>
              <a className="nav-link disabled"> </a>
            </div> */}
            <div className="navbar-nav">
              <a className="nav-link active zPov" aria-current="page" href="#">
                КОНТАКТЫ
              </a>
              <a className="nav-link disabled"> </a>
            </div>
            <div className="navbar-nav">
              <a className="nav-link active zPov" aria-current="page" href="#">
                ПРОВЕРИТЬ ЗАКАЗ
              </a>
              <a className="nav-link disabled"> </a>
            </div>
            {/* <button type="button" className="nav-link active" onClick={() => dispatch(logoutUser())} style={{ border: 'none' }}>
              Выйти
            </button> */}
          </div>
        </div>
        <div className='blockInfo'>
          <div style={{width:"200px"}}>+7 982 410 8293</div>
          <div style={{width:"200px", fontSize:"13px"}}>12.00 - 20.00 по будням</div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
