import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'react' // react version > 16.0

export class Question extends Component {


    render() {

        return (
            <div>
            {this.props.question_index }
            <h5 dangerouslySetInnerHTML={{__html:  this.props.question}} />
                <ul>
                    <li key='0' dangerouslySetInnerHTML={{__html: this.props.option1}} ></li>
                    <li key='1' dangerouslySetInnerHTML={{__html: this.props.option2}} ></li>
                    <li key='2' dangerouslySetInnerHTML={{__html: this.props.option3}} ></li>
                    <li key='3' dangerouslySetInnerHTML={{__html: this.props.option4}} ></li>
                </ul>
            </div>
        )
    }
}

export default Question
