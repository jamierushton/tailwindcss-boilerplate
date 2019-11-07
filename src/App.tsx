/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React from 'react';

const Navigation: React.FC<any> = ({title, children}): JSX.Element => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">{title}</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">{children}</div>
        </div>
      </nav>
    </>
  );
};

const Link: React.FC<any> = ({title, to}): JSX.Element => {
  return (
    <a href={to} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      {title}
    </a>
  );
};

const Alert: React.FC<any> = ({children}): JSX.Element => {
  return (
    <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md" role="alert">
      <div className="flex">
        <div className="py-1">
          <svg
            className="fill-current h-6 w-6 text-blue-500 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

const Footer: React.FC = (): JSX.Element => {
  return <></>;
};

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navigation title="React-Typescript Tailwind">
        <Link title="Docs" to="#" />
        <Link title="Examples" to="#" />
        <Link title="Blog" to="#" />
      </Navigation>

      <div className="container mx-auto px-4 py-4">
        <Alert>
          <p className="font-bold">Our privacy policy has changed</p>
          <p className="text-sm">Make sure you know how these changes affect you.</p>
        </Alert>

        <div className="flex -mx-2 py-4">
          <div className="w-1/3 px-2">
            <div className="bg-gray-400 h-12"></div>
          </div>
          <div className="w-2/3 px-2">
            <div className="bg-gray-500 h-12"></div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default App;
