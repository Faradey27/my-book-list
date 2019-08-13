interface ISectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: ISectionProps) => (
  <div data-hook="section-component" className="section-component">
    {children}
    <style jsx>{`
      .section-component {
        margin-bottom: 32px;
        padding: 0 16px;
      }
    `}</style>
  </div>
);

export default Section;
