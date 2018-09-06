import * as React from 'react'; // tslint:disable:max-line-length

const View = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="currentColor" viewBox="0 0 32 32" {...props}>
    <path d="M16.003 24.01c-7.338 0-10.983-5.836-11.89-7.539a.974.974 0 0 1 .003-.927l-.003.005c.907-1.703 4.552-7.539 11.89-7.539s10.983 5.836 11.89 7.539a.974.974 0 0 1-.002.927l.003-.005c-.907 1.703-4.552 7.539-11.89 7.539zm.007-13.5a5.5 5.5 0 1 0 5.5 5.5 5.5 5.5 0 0 0-5.5-5.5zm0 9.001a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z" />
  </svg>
);

export default View;
