import './App.css';
import NavBar from './components/Navbar/Navbar';
import ProjectArticle from './components/Projetcs/ProjectArticle'
import CreateProject from './components/Projetcs/createProject'
import Projects from './components/Projetcs/Project';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Profile from './components/Profile/Profile'
import Home from './components/Home';

function App() {
  const links = [
    { to: '/', title: 'Home', component: <Home/>, key: uuidv4() },
    { to: '/explore', title: 'Explore', component: <Projects />, key: uuidv4() },
    { to: '/profile', title: 'Profile', component: <Profile/>, key: uuidv4() },
    { to: '/create', title: 'Create', component: <CreateProject />, key: uuidv4() }
]
  return (
    <Router>
      <NavBar links={links}/>

      <Routes>
        {links.map(link => {
          return <Route exact path={link.to} key={link.key} element={link.component} />
        })}
        <Route path={'innovator/:username'} element={<Profile/>} />
        <Route path={'innovator/:username/:id'} element={<ProjectArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router >
  )
}

export default App;
