import React from 'react'
import { Redirect } from 'react-router-dom'
import { workProjects } from '../constants/workProjects'

const Work = <Redirect to={workProjects[0].pathname} />

export default Work
