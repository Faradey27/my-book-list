import { mount, ReactWrapper } from 'enzyme';
import React from 'react';

import Home from './../index';

export default class HomeDriver {
  private component?: ReactWrapper;

  public when = {
    created: () => {
      this.component = mount(<Home />);
      return this;
    },
  };

  public is = {
    ok: () => this.component && Boolean(this.component.find('[data-testid="home-page"]').length === 1),
  };
}
