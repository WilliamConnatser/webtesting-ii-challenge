import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './Display';
import Dashboard from './Dashboard';
import {render, fireEvent} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

it('renders without crashing', () => {
    const {getByText} = render(
        <App count={{
            balls: 0,
            strikes: 0
        }}>
            <Dashboard actionHandler={App.actionHandler}/>
            <Display count={App.state}/>
        </App>
    );

    getByText(/scoreboard/i);
});

it('balls and strikes reset to 0 when there is 3 strikes', () => {
    const {getByText} = render(
        <App count={{
            balls: 3,
            strikes: 2
        }}>
            <Dashboard actionHandler={App.actionHandler}/>
            <Display count={App.state}/>
        </App>
    );

    const button = getByText(/strike/);
    fireEvent.click(button);

    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
});

it('balls and strikes reset to 0 when there is 4 balls', () => {
  const {getByText} = render(
      <App count={{
          balls: 3,
          strikes: 2
      }}>
          <Dashboard actionHandler={App.actionHandler}/>
          <Display count={App.state}/>
      </App>
  );

  const button = getByText(/ball/);
  fireEvent.click(button);

  getByText(/balls: 0/i);
  getByText(/strikes: 0/i);
});

it('balls and strikes reset to 0 when there is a hit', () => {
  const {getByText} = render(
      <App count={{
          balls: 3,
          strikes: 2
      }}>
          <Dashboard actionHandler={App.actionHandler}/>
          <Display count={App.state}/>
      </App>
  );

  const button = getByText(/hit/);
  fireEvent.click(button);

  getByText(/balls: 0/i);
  getByText(/strikes: 0/i);
});

it('foul increases strikes by 1', () => {
  const {getByText} = render(
      <App count={{
          balls: 3,
          strikes: 0
      }}>
          <Dashboard actionHandler={App.actionHandler}/>
          <Display count={App.state}/>
      </App>
  );

  const button = getByText(/foul/);
  fireEvent.click(button);

  getByText(/balls: 3/i);
  getByText(/strikes: 1/i);
});

it('foul increases strikes up to a maximum of 2', () => {
  const {getByText} = render(
      <App count={{
          balls: 3,
          strikes: 2
      }}>
          <Dashboard actionHandler={App.actionHandler}/>
          <Display count={App.state}/>
      </App>
  );

  const button = getByText(/foul/);
  fireEvent.click(button);

  getByText(/balls: 3/i);
  getByText(/strikes: 2/i);
});