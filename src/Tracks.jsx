const tracks = [
    { name: "DevPod"},
    { name: "AI/ML"},
    { name: "Blockchain"},
    { name: "Innovation",},
    { name: "Random"},
]

function TrackCard({track}) {
  const width = 800, height = 500,radius = 20,strokeWidth=1;
  const start = 10*width/100, length = 40*width/100, dec = 2*width/100, top= 10*height/100;
    return (
      <div>
          <svg className="max-w-[80%] mx-auto py-[2%]" viewBox={`-${strokeWidth/2} -${strokeWidth/2} ${width+strokeWidth} ${height+strokeWidth}`} xmlns="http://www.w3.org/2000/svg">
          <path d={`M0 ${height-radius} Q 0 ${height} ${radius} ${height} L${width-radius} ${height} Q ${width} ${height} ${width} ${height-radius} L${width} ${radius+top} Q ${width} ${top} ${width-radius} ${top} L${start+length+radius} ${top} Q${start+length} ${top} ${start+length-dec/2} ${top/2} Q${start+length-dec} ${0} ${start+length-dec-radius} ${0} L${start+dec+radius} ${0} Q${start+dec} ${0} ${start+dec/2} ${top/2} Q${start} ${top} ${start-radius} ${top} L${radius} ${top} Q${0} ${top} ${0} ${radius+top} L${0} ${height-radius}`} stroke="black" fill="none" strokeWidth={strokeWidth}/>
          </svg>
      </div>
    )
}

function Tracks() {

  return (
    <div className='w-full bg-white relative overflow-x-hidden flex flex-col'>
    <TrackCard track={tracks[0]}/>
        
    </div>
  );
}

export default Tracks;
