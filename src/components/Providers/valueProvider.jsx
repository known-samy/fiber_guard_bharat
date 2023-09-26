import {useContext,createContext} from 'react'

export const valueContext = createContext(null)

export const ValueProvider = ({children}) => {
  return (
    <div>ValueProvider</div>
  )
}
