import React from 'react';
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import {Navbar, Welcome, Dock } from '#components'
import {Terminal} from "#windows/index.js";

gsap.registerPlugin(Draggable)

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal/>
    </main>
  );
}

export default App;