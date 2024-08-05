
const NotFound = () => {
  return (
    <div className="notfound">
      {/* <img src="data:image/png;base64,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" alt="" /> */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNFBObXZxxjH09oWPSw4bvRuGtjmGXFa-lpqdMXNCU3Zhx-1NnsftsXXN_w&s"/>
    </div>
  )
}

export default NotFound