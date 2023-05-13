import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

import internetJPG from './img/internet.jpg';
const App: React.FC = () => {
  return (
    <div>

      <Container>
        <Row>
          <Col>
            <h1>What is the Internet?</h1>
            <div className="hideover">
            <img src={internetJPG} alt="Internet" className="Image" />

            </div>
            <p>
              The internet is a global network of computers and servers that communicate with each other using a common set of protocols. It allows users all over the world to share information and connect with each other in real-time.
            </p>
            <h2>How Does the Internet Work?</h2>
            <p>
              At a high level, the internet works by sending data packets between devices using the Internet Protocol (IP). When you enter a web address in your browser, your computer sends a request to a server using IP. The server then sends back the requested data, which is displayed in your browser.
            </p>

            <h3>Some Key Components of the Internet</h3>
            <ul>
              <li><strong>Routers:</strong> Devices that help route data packets between networks.</li>
              <li><strong>IP Addresses:</strong> Unique numerical identifiers that identify devices on the internet.</li>
              <li><strong>Domain Names:</strong> Human-readable names that correspond to IP addresses.</li>
              <li><strong>Protocols:</strong> Sets of rules that govern how data is transmitted over the internet.</li>
            </ul>

            <h4>Conclusion</h4>
            <p>
              The internet has revolutionized the way we communicate and share information. Understanding how it works is key to using it effectively and securely.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="animation-container">
        <div className="circle"></div>
        <div className="square"></div>
      </div>
    </div>
  );
};

export default App;
