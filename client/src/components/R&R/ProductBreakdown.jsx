import { trianglePos,perc } from './Helper.jsx'
const ProductBreakdown = (props) => {

  return (
    <div id='productBreakdown'>
      {props.meta.characteristics && props.meta.characteristics.Size ? (
      <div>
        <p id='revtxt'>Size</p>
        <div id='pdbar-cont'>
          <div id='pdbar'>{trianglePos(perc(props.meta.characteristics.Size))}</div>
        </div>
        <div id='prodExp'>
          <div><span id='pstart' style={{fontSize:'10px'}}>Too small</span></div>
          <div id='pmid'><span style={{fontSize:'10px'}}>Perfect</span></div>
          <div id='pend'><span style={{fontSize:'10px'}}>Too large</span></div>
        </div>
      </div> ) : <></>
      }
      {props.meta.characteristics && props.meta.characteristics.Width ? (
      <div>
        <p id='revtxt'>Width</p>
        <div id='pdbar-cont'>
          <div id='pdbar'>{trianglePos(perc(props.meta.characteristics.Width))}</div>
        </div>
        <div id='prodExp'>
          <div><span style={{fontSize:'10px'}}>Too narrow</span></div>
          <div id='pmid'><span style={{fontSize:'10px'}}>Perfect</span></div>
          <div id='pend'><span style={{fontSize:'10px'}}>Too wide</span></div>
        </div>
      </div> ) : <></>
      }
      {props.meta.characteristics && props.meta.characteristics.Comfort ? (
      <div>
        <p id='revtxt'>Comfort</p>
        <div id='pdbar-cont'>
          <div id='pdbar'>{trianglePos(perc(props.meta.characteristics.Comfort))}</div>
        </div>
        <div id='prodExp'>
          <div><span id='pstart' style={{fontSize:'10px'}}>Uncomfortable</span></div>
          <div id='pmid'><span style={{fontSize:'10px'}}>Ok</span></div>
          <div id='pend'><span style={{fontSize:'10px'}}>Perfect</span></div>
        </div>
      </div> ) : <></>
      }
      {props.meta.characteristics && props.meta.characteristics.Quality ? (
      <div>
        <p id='revtxt'>Quality</p>
        <div id='pdbar-cont'>
          <div id='pdbar'>{trianglePos(perc(props.meta.characteristics.Quality))}</div>
        </div>
        <div id='prodExp'>
          <div><span id='pstart' style={{fontSize:'10px'}}>Poor</span></div>
          <div id='pmid'><span id='pmid' style={{fontSize:'10px'}}>What I expected</span></div>
          <div id='pend'><span style={{fontSize:'10px'}}>Perfect</span></div>
        </div>
      </div>
      ) : <></>
      }
      {props.meta.characteristics && props.meta.characteristics.Length ? (
      <div>
        <p id='revtxt'>Length</p>
        <div id='pdbar-cont'>
          <div id='pdbar'>{trianglePos(perc(props.meta.characteristics.Length))}</div>
        </div>
        <div id='prodExp'>
          <div><span style={{fontSize:'10px'}}>Runs tight</span></div>
          <div id='pmid'><span id='pmid' style={{fontSize:'10px'}}>Perfect</span></div>
          <div id='pend'><span id='pend' style={{fontSize:'10px'}}>Runs long</span></div>
        </div>
      </div>
      ) : <></>
      }
      {props.meta.characteristics && props.meta.characteristics.Fit ? (
      <div>
        <p id='revtxt'>Fit</p>
        <div id='pdbar-cont'>
          <div id='pdbar'>{trianglePos(perc(props.meta.characteristics.Fit))}</div>
        </div>
        <div id='prodExp'>
          <div><span style={{fontSize:'10px'}}>Runs tight</span></div>
          <div id='pmid'><span id='pmid' style={{fontSize:'10px'}}>Perfect</span></div>
          <div id='pend'><span id='pend' style={{fontSize:'10px'}}>Runs long</span></div>
        </div>
      </div>
      ): <></>
      }
    </div>
  )
}

export default ProductBreakdown