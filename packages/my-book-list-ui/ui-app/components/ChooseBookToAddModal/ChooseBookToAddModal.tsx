import classNames from 'classnames';

interface IChooseBookToAddModalProps {
  isOpen: boolean;
}

const ChooseBookToAddModal = ({ isOpen }: IChooseBookToAddModalProps) => {
  return (
    <>
      <div
        data-hook="chooseBookToAddModal-component"
        className={classNames('chooseBookToAddModal-component', {
          ['opened']: isOpen,
        })}
      >
        Hello
      </div>
      <style jsx>{`
        .chooseBookToAddModal-component {
          position: fixed;
          width: 100%;
          height: 100vh;
          top: 0;
          background: #fff;
          transform: translateY(100vh);
          transition: transform 0.2s;
        }
        .opened {
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default ChooseBookToAddModal;
