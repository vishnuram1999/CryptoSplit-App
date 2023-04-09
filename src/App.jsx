import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Overview from './pages/Overview'
import About from './pages/About'
import Home from './pages/Home'
import Group from './pages/Group'
import Expense from './pages/Expense'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Overview />} />
      <Route path="dashboard/group" element={<Group />} />
      <Route path="dashboard/expense" element={<Expense />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

