import React, { Component, useState } from 'react';
import Layout from './containers/Layout/Layout';
import classes from './App.modules.css';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';

/**
 * App Component
 * ErrorBoundary wrapped here for graceful rendering
 */
const app = () => (
  <div className={classes.containerDiv}>
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  </div>
);

export default app;
