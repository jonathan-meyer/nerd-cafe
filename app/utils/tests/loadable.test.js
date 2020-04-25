import React from 'react';
import { create } from 'react-test-renderer';
import loadable from 'utils/loadable';

describe('loadable', () => {
  it('should render and match the snapshot 1', async () => {
    const Foo = loadable(() => import('./Foo'));

    const root = await create(<Foo />);
    const fallback = root.toJSON();

    await Foo;
    const output = root.toJSON();

    expect(fallback).toMatchSnapshot();
    expect(output).toMatchSnapshot();
  });

  it('should render and match the snapshot 2', async () => {
    const Foo = loadable(() => import('./Foo'), { fallback: <div>Bar</div> });

    const root = await create(<Foo />);
    const fallback = root.toJSON();

    await Foo;
    const output = root.toJSON();

    expect(fallback).toMatchSnapshot();
    expect(output).toMatchSnapshot();
  });
});
