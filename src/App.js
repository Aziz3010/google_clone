import React, { useState } from 'react';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { RoutesCompo } from './Components/RoutesCompo';

const App = () => {
  const [ darkTheme, setDarkTheme ] = useState(false);

  return (
    <main className={darkTheme ? 'dark' : null}>
      <section className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <RoutesCompo />
        <Footer />
      </section>
    </main>
  )
}

export default App;