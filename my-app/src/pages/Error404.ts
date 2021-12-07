const Error404 = {
  render: async () => {
    const view = document.createElement('section');
    view.innerHTML = '404 Error';
    return view;
  },
  after_render: async () => {},
};
export default Error404;
