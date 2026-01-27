import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LegacyIframe from './LegacyIFrame'

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}> {/* Ensure full viewport size */}
      <LegacyIframe />
    </div>
  )
}