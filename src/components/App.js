import React from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import Footer from './Footer';
import Navbar from './Navbar';
import Start from './Start';
import NewModal from './NewModal';
import { connect } from 'react-redux';

const mapStateToProps = (props, { params: { deckId } }) => ({
  deckId
});

const App = ({ deckId, children }) => {
  return (<div className='app'>
    <NewModal/>
      <Navbar />
      {/*}<Toolbar/>*/}
      <Sidebar deckId={[{ name: 'Deck 1'}]} addingDeck={true}/>
        <div className="app-content">
        <div className="app-content-body fade-in-up">
    {children}
      </div>
    </div>

      <Footer/>


  </div>);
};

export default connect(mapStateToProps)(App);
