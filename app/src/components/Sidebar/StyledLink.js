/*
 * import
 */
import { NavLink } from 'react-router-dom';
import glamorous from 'glamorous';

/*
 * Local import
 */
import theme from 'src/theme';


/*
 * Code
 */
const hover = {
  background: theme.colors.hoverColor,
};

const active = {
  ...hover,
  boxShadow: `inset 0 0 8px ${theme.colors.shadow}`,
};

const firstChild = {
  borderTopLeftRadius: theme.radius,
  borderTopRightRadius: theme.radius,
};

const lastChild = {
  borderBottomLeftRadius: theme.radius,
  borderBottomRightRadius: theme.radius,
};

const styles = {
  background: theme.colors.bg,
  color: theme.colors.main,
  display: 'block',
  margin: '0 1em',
  padding: '1em',
  ':hover': hover,
  ':active': active,
  ':first-child': firstChild,
  ':last-child': lastChild,
};

const StyledLink = glamorous(NavLink)(styles);

export default StyledLink;
