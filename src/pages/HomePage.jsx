import { Container, Row, Col, Card, } from "react-bootstrap";
import LogoImage from '../assets/img/logo-tbnindonesia.png'
import WhoWeAre from '../assets/img/ww.png'
import PBD from '../assets/img/pbd.png'
import Frame from '../assets/img/Frame.png'
import Restoration from '../assets/img/Restoration.png'
import Empowerment from '../assets/img/Empowerment.png'
import Action from '../assets/img/MaskGroup.png'
import Peduli from '../assets/img/Peduli.png'
import Uang from '../assets/img/Uang.png'
import Koneksi from '../assets/img/conectsi.png'
import './HomePageContent.css';
import './Partners.css';
import './Event.css'

const HomePage = () => {
  const partnerLogos = [
    'partner1.png',
    'partner2.png',
    'partner3.png',
    'partner1.png',
    'partner5.jpg',
    'partner6.png',
    'partner7.png',
    'partner8i.jpg',
    'partner9.png',
    'partner10.png',
    'partner11.png',
    'partner12.jpg',
    'partner13.jpgg',
    'partner1.png',
   ,
    // tambahkan logo lainnya sesuai kebutuhan
  ];
  return (
    <div className='homepage'>
      <header className='w-100 min-vh-100 d-flex align-items-center '>
        <Container>
          <Row className="header-box ">
            <Col>
            <h1> TBN INDONESIA</h1>
            <p>We help you live <br /> carbon neutral</p>
            <button className="me-3 ms-4">Calculate Impact</button>
            </Col>
          </Row>

          <Row className="header-card d-flex justify-content-center">
          <Col>
            <Card className="card1" >
              <Card.Body>
                <Card.Title>Be a Volunteer</Card.Title>
                <Card.Text>
                Join our suport community who share their time, telent and treasure
                </Card.Text>
                <button className="rounded-circle">=</button>
                <Card.Link className="card-link" href="#">Discover More</Card.Link>
              </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card className="card2 position-absolute end-0">
              <Card.Body>
                <Card.Title>Upliftting Poverty</Card.Title>
                <Card.Text>
                We take an ecosystem approach to suport social enterprises serving marginalized community in asia
                </Card.Text>
                <button className="rounded-circle">=</button>
                <Card.Link className="card-link" href="#">Discover More</Card.Link>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </header>

      <Card className="hd-card">
        <Container className="d-flex align-items-center">
        <Row>
              <Col>
              <Card className="card3 ">
                <Card.Body className="mb-0 text-white ">
                  <Card.Title className="fs-1 ">Collaboration for a sustainable future</Card.Title>
                  <br />
                  <Card.Text className="mb-2">
                  Lately, there has been a noticeable rise in collaborations between companies from diverse industries aimed at tackling environmental and social challenges. These partnerships blend unique perspectives and expertise to foster innovative solutions, spur progress, and generate positive impact. Through collective efforts, businesses
                   can harness their resources and influence to build a more sustainable and fair world for future generations.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col>
                <div>
                  <img className="logo" src={LogoImage} alt="" />
                </div>
              </Col>
            </Row>
        </Container>
    </Card>
    <Card className="hd-card2 border border-white">
        <Container className="d-flex align-items-center">
        <Row>
        <Col>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe width="560" height="320" 
                  src="https://www.youtube.com/embed/Kgrumz_76RI?si=S4tF0Txw9jWJaSol" title="YouTube video player" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                allowFullcreen>                  
                </iframe>
              </div>
              </Col>
              <Col>
              <Card className="card4 border border-white ">
                <Card.Body className="mb-0 ">
                  <Card.Title className="title ">Who <span>We Are</span></Card.Title>
                  <br />
                  <Card.Text className="isi mb-2">
                  <span> TBN Indonesia, </span> a social foundation that focuses on social transformation through entrepreneurship, has a website that is less than optimal in communicating its mission and vision, as well as attracting investors and partners. 
                  This results in a lack of awareness and participation in TBN Indonesia's programs, which impacts the social impact it aims to achieve.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
        </Container>
    </Card>

    <div className="w-full flex justify-between bg-slate-900 text-white mx-9 py-2 rounded-[40px] mt-4">
      <img src={PBD} alt="" />
    </div>

    <Card className="hd-card3 ">
        <Container className="d-flex align-items-center">
        <Row>
              <Col>
              <Card className="card">
                <Card.Body className="mb-0 ">
                  <Row className="flex justify-between">
                    <Col>
                      <Card.Title className="title1 ">Our <span>Value</span></Card.Title>
                    </Col>
                    <Col>
                      <Card.Text className="isi1 ">
                      We believe that nature and humans can live together for the preservation of Indonesia's nature.
                      </Card.Text>
                    </Col>
                  </Row>

                  <Row className="mt-5">
                    <Col className="flex text-center">  
                      <img src={Frame} alt="" />
                      <Card.Title className="title mt-2 text-secondary fs-3">Collaboration </Card.Title>
                      <Card.Text className="isi  p-3">
                      We believe in the collaborative power of the collective, where all faiths, all sectors, across national borders, align and work together to amplify restoration and empowerment efforts.
                      </Card.Text>
                    </Col>
                    <Col className="flex text-center">
                      <img src={Empowerment} alt="" />
                      <Card.Title className="title mt-2 text-secondary fs-3">Empowerment </Card.Title>
                      <Card.Text className="isi p-3">
                      Social entrepreneurs, business owners, and leaders are trained and equipped with business know-how, leadership skills, and character development, enabling transformative change through gateways of faith, purpose, and inner leadership.
                      </Card.Text>
                    </Col>
                    <Col className="flex text-center">
                      <img src={Restoration} alt="" />
                      <Card.Title className="title mt-2 text-secondary fs-3">Restoration </Card.Title>
                      <Card.Text className="isi p-3">
                      The dignity of work and economic empowerment is restored by enterprises and markets, moving from charity and philanthropy to long-term sustainability.
                      </Card.Text>
                    </Col>
                  </Row>

                </Card.Body>
              </Card>
              </Col>
            </Row>
        </Container>
    </Card>

    <Card className="hd-card4 ">
        <Container className="d-flex align-items-center text-white">
        <Row>
              <Col>
              <Card className="card">
                <Card.Body className="mb-0 ">
                  <Row className="flex justify-between text-white">
                    <Col>
                      <Card.Title className="title1">SETH</Card.Title>
                    </Col>
                    <Col>
                      <Card.Text className="isi ">
                      The SETH (Social Enterprise Training Hub) programme helps high-potential post-revenue social enterprises to be more investment-ready through business scaling support, 
                      tailored expertise and investment pitch coaching.
                      </Card.Text>
                    </Col>
                  </Row>

                  <Row className="set-card mt-5 text-white">
                    <Col className=" flex text-center">  
                      <img src={Action} alt="" />
                      <Card.Title className="title">Action-oriented curriculum </Card.Title>
                      <Card.Text className="isi">
                      The programme structure is 25% theory and 75%  <br />application. Every cohort is curated according to the industry interest of participating investors. 
                      </Card.Text>
                    </Col>
                    <Col className="flex text-center">
                      <img src={Koneksi} alt="" />
                      <Card.Title className="title">Empowerment </Card.Title>
                      <Card.Text className="isi">
                      Business mentors, specialist advisors, and coaches  <br /> support on business model, strategy, operations and 
                      personal development.
                      </Card.Text>
                    </Col>
                    <Col className="flex text-center">
                      <img src={Peduli} alt="" />
                      <Card.Title className="title ">High touch peer support and evaluation </Card.Title>
                      <Card.Text className="isi mt-2">
                      Peers comment on each other’s business model, as well as evaluate and score each other’s performance.
                      </Card.Text>
                    </Col>
                    <Col className="flex text-center">
                      <img src={Uang} alt="" />
                      <Card.Title className="title">Early involvement of prospective investors </Card.Title>
                      <Card.Text className="isi ">
                      Investor network members are aware of the pool of <br />
                      SETH applicants and can serve as business mentors, <br />
                      specialist advisors, or coaches.
                      </Card.Text>
                    </Col>
                  </Row>

                </Card.Body>
              </Card>
              </Col>
            </Row>
        </Container>
    </Card>
    <div className="home-content-container">
        <div className="kotak">

        <div className='text11'>
        <h1 className='text1'>Expertise Network</h1>
        </div>
        <div className="text22">
            
        <p className='text2'>A support community for social enterprises made up of industry mentors,
specialist advisors, and coaches who give their time, talent and treasure
to help alleviate poverty in Southeast Asia.</p>
        </div>
        </div>
      <div className="expertise-network">
        <div className="expertise-network-image">
          <img src="/images/gambar1.jpg" alt="Expertise Network" />
          
          <div className="overlay">
            <h3>Industry Mentors</h3>
            <p>Guidance and support from experienced industry professionals.</p>
          </div>
        </div>
        <div className="expertise-network-image">
          <img src="/images/gambar2.jpg" alt="Expertise Network" />
          <div className="overlay">
            <h3>Specialist Advisors</h3>
            <p>Expert advice in various fields to enhance social impact.</p>
          </div>
        </div>
        <div className="expertise-network-image">
          <img src="/images/gambar3.jpg" alt="Expertise Network" />
          <div className="overlay">
            <h3>Coaches</h3>
            <p>Personalized coaching to drive growth and sustainability.</p>
          </div>
        </div>
      </div>
 
      <button className="connect-btn">Connect With Us</button>
      <h1 className='volunter'>Volunteer With Us</h1>
      
      
      <h3>September 2022
Bali Conference 2022 - TBN Indonesia 

was launched</h3>

<h3 className='sep'>September 2023
TBN Indonesia Inaugural conference.</h3>
  <h1 className="event-title">last event</h1>
<div className="event-container">
      <div className="event-card">
        <img src="poster11.jpg" alt="Event Poster 1" className="event-image" />
        <div className="event-details">
          <p className="event-text">TBN Idn 10 November 2023 Transformational Sales Conference 2023</p>
          <button className="event-button">Look up the conference</button>
        </div>
      </div>
      <div className="event-card">
        <img src="poster2.webp" alt="Event Poster 2" className="event-image" />
        <div className="event-details">
          <p className="event-text">TBN Idn 07-09 September 2023 TBN Asia Conference 2023</p>
          <button className="event-button">Look up the conference</button>
        </div>
      </div>
      <div className="event-card">
        <img src="poster3.jpg" alt="Event Poster 3" className="event-image" />
        <div className="event-details">
          <p className="event-text">TBN Idn 26 Januari 2024 FROM PASSION TO IMPACT</p>
          <button className="event-button">Look up the conference</button>
        </div>
      </div>
    </div>
<div className="partners-container">
      <h1>Our Partners</h1>
      <div className="partners-grid">
        {partnerLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Partner ${index + 1}`} className="partner-logo" />
        ))}
        </div>
        </div>
</div>
    </div>
  )
}

export default HomePage
