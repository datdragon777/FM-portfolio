"use client"

import React, { ReactNode } from 'react'

const Container = ({children}: {children: ReactNode}) => {
  return (
    <div className='w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px]'>{children}</div>
  )
}

export default Container