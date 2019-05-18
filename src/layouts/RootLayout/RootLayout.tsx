import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

interface IRootLayout {
  children: ReactNode;
  className?: string;
}

const RootLayout = ({ children, className }: IRootLayout) => (
  <div className={className}>
    <IntlProvider locale="en">
      <>{children}</>
    </IntlProvider>
  </div>
);

export default RootLayout;
