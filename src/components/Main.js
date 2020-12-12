import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">ABOUT</h2>

          <p>
            Enthusiastic and hardworking Instrumentation Engineer with 4 years
            of experience in Oil and Gas,Water industry !{' '}
          </p>
          <p>
            Harnessing Technical, Leadership, Team building and Software skills
            from the projects that I work on a daily basis.
          </p>
          <p>
            Detail Engineering, Front-End Engineering design, Project Management
            are few of my noted specializations.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">WORK</h2>
          <h6>2019 - Current </h6>
          <h5>TechnipFMC India Pvt Ltd</h5>
          <ul>
            <li>
              Worked in Detailed engineering project <b>(Arctic LNG2)</b> and
              handled activities such as Instrument Index, Fire & Gas Index,
              Hardware & Software I/O List, ICSS wiring, F&G wiring, Cable & JB
              list, Cause & effect, Instrument tracing & Heating list.
            </li>
            <li>
              Functioned as Task lead for Instrument tracing and heating list
              document.
            </li>
            <li>
              Clarification of queries from Construction yard, Vendor and
              Sub-Contractors.
            </li>
            <li>
              Overall knowledge of all deliverables prepared during detail
              engineering
            </li>
            <li>Co-ordinate with Instrumentation Designers and 3D Modelers.</li>
            <li>
              Member of cultural events organizing team at TechnipFMC, Chennai
            </li>
          </ul>
          <h6>2017- 2019</h6>
          <h5>Petro6 Engineering and Constructions Pvt Ltd</h5>
          <ul>
            <li>
              Preparation of Instrumentation deliverables: Instrumentation
              Index, I/O List, Functional Schematics, Cause and effect, System
              Architecture Drawing, Datasheets for Instrumentsand detectors for
              Fire & Gas, Hook-up Drawings, Cable Schedule, Junction Box
              schedule, Wiring drawing, Cable routing layout, MTO, RFQs, TBE,
              Fire and gas mapping layout.
            </li>
            <li>Reviewing vendor offers by technical bid evaluation.</li>
            <li>
              Sizing of Instruments using Instrucalc, Daniel orifice software.
            </li>
            <li>
              Projects Worked in : Effluent treatment plant, ASP injection,
              Liquid handling facility, Cyclic steam stimulation.
            </li>
            <li>Functioned as an internal auditor at Petro6 E&C Pvt Ltd.</li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">STUDY</h2>
          <h6>2013 - 2017</h6>
          <h4>B.Tech: Electronics And Instrumentation </h4>
          <h4>SASTRA University - Thanjavur</h4>
          <p>Activities and Societies - NSS, Apparels and Merchandise</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CONTACT</h2>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-phone"></a>
            </li>
            <span className="label">+91-8870931641</span>
            <br></br>
            <br></br>

            <li>
              <a href="#" className="icon fa-envelope"></a>
            </li>
            <span className="label">kevinarvind96@gmail.com</span>
            <br></br>
            <br></br>
            <li>
              <a
                href="https://www.linkedin.com/in/kevinarvindsuresh/"
                className="icon fa-linkedin"
              ></a>
            </li>
            <span className="label">Kevin Arvind Suresh</span>
          </ul>
          <form
            method="get"
            target="_blank"
            action="https://drive.google.com/file/d/1O501B6miN4n6VlU_xjtpGSiT6zAzkWZa/view"
          >
            <button>Resume</button>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
