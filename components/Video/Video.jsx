export const Video = ({ src, poster, autoplay, loop, controls, playsInline, ...otherProps }) => {


    return (
        <video src={src} autoPlay={autoplay} loop={loop} muted={autoplay} controls={controls} playsInline={playsInline} {...otherProps} ></video >
    )
}