import React from "react";
import { Container, List, ListItem, Typography } from "@material-ui/core";
function ContactUs() {
  return (
    <div>
      <Container>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>
              General Inquiries: For general inquiries or to learn more about our IT staffing services, please contact
              us via email or phone. Our dedicated team is ready to assist you and answer any questions you may have.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Client Services: If you are an organization looking to partner with CCS for your IT staffing needs, please
              reach out to the Client Services Team. We are eager to understand your requirements and provide tailored
              staffing solutions that align with your objectives.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Candidate Inquiries: If you are an IT professional seeking new career opportunities or looking to join our
              talent pool, please get in touch with our candidate services team. We will work with you to explore
              exciting prospects and career growth options.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Feedback and Suggestions: At CCS, we value your feedback and suggestions. Your insights help us improve
              our services continually. If you have any comments or recommendations, please don't hesitate to reach out
              to us. We appreciate your input.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Join Our Team: If you're interested in becoming part of the CCS team, whether as a recruiter, account
              manager, or in another role, please visit our careers page on our website or contact our HR department for
              more information on current job openings and application procedures.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Stay Connected: Thank you for considering Coral Consulting Services for your IT staffing needs. We look
              forward to hearing from you and assisting you in achieving your staffing and career goals.
            </ListItem>
          </List>
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Address: Coral Consulting Services | [Street Address] | [City, State, Zip Code] | [Country, if applicable]
          Phone: [Your Phone Number] | Email: [Your Email Address]
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Connect With Us Online: Website: [Website URL] | LinkedIn: [LinkedIn Profile URL] | Facebook: [Facebook Page
          URL] Office Hours: Monday - Friday: 9:00 AM - 5:00 PM [CST Time Zone]
        </Typography>
      </Container>
    </div>
  );
}

export default ContactUs;
