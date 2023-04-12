// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="container">
      <div className="sub-container">
        <h1 className="heading">FAQs</h1>
        <ul>
          {faqsList.map(eachList => (
            <FaqItem key={eachList.id} faqDetails={eachList} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
