import Title from '../Title';

interface ISectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Section = ({ children, title }: ISectionProps) => (
  <div data-hook="section-component" className="section-component">
    <Title>{title}</Title>
    <div>{children}</div>
    <style jsx>{`
      .section-component {
        margin-bottom: 32px;
        padding: 0 16px;
      }
    `}</style>
  </div>
);

export default Section;
