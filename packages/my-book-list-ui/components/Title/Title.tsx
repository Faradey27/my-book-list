interface ITitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: ITitleProps) => (
  <div data-hook="title-component" className="title-component">
    <h2>{children}</h2>
    <style jsx>{`
      .title-component {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
      }
    `}</style>
  </div>
);

export default Title;
