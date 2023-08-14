const ProductBreakdown = (props) => {
  return (
    <div id='productBreakdown'>
      <div>
        <p id='revtxt'>Size</p>
        <span style={{fontSize:'10px'}}>Too small</span>
        <span style={{fontSize:'10px'}}>Perfect</span>
        <span style={{fontSize:'10px'}}>Too large</span>
      </div>
      <div>
        <p id='revtxt'>Width</p>
        <span style={{fontSize:'10px'}}>Too narrow</span>
        <span style={{fontSize:'10px'}}>Perfect</span>
        <span style={{fontSize:'10px'}}>Too wide</span>
      </div>
      <div>
        <p id='revtxt'>Comfort</p>
        <div >
          <span style={{fontSize:'10px'}}>Uncomfortable</span>
          <span style={{fontSize:'10px'}}>Ok</span>
          <span style={{fontSize:'10px'}}>Perfect</span>
        </div>
      </div>
      <div>
        <p id='revtxt'>Quality</p>
        <span style={{fontSize:'10px'}}>Poor</span>
        <span style={{fontSize:'10px'}}>What I expected</span>
        <span style={{fontSize:'10px'}}>Perfect</span>
      </div>
      <div>
        <p id='revtxt'>Length</p>
        <span style={{fontSize:'10px'}}>Runs short</span>
        <span style={{fontSize:'10px'}}>Perfect</span>
        <span style={{fontSize:'10px'}}>Runs long</span>
      </div>
      <div>
        <p id='revtxt'>Fit</p>
        <span style={{fontSize:'10px'}}>Runs tight</span>
        <span style={{fontSize:'10px'}}>Perfect</span>
        <span style={{fontSize:'10px'}}>Runs long</span>
      </div>
    </div>
  )
}

export default ProductBreakdown