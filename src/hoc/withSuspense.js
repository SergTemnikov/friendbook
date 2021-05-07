import React from 'react'
import { Suspense } from 'react'
import Preloader from '../components/common/Preloader/preloader'

const withSuspense = (Component) => (props) => {
  return (
    <Suspense fallback={<Preloader/>}>
      <Component {...props}/>
    </Suspense>
  )
}

export default withSuspense