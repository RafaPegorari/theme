import React from 'react'
import Layout from './components/Layout'

export default class Root extends React.Component {
  public componentDidCatch(error: Error): void {
    // tslint:disable-next-line no-console
    console.error(error);
  }

  public render(): any {
    {props => (
      <Layout {...props} />
    )};
  }
}
