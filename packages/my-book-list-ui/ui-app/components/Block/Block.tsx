interface IBlockProps {
  children: React.ReactNode;
}

const Block = ({ children }: IBlockProps) => (
  <div data-hook="block-component" className="block-component">
    {children}
    <style jsx>{`
      .block-component {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        margin: 32px 0;
        padding: 0 16px;
      }
    `}</style>
  </div>
);

export default Block;
