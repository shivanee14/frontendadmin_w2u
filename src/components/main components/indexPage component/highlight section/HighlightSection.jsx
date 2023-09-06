import React from 'react'
import NewsSection from './news section/NewsSection'
import SidebarSection from './sidebar section/SidebarSection'

function HighlightSection() {
  return (
<>
<section className="position-relative pb-0">
  <div className="container-fluid px-4" data-sticky-container>
    <div className="row">
        <NewsSection />
        <SidebarSection />
    </div>
  </div>
</section>
</>

    )
}

export default HighlightSection