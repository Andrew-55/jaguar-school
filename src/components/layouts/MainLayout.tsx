import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './MainLayout.module.scss';
import Footer from '../Footer';
import Header from '../Header';

export const MainLayout: React.FC = () => {
  return (
    <div className={classes.wrapperbody}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.content}>
          <Outlet />
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
