import { mount, ReactWrapper } from 'enzyme';
import React from 'react';

import Root from './../index';

export default class RootDriver {
  private component?: ReactWrapper;

  public when = {
    created: () => {
      this.component = mount(<Root />);
      return this;
    },
  };

  public is = {
    ok: () => this.component && Boolean(this.component.find('[data-testid="root"]').length === 1),
  };
}
