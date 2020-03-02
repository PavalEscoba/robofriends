import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const Scroll = ({children}) => {

  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={200}>>
      {children}
    </Scrollbars>
  );
};

export default Scroll;

