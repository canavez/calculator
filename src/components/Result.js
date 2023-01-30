import './Result.css'

const Result = ({result}) => {
  return (
    <>
        <div className="view-container">
            <h2>{result}</h2>
        </div>
    </>
  )
}

export default Result