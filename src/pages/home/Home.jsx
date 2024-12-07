  import React from 'react'
  import './Home.scss'
  import Header from '../../components/header/Header.jsx'
  import Navbar from '../../components/navbar/Navbar.jsx'
  import Main1 from '../../components/main1/Main1.jsx'
  import MainMenu from '../../components/mainMenu/MainMenu.jsx'
  import Main2 from '../../components/main2/Main2.jsx'
  import Main3 from '../../components/main3/Main3.jsx'
  import Footer from '../../components/footer/Footer.jsx'
  
  const Home = () => {
    console.log('Home is rendering'); // Проверяем Home

    return (
      <div>
        <Header />
        <Navbar />
        <Main1 />
        <MainMenu />
        <Main2 />
        <Main3 />
        <Footer />
      </div>
    )
  }

  export default Home
