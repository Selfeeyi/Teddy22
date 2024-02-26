
import { Drawer } from "antd";
import PropTypes from "prop-types";

const SideDrawer = ({
  title,
  width,
  onClose,
  visible,
  placement,
  closeIcon,
  closable,
  bodyStyle,
  headerStyle,
  children,
}) => {
  return (
    <Drawer
      title={title}
      width={width}
      placement={placement}
      closeIcon={closeIcon}
      closable={closable}
      bodyStyle={bodyStyle}
      headerStyle={headerStyle}
      onClose={onClose}
      visible={visible} // Corrected the prop name
    >
      <div>{children}</div>
    </Drawer>
  );
};

export default SideDrawer;

SideDrawer.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  placement: PropTypes.string,
  closeIcon: PropTypes.node, // Changed to PropTypes.node
  closable: PropTypes.bool, // Changed to PropTypes.bool
  bodyStyle: PropTypes.any,
  headerStyle: PropTypes.any,
  onClose: PropTypes.func, // Changed to onClose
  visible: PropTypes.bool, // Changed to PropTypes.bool
  children: PropTypes.any,
};

SideDrawer.defaultProps = {
  title: "",
  width: "",
  placement: "",
  closeIcon: null, // Changed to null
  closable: false, // Changed to false
  bodyStyle: "",
  headerStyle: "",
  onClose: () => {}, // Default onClose function
  visible: false, // Changed to false
  children: null,
};
