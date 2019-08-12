interface IBlockProps {
  children: React.ReactNode;
}

const Block = ({ children }: IBlockProps) => (
  <div data-hook="block-component" className="block-component">
    {children}
    <style jsx>{`
      .block-component {
        margin: 32px 0;
        padding: 0 16px;
      }
    `}</style>
  </div>
);

export default Block;
