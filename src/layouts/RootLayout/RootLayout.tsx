import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

interface IRootLayout {
  children: ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => (
  <div>
    <IntlProvider locale="en">
      <>{children}</>
    </IntlProvider>
  </div>
)

export default RootLayout;
