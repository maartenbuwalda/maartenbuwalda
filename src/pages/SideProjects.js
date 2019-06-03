import React from 'react'
import { Redirect } from 'react-router-dom'
import { sideProjects } from '../constants/sideProjects'

const SideProjects = <Redirect to={sideProjects[0].pathname} />

export default SideProjects
