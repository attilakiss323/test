import Template from './components/main';
import React from 'react';
import { Route } from 'react-router';

const getRoutes = () => <Route path="/" component={Template} />;

export default getRoutes;
