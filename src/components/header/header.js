import React, { Component } from 'react';

class Header extends Component {
   render() {
      return (
         <header className='main-header'>
            <div className='container'>
               <h1>Facebook.</h1>
               <nav>
                  <ul>
                     <li>Meu Perfil</li>
                  </ul>
               </nav>
            </div>
         </header>
      );
   }
}
export default Header;
