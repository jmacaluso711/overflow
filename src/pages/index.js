import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import devIcon from '../images/icon-dev.svg';
import uiIcon from '../images/icon-ui.svg';
import placeholderPhone from '../images/placeholder-phone.png';
import headshot from '../images/jmaczone.png';


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
        <div className="max-w-xl pr-12">
          <h2 className="mb-16 text-4xl">What we do best.</h2>
          <div className="flex items-start mb-8">
            <img src={devIcon} className="mr-5" alt="dev icon" />
            <div>
              <h3 className="mb-2">Development</h3>
              <p>Wether you need a CMS driven website, a static micro site or a cross platform native app, we build quickly and reliably and often while iterating and to minimize errors and achieve a fast feedback loop. We help our clients build and optimize their continuous delivery pipelines.</p>
            </div>
          </div>
          <div className="flex items-start mb-8">
            <img src={uiIcon} className="mr-5" alt="ui icon" />
            <div>
              <h3 className="mb-2">UX & UI Design</h3>
              <p>If you have an idea we can make it a reality. We design with the idea to make our websites and apps fast, intuitive and beautiful.</p>
            </div>
          </div>
        </div>
        <div>
          <img style={{ maxWidth: '100%', width: "100%", height: 'auto' }} src={placeholderPhone} alt="Placeholder" />
        </div>
      </div>
    </div>
    <div className="px-4 py-16">
      <div className="max-w-4xl m-auto">
        <h2 className="mb-10 text-4xl">The tools we use.</h2>
        <div className="flex flex-row">
          <div className="flex-1">
            <div className="flex items-start">
              <div>
                <h3 className="mb-2">Front End.</h3>
                <ul className="m-0">
                  <li>Gatsby</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Angular</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-start">
              <div>
                <h3 className="mb-2">Backend.</h3>
                <ul className="m-0">
                  <li>WordPress</li>
                  <li>Python</li>
                  <li>PHP</li>
                  <li>Rest APIs</li>
                  <li>GraphQl</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-start">
              <div>
                <h3 className="mb-2">DevOps/Hosting.</h3>
                <ul className="m-0">
                  <li>Netlify</li>
                  <li>Digitalocean</li>
                  <li>GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-blue-800 text-white px-4 py-16">
      <div className="flex items-center justify-between max-w-4xl m-auto">
        <div className="flex-1">
          <img src={headshot} alt="John Macaluso"/>
        </div>
        <div class="flex-1 ml-10">
          <h3>John Macaluso</h3>
          <h4>Founder, Lead Developer</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi earum, rerum ullam error accusantium quibusdam distinctio unde aliquid voluptate adipisci tenetur nostrum totam provident delectus repellendus alias accusamus nihil!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam tenetur, sint impedit id corrupti consectetur tempora dicta natus amet, velit officiis sequi pariatur commodi odio suscipit mollitia aut quo.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
