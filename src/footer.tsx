import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light mt-5">
      <Container>
        <p>
             Hosted on Github Pages.
        </p>
        <p>
          This website is for educational purposes only and does not provide any legal or financial advice.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
