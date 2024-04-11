import React from "react";
import { Container, List, ListItem, Typography } from "@material-ui/core";
function AboutUs() {
  return (
    <div>
      <Container>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          In the dynamic world of IT staffing, Coral Consulting Services (CCS) emerged in 2023 as a beacon of
          excellence. Founded and owned by young women leaders, CCS brings a fresh and innovative perspective to the
          industry. We are a team of highly experienced and talented technical leaders, united by a shared vision: to
          provide cutting-edge technical services and solutions to fulfill the staffing needs of leading organizations.
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Our Vision: At CCS, we have a clear and unwavering vision: to be the catalyst that transforms the IT staffing
          landscape. We are committed to bridging the gap between top-tier IT professionals and organizations that
          demand their exceptional talents. Our mission is to empower businesses to thrive and IT professionals to
          advance their careers, all while contributing to a more diverse and inclusive industry.
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          What Sets Us Apart:
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>
              Expertise: Our founders and team members bring a wealth of experience and expertise to CCS. We understand
              the intricate demands of the IT world and leverage this knowledge to connect the right talent with the
              right opportunities.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Client-Centric Approach: Your success is our priority. We believe that understanding your organization's
              goals, culture, and specific needs is paramount to delivering successful staffing solutions.
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              Candidate-Centric Focus: We care about the career growth and aspirations of our candidates. Our goal is to
              provide them with opportunities that align with their skills, experience, and ambitions, fostering
              long-term career success.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Innovation: We thrive on innovation and adapt to industry trends. By staying at the forefront of
              technology and best practices, we ensure our services remain efficient and effective.
            </ListItem>
          </List>
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Our Commitment: At CCS, we operate on a foundation of trust, integrity, and transparency. Our commitment to
          ethical business practices ensures that every interaction with us is positive and productive. We tirelessly
          work to exceed your expectations, delivering results that fuel your organization's growth and success.
        </Typography>
      </Container>
    </div>
  );
}

export default AboutUs;
