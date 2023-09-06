import { PropTypes } from 'prop-types';

import { Overlay } from './styles';
import Spinner from '../Spinner';
import ReactPortal from '../ReactPortal';

import useAnimetedUnmount from '../../hooks/useAnimatedUnmount';

export function Loader({ isLoading }) {
  const { shouldRender, animetedElementRef } = useAnimetedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading} ref={animetedElementRef}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
