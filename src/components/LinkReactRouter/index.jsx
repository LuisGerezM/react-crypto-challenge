import { CustomLink } from "./styled-components/LinkReactRouter.styles";

export const LinkReactRouter = ({
  linkClass = "",
  to,
  text = "Página principal",
  color,
  icon,
  wrapLink = "",
  padding = "",
  borderRadius = "",
  border
}) => {
  return (
    <div className={wrapLink}>
      <CustomLink
        className={linkClass}
        color={color}
        padding={padding}
        border={border}
        borderradius={borderRadius}
        to={to}
      >
        {icon} {text}
      </CustomLink>
    </div>
  );
};
