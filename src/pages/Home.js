import React from "react";
import { Container, List, ListItem, Typography } from "@material-ui/core";
function Home() {
  return (
    <div>
      <Container>
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Welcome to Coral Consulting Services (CCS)!
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Your Gateway to Exceptional IT Talent At CCS, we're not just in the business of IT staffing; we're in the
          business of transforming your organization with top-tier IT professionals who drive innovation and success.
          Our team of experts is here to connect you with the best talent and help you thrive in the dynamic world of
          technology.
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          CCS Strength Unparalleled
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>
              Expertise: Our seasoned team of technical leaders understands the IT landscape inside out. We have the
              expertise to match the perfect candidate to your specific needs.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Client-Centric Approach: We put your success first. By understanding your goals, culture, and unique
              requirements, we ensure every staffing solution is a perfect fit. Diverse Talent Pool: CCS promotes
              diversity and inclusivity. We have access to a vast network of IT professionals from various backgrounds,
              ensuring you have a wide range of exceptional candidates to choose from.
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              Innovation-Driven: In an ever-evolving industry, we stay at the forefront of technology trends. We bring
              innovative staffing solutions to the table to help you stay competitive.
            </ListItem>
          </List>
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Join Us Are you an IT professional seeking exciting career opportunities? Or, are you a company in need of IT
          staffing solutions that drive your business forward? Join us on our journey to excellence. Discover how CCS
          can make a difference for you. Contact Us Today Ready to get started? Contact our team of experts to discuss
          your IT staffing needs or explore exciting career opportunities with CCS. We're here to help you succeed.
        </Typography>
      </Container>
    </div>
  );
}

export default Home;
