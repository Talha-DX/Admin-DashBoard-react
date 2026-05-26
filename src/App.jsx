import React, { Suspense } from 'react'
import Layout from './Components/Layout'
import { Routes, Route } from 'react-router-dom'
import { router } from './router/routers'

const App = () => {
  return (
    <div>
      <Layout>
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <Routes>
              {router.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Suspense>
      </Layout>
    </div>
  )
}

export default App