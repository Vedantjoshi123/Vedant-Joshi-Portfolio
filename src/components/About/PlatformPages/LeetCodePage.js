// // LeetCodePage.js
// import React, { useState, useEffect } from 'react';
// import { Row, Col, Card, ListGroup } from "react-bootstrap";
// import { fetchLeetCodeProfile, fetchLeetCodeSolved, fetchLeetCodeSubmissions } from "../../../services/leetcodeService";
// import './LeetCodePage.css';

// const LeetCodePage = () => {
//   const [profile, setProfile] = useState(null);
//   const [solved, setSolved] = useState(null);
//   const [submissions, setSubmissions] = useState([]);
//   const username = 'vedantjoshi4406'; 

//   useEffect(() => {
//     const fetchData = async () => {
//       const profileData = await fetchLeetCodeProfile(username);
//       const solvedData = await fetchLeetCodeSolved(username);
//       const submissionsData = await fetchLeetCodeSubmissions(username);
//       setProfile(profileData);
//       setSolved(solvedData);
//       setSubmissions(submissionsData);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="leetcode-page">
//       Leet code
//       {/* <Row className="profile-section">
//         <Col md={3} className="profile-photo">
//           {profile && (
//             <Card className="profile-card">
//               <Card.Img variant="top" src={profile.profile.image_url} className="avatar" />
//             </Card>
//           )}
//         </Col>
//         <Col md={8} className="profile-info">
//           {profile && (
//             <Card className="text-center profile-details">
//               <Card.Body>
//                 <Card.Title>{profile.profile.real_name}</Card.Title>
//                 <Card.Text className="bio">{profile.profile.about_me}</Card.Text>
//                 <Row className="stats-row">
//                   <Col xs={4} className="stats-item">
//                     <Card className="stats-card">
//                       <Card.Body>
//                         <Card.Title>Ranking</Card.Title>
//                         <Card.Text className="stats-number"><strong className="purple">{profile.profile.ranking}</strong></Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                   <Col xs={4} className="stats-item">
//                     <Card className="stats-card">
//                       <Card.Body>
//                         <Card.Title>Reputation</Card.Title>
//                         <Card.Text className="stats-number"><strong className="purple">{profile.profile.reputation}</strong></Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                   <Col xs={4} className="stats-item">
//                     <Card className="stats-card">
//                       <Card.Body>
//                         <Card.Title>Submissions</Card.Title>
//                         <Card.Text className="stats-number"><strong className="purple">{profile.profile.submissions}</strong></Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 </Row>
//                 <Card.Link href={`https://leetcode.com/${username}/`} target="_blank" className="profile-link">View Profile</Card.Link>
//               </Card.Body>
//             </Card>
//           )}
//         </Col>
//       </Row>

//       <Row className="solved-section">
//         <Col md={12}>
//           <h1 className="solved-heading">Solved <strong className="purple">Questions</strong></h1>
//           <p className="solved-count">{solved && solved.solved.total}</p>
//         </Col>
//       </Row>

//       <Row className="submission-section">
//         <Col md={12}>
//           <h1 className="submission-heading">Recent <strong className="purple">Submissions</strong></h1>
//           <ListGroup>
//             {submissions.map((submission, index) => (
//               <ListGroup.Item key={index} className="submission-item">
//                 <strong>{submission.title}</strong> - {submission.status_display}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//       </Row> */}
//     </div>
//   );
// };

// export default LeetCodePage;
import React from 'react'

function LeetCodePage() {
  return (
    <div>LeetCodePage</div>
  )
}

export default LeetCodePage