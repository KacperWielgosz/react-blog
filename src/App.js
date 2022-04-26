import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'

import About from './components/pages/About';
import Edit from './components/pages/Edit';
import Add from './components/pages/Add';
import Post from './components/pages/Post';
import NoMatch from './components/pages/NoMatch';
import Home from './components/pages/Home';
import Footer from './components/views/Footer';
import NavBar from './components/views/NavBar';

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/edit/:id" element={<Edit />} />
        <Route path="/post/add" element={<Add />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
