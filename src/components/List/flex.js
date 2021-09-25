const Flex = ({
  children,
  direction,
  width,
  height,
  padding,
  margin,
  textAlign,
  justifyContent,
  alignItems,
  takeRemainingSpace,
  backgroundColor,
  style,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        width: width || "100%",
        height: height,
        padding: padding || "0rem",
        margin: margin || "0rem",
        display: "flex",
        flexDirection: direction || "row",
        flexFlow: direction || "row",
        textAlign: textAlign || "start",
        justifyContent: justifyContent || "space-between",
        alignItems: alignItems || "start",
        flexGrow: takeRemainingSpace ? 1 : "",
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </div>
  );
};
export default Flex;
