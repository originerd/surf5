import { Tabs } from '../components/Home';

const routes =
  Object.keys(Tabs)
    .map(key => ({ key, routeName: key }));

const defaultState = {
  index: 0,
  routes,
};

const tab = () => defaultState;

export default tab;
