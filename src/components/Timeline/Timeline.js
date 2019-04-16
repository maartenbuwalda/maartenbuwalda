import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../containers/Card'
import styled from 'styled-components'
import colors from '../../constants/colors'

const CardLayout = styled.div`
  position: relative;
`

const TimelineWrapper = styled.div`
  display: flex;
  align-items: stretch;
`

const TimelineDescription = styled.div`
  padding: 2rem;
`

const TimelineNavigation = styled.div`
  min-width: 4rem;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      cursor: pointer;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;

      &:before {
        content: '';
        width: 3rem;
        height: 3rem;
        background-color: ${colors.white};
        transition: transform .3s;
        transform: rotate(45deg) translateX(-100%) translateY(100%);
        position: absolute;
      }
      
      &[data-selected=true] {

        &:before {
          transform: rotate(45deg) translateX(-85%) translateY(85%);
        }
      }
    }
  }
`

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.gray};
`

const Timeline = ({ position }) => {
  return (
    <Card position={position}>
      <CardLayout>
        <TimelineWrapper>
          <TimelineDescription>
            <Title>Timeline</Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget sem vitae purus semper efficitur. Phasellus auctor tellus aliquam sapien sagittis, et mattis justo pretium. Curabitur egestas est eget finibus pharetra. Nunc dictum et lorem ac suscipit. Vestibulum venenatis nunc a ante congue, eget luctus purus mattis. Donec sit amet enim venenatis, feugiat magna at, pellentesque augue. Quisque et efficitur felis. In posuere ligula non sapien aliquam dapibus. Nam viverra, justo feugiat condimentum mattis, augue ex scelerisque lectus, ac pharetra dolor mi at ipsum. Nunc et lorem nec odio posuere lacinia. Integer luctus neque vel nisl tincidunt, vitae aliquam velit aliquam. Aenean non magna interdum, efficitur enim et, porta turpis. Curabitur sem erat, ultricies ac laoreet eget, tempor at est. Integer quis ligula semper purus egestas tempor ut sit amet nunc.
            </p>
          </TimelineDescription>
          <TimelineNavigation className="colored">
            <ul>
              <li data-selected><span>2019</span></li>
              <li><span>2018</span></li>
              <li><span>2016</span></li>
              <li><span>2015</span></li>
              <li><span>2014</span></li>
              <li><span>2012</span></li>
              <li><span>2011</span></li>
              <li><span>2010</span></li>
              <li><span>2006</span></li>
              <li><span>1989</span></li>
            </ul>
          </TimelineNavigation>
        </TimelineWrapper>
      </CardLayout>
    </Card>
  )
}

Timeline.propTypes = {
  position: PropTypes.string,
}

export default Timeline
