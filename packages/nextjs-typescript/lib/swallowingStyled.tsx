import React, { ComponentType } from 'react';
import styled from 'styled-components';

// https://github.com/styled-components/styled-components/issues/305#issuecomment-298680960
export default (
  WrappedComponent: ComponentType<any>,
  { swallowProps = [] } = {}
) => {
  const Wrapper = ({ children, ...props }) => {
    swallowProps.forEach(propName => {
      delete props[propName];
    });
    return <WrappedComponent {...props}>{children}</WrappedComponent>;
  };
  return styled(Wrapper);
};
