import styled from 'styled-components'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Fab } from '@material-ui/core'
import LocationIcon from 'components/icons/Location'

export const MarginedLocationIcon = styled(LocationIcon)`
    margin-right: ${props => props.theme.spacing()}px;
`

export default class FindMeButton extends Component {
    static propTypes = {
        whenClicked: PropTypes.func
    }

    
    render () {
    return (
      <Fab
        color='secondary'
        className={this.props.className}
        aria-label='Find Me'
        variant='extended'
        onClick={this.props.whenClicked}>
        <>
          <MarginedLocationIcon
            color='inherit'
            size='24px' /> Find Me
        </>
      </Fab>
    )
  }
}