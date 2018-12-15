import { mount, ReactWrapper } from 'enzyme';
import React from 'react';

import Home from './../index';
import mockedBooks from './books.mock.json';

export default class HomeDriver {
  private component?: ReactWrapper;

  public when = {
    created: () => {
      this.component = mount(<Home books={mockedBooks}/>);
      return this;
    },
  };

  public is = {
    ok: () => this.component && Boolean(this.component.find('[data-testid="home-page"]').length === 1),
  };
}
