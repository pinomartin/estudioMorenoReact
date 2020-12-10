import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { Hero } from './components/Hero' 
import { SectionDividerTop } from './components/SectionDividerTop';
import { SectionDividerBottom } from './components/SectionDividerBottom';
// import { NavBar } from './components/NavBar';
import { ServiceContainer } from './components/ServiceContainer';


function App() {
  return (
    <Container fluid className="main-container bg-light">
      <Header />
      <SectionDividerTop />
      <ServiceContainer />
      <SectionDividerBottom />
      <Hero />
      <SectionDividerTop />

      <ServiceContainer />

    </Container>

  );
}

export default App;
