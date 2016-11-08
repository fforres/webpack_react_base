import React, { Component } from 'react';

import background from './water.jpeg';
import style from './style.css';

export default class header extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div id="header" className={style.header}>
        <div className={style.textsContainer}>
          <div className={style.right}>
            <h1> Bienvenido! a <b>OpenSalary</b> </h1>
            <p className={style.text}>OpenSalary es una iniciativa abierta que busca transparentar de manera anónima, los rangos salariales en la industria del desarrollo.</p>
            <p className={style.text}>Jamás publicaremos nada relacionado a tu persona. Nuestra API presenta data anónima, recopilada mediante el uso de esta aplicación.</p>
            <p className={style.text}>Nuestra api es pública, con un límite de requests por usuario, si quieres acceso a todo nuestro dataset puedes acceder al siguiente link.</p>
          </div>
          <div className={style.left}> <span> LOGO </span> </div>
        </div>
        <div className={style.loginButton}>
          <h2 className={style.text}> Ayúdanos a transparentar la industria: </h2>
          <button>Ingresar</button>
        </div>
      </div>
    );
  }
}
