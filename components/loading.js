import styles from './loading.module.css'

const Loading = () => (
<div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center" style={{ background: "rgba(0, 0, 0, 0.3)" }}>
  <div className="bg-default border py-2 px-5 rounded-lg flex items-center flex-col">
    <div className={`${styles.loaderDots} block relative w-20 h-5 mt-2`}>
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-accent"></div>
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-accent"></div>
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-accent"></div>
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-accent"></div>
    </div>
    <div className="text-default text-xs font-light mt-2 text-center">
      Please wait...
    </div>
  </div>
  </div>
)

export default Loading;