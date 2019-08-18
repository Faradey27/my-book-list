import { theme } from '../../layouts/Screen/Screen';

const Spinner = () => (
  <div className="spinner-component">
    <div className="spinner-child spinner-child-1" />
    <div className="spinner-child spinner-child-2" />
    <div className="spinner-child spinner-child-3" />
    <div className="spinner-child spinner-child-4" />
    <style jsx>{`
      .spinner-component {
        display: flex;
        position: relative;
        width: 100%;
        height: 300px;
        align-items: center;
        justify-content: center;
      }
      .spinner-child {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 51px;
        height: 51px;
        margin: 6px;
        border: 6px solid ${theme.colors.baseFontColor};
        border-radius: 50%;
        animation: spinner-component 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${theme.colors.baseFontColor} transparent transparent
          transparent;
      }
      .spinner-child-1 {
        animation-delay: -0.45s;
      }
      .spinner-child-2 {
        animation-delay: -0.3s;
      }
      .spinner-child-3 {
        animation-delay: -0.15s;
      }
      @keyframes spinner-component {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default Spinner;
