import Typography from 'typography';
import doelgerTheme from 'typography-theme-doelger';

const typography = new Typography(doelgerTheme);
// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
