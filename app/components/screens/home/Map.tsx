import GoogleMapReact from 'google-map-react'

const Map = () => {
  return (
    <div className="h-screen w-full">
      <GoogleMapReact 
      bootstrapURLKeys={{key: ""}}
      />
    </div>
  )
}

export default Map
