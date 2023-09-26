import React from 'react'

export const Skeleton = ({width,height,round,classes}) => {
  return (
    <div className={`animate-pulse bg-zinc-900 ${round} ${width} ${height} ${classes}`}></div>
  )
}
