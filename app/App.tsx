import React from 'react'
import Layout from './components/Layout'

interface Props {
  children: any
}

export default class Root extends React.Component<Props> {
  public componentDidCatch(error: Error): void {
    // tslint:disable-next-line no-console
    console.error(error);
  }

  public render(): any {
    return (
      <Layout />
    )
  }
}
