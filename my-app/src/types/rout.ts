export default interface Rout {
  [key: string]: {
    render: () => Promise<string>;
    after_render: () => Promise<void>;
  };
}
