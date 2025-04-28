function Cabecera() {
    return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* Ícono de React */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 841.9 595.3"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            >
              <g fill="none" stroke="currentColor" strokeWidth="20">
                <ellipse cx="420.9" cy="296.5" rx="115.5" ry="115.5" />
                <ellipse
                  cx="420.9"
                  cy="296.5"
                  rx="163.1"
                  ry="290.6"
                  transform="rotate(60 420.9 296.5)"
                />
                <ellipse
                  cx="420.9"
                  cy="296.5"
                  rx="163.1"
                  ry="290.6"
                  transform="rotate(-60 420.9 296.5)"
                />
              </g>
            </svg>
            <span className="ml-3 text-xl">PROTECTO INTEGRADOR</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Evidencia 1</a>
            <a className="mr-5 hover:text-gray-900">Evidencia 2</a>
            <a className="mr-5 hover:text-gray-900">Evidencia 3</a>
            <a className="mr-5 hover:text-gray-900">Evidencia 4</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Cabecera;