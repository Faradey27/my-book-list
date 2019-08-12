interface IScreenProps {
  name: string;
  children: React.ReactNode;
}

export const theme = {
  colors: {
    baseFontColor: '#111111',
    baseBackgroundColor: '#efefef',
  },
};

const Screen = ({ name, children }: IScreenProps) => {
  return (
    <div data-hook={`screen-${name}`}>
      {children}
      <style jsx global>{`
        body {
          margin: 0;
          color: ${theme.colors.baseFontColor};
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
        }
        input {
          box-sizing: border-box;
          appearance: none;
          border: none;
          box-shadow: none;
          border-radius: 0;
          outline: 0;
          display: block;
          padding: 0;
          margin: 0;
          font-family: inherit;
          resize: none;
          font-size: inherit;
          color: inherit;
        }
      `}</style>
    </div>
  );
};

export default Screen;
