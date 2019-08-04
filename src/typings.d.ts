declare module '*.svg' {
  const content: any;
  export default content;
}

type CssSize = string | number;
type Size = { width: CssSize; height: CssSize };
type ClickHandler<T = unknown> = (e: React.SyntheticEvent<T>) => void;
