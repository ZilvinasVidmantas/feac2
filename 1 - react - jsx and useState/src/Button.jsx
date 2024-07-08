import PropTypes from 'prop-types';

export function MyButton({onClick, children}){
  return (
    <button onClick={onClick}>{children}</button>
  )
}

MyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};