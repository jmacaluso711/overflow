import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import devIcon from '../images/icon-dev.svg';
import uiIcon from '../images/icon-ui.svg';
import placeholderPhone from '../images/placeholder-phone.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ height: '70vh', display: 'flex', alignItems: 'center', 'justifyContent': 'center' }}>
      <div style={{ maxWidth: '900px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '72px', textAlign: 'center' }}>We build beautiful digital products.</h1>
        <Link to="/get-started" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4">Let's Chat</Link>
      </div>
    </div>
    <div className="bg-red-500 text-white px-4 py-16">
      <div className="flex items-center justify-between max-w-4xl m-auto">
        <div>
          <h2 className="mb-12">What we do best.</h2>
          <div className="flex items-start mb-8 pr-20">
            <img src={devIcon} className="mr-5" alt="dev icon" />
            <div>
              <h3 className="mb-2">Development</h3>
              <p>We will take your designs and create scalable architectures and code that's stable and easily maintanable.</p>
            </div>
          </div>
          <div className="flex items-start mb-8 pr-20">
            <img src={uiIcon} className="mr-5" alt="ui icon" />
            <div>
              <h3 className="mb-2">UX & UI Design</h3>
              <p>If you have an idea we can make it a reality. We design with the idea to make our apps fast, intuitive and beautiful.</p>
            </div>
          </div>
        </div>
        <div>
          <img style={{ maxWidth: '100%', width: "100%", height: 'auto' }} src={placeholderPhone} alt="Placeholder" />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
