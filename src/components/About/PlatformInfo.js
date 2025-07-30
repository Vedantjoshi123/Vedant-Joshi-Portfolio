import React from "react";
import {Row, Col } from "react-bootstrap";
import codechef from "../../Assets/Platforms/codechef.png";
import codeforce from "../../Assets/Platforms/codeforces.png";
import gfg from "../../Assets/Platforms/gfg.png";
import hackerrank from "../../Assets/Platforms/hackerrank.png";
import leetcode from "../../Assets/Platforms/leetcode.png";

const PlatformInfo = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "100px" }}>
        
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://leetcode.com/vedantjoshi4406" target="_blank" rel="noreferrer">
          <img src={leetcode} 
            alt="sts" width="80" height="80" />
        </a>   
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.geeksforgeeks.org/user/vedantjoshi4406" target="_blank" rel="noreferrer">
          <img src={gfg} alt="sts" width="80" height="80" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.codechef.com/users/vedant_4406" target="_blank" rel="noreferrer">
          <img src={codechef} alt="sts" width="80" height="80" />
        </a>  
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://codeforces.com/profile/vedantjoshi4406" target="_blank" rel="noreferrer">
          <img src={codeforce} alt="sts" width="80" height="80" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.hackerrank.com/profile/vedantjoshi4406" target="_blank" rel="noreferrer">
          <img src={hackerrank}  alt="sts" width="80" height="80" />
        </a>
      </Col>
    </Row>
    // <Container>

    //   <Row style={{ justifyContent: "center", paddingBottom: "60px" }}>
    //     <Col xs={4} md={3}>
    //       <div className="platform-card">
    //         <FaGithub size={50} color="#f5a623" />
    //         <h3>LeetCode</h3>
    //         <p>Problems solved: 100+</p>
    //         <a href="https://leetcode.com/vedantjoshi4406" target="_blank" rel="noopener noreferrer">
    //           View Profile
    //         </a>
    //       </div>
    //     </Col>
    //     <Col md={3}>
    //       <div className="platform-card">
    //         <FaGithub size={50} color="#00a89c" />
    //         <h3>GeeksforGeeks</h3>
    //         <p>Problems solved: 200+</p>
    //         <a href="https://www.geeksforgeeks.org/user/vedantjoshi4406" target="_blank" rel="noopener noreferrer">
    //           View Profile
    //         </a>
    //       </div>
    //     </Col>
    //     <Col md={3}>
    //       <div className="platform-card">
    //         <FaGithub size={50} color="#5a2d81" />
    //         <h3>CodeChef</h3>
    //         <p>Rating: 2 stars</p>
    //         <a href="https://www.codechef.com/users/vedant_4406" target="_blank" rel="noopener noreferrer">
    //           View Profile
    //         </a>
    //       </div>
    //     </Col>
    //     <Col md={3}>
    //       <div className="platform-card">
    //         <FaGithub size={50} color="#003d6b" />
    //         <h3>Codeforces</h3>
    //         <p>Rating: 1400+</p>
    //         <a href="https://codeforces.com/profile/vedantjoshi4406" target="_blank" rel="noopener noreferrer">
    //           View Profile
    //         </a>
    //       </div>
    //     </Col>
    //     {/* Add more platforms as needed */}
    //   </Row>
    // </Container>
  );
};

export default PlatformInfo;
