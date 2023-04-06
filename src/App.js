import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <img src="emslinks.svg" alt="emzra links scribble" className="w-30 h-20 pr-5 pl-5"/>
      <div className="grid grid-cols-6 gap-4">
      {/* <img src="/emaline-1.png" alt="scribble" className="col-start-2 col-span-2"/> */}
      </div>
      <img src="/pfp.jpg" alt="pfp" className="w-30 h-20 pr-5 pl-5"/>
        <a
          className="App-link pt-10 pl-5 pr-5"
          href="https://github.com/emalineg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github2.svg" alt="github link" className="w-30 h-20 sm:h-15"/>
        </a>
        <a
          className="App-link pt-10 pl-5 pr-5"
          href="https://twitter.com/emzraline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/twitter2.svg" alt="twitter link" className="w-30 h-20 sm:h-15"/>
        </a>
        <a
          className="App-link pt-10 pl-5 pr-5"
          href="https://discordapp.com/users/156574546244141056"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/discord3.svg" alt="discord link" className="w-30 h-20 sm:h-15"/>
        </a>
      
      </header>
    </div>
  );
}

export default App;
