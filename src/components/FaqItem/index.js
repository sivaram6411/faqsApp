// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActiveCond: false}

  onClickToggleAnswer = () => {
    const {isActiveCond} = this.state
    this.setState({isActiveCond: !isActiveCond})
  }

  render() {
    const {faqDetails} = this.props
    const {isActiveCond} = this.state
    const {questionText, answerText} = faqDetails
    const imgUrl = isActiveCond
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imgAlt = isActiveCond ? 'minus' : 'plus'

    return (
      <li className="list-container">
        <div className="image-container">
          <h1 className="question-text">{questionText}</h1>
          <button
            type="button"
            className="img-button"
            onClick={this.onClickToggleAnswer}
          >
            <img src={imgUrl} alt={imgAlt} className="image" />
          </button>
        </div>
        {isActiveCond ? <hr className="hr-line" /> : null}
        {isActiveCond ? <p className="answer-text">{answerText}</p> : null}
      </li>
    )
  }
}

export default FaqItem
