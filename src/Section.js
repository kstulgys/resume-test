import React from "react"
import useWindowSize from "./useWindowSize"

export default function Section({ id, children }) {
  // const size = useWindowSize()
  return (
    <>
      <section
        id={id}
        className={`min-vh-100 d-flex flex-column m-0 p-0 col-12 col-md-6 col-lg-10 pt-5 ml-0 ml-lg-5`}
      >
        <div className="mt-5 pb-5 display-4">{id}</div>
        <div className="d-flex flex-fill flex-column justify-content-center">
          {children}
        </div>
      </section>
    </>
  )
}

{
  /* <section
id={id}
class={`min-vh-100 d-flex flex-column pt-5 w-${
  size.width > 991 ? "50" : "100"
} ml-0 ml-lg-5`}
>
<div className="mt-5 pb-5 display-4">{id}</div>
<div className="d-flex flex-fill flex-column justify-content-center">
  {children}
</div>
</section> */
}
