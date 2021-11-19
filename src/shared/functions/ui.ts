const getContentMinHeight = (theme, hasHeader) => {
  const heightMobile = hasHeader
    ? `${theme.header.height.mobile} - ${theme.footer.height.mobile}`
    : theme.footer.height.mobile;
  const heightDesk = hasHeader
    ? `${theme.header.height.desktop} - ${theme.footer.height.desktop}`
    : theme.footer.height.desktop;
  return `
      min-height: calc(
        100vh - ${heightMobile}
      );
      @media (min-width: ${theme.breakpoints.tablet.min}) {
        min-height: calc(
          100vh - ${heightDesk}
        );
      }
    }
  `;
};

export default getContentMinHeight;
