import Typography from 'typography';
import doelgerTheme from 'typography-theme-doelger';

doelgerTheme.overrideThemeStyles = () => {
  return {
    html: {
      lineHeight: `1.53em`
    },
    p: {
      marginBottom: `1.53rem`
    }
  };
};

const typography = new Typography(doelgerTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}
// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
