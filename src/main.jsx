import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { General } from './components/general'
import { Education } from './components/education'
import { WorkExperience } from './components/work-experience'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <General />
    <Education />
    <WorkExperience />
  </StrictMode>,
)
