import React, { useState, useEffect } from 'react';
import GitHubCalendar from "react-github-calendar";
import { Row, Col, Card } from "react-bootstrap";
import { fetchGithubUser, fetchGithubRepos } from "../../../services/githubService";
import './GitHubPage.css';
import {AiFillStar} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";

const GitHubPage = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const username = 'Vedantjoshi123'; 

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchGithubUser(username);
      const reposData = await fetchGithubRepos(username);
      setUser(userData);
      setRepos(reposData);
    };

    fetchData();
  }, []);

  return (
    <div className="github-page">
      <Row className="profile-section">
        {/* <Col md={3} className="profile-photo">
          {user && (
            <Card className="profile-card">
              <Card.Img variant="top" src={user.avatar_url} className="avatar" />
            </Card>
          )}
        </Col>  */}
        <Col md={12} className="profile-info">
          {user && (
            <Card className="text-center profile-details">
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text className="bio">{user.bio}</Card.Text>
                <Row className="stats-row">
                  <Col xs={4} className="stats-item">
                    <Card className="stats-card">
                      <Card.Body>
                        <Card.Title>Public Repos</Card.Title>
                        <Card.Text className="stats-number"><strong className="purple">{user.public_repos}</strong></Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4} className="stats-item">
                    <Card className="stats-card">
                      <Card.Body>
                        <Card.Title>Followers</Card.Title>
                        <Card.Text className="stats-number"><strong className="purple">{user.followers}</strong></Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4} className="stats-item">
                    <Card className="stats-card">
                      <Card.Body>
                        <Card.Title>Following</Card.Title>
                        <Card.Text className="stats-number"><strong className="purple">{user.following}</strong></Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Card.Link href={user.html_url} target="_blank" className="profile-link">View Profile</Card.Link>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      <Row className="calendar-section" style={{ justifyContent: "center" }}>
        <h1 className="project-heading">
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username={username}
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>

      <Row className="repo-section">
        <Col md={12}>
        <h1 className="project-heading repo-heading">
        My <strong className="purple">Repositories</strong>
        </h1>
          <Row>
            {repos.map(repo => (
              <Col md={4} key={repo.id} className="repo-card">
                <Card className="repo-card-item">
                  <Card.Body>
                    <Card.Title>{repo.name}</Card.Title>
                    <Card.Text className="repo-description">
                      {repo.description ? `${repo.description.substring(0, 100)}${repo.description.length > 100 ? '...' : ''}` : 'No description available'}
                    </Card.Text>
                    <Card.Footer className="text-muted">
                      <AiFillStar style={{ fontSize: "1.1em" }} /> {repo.stargazers_count} | <CgGitFork style={{ fontSize: "1.2em" }} /> {repo.forks_count}
                    </Card.Footer>
                    <Card.Link href={repo.html_url} target="_blank" className="repo-link">View Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default GitHubPage;
