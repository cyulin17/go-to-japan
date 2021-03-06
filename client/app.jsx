import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Plan from './pages/plan';
import parseRoute from './lib/parse.route';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      user: {}
    };
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  signIn(user) {
    this.setState({
      user: user.payload
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'login') {
      return <Login signIn={this.signIn}/>;
    }
    if (route.path === 'plan') {
      return <Plan />;
    }
  }

  render() {
    return (
    <>
    { this.renderPage()}
    </>
    );
  }
}
