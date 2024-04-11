import React from "react";
import { Container, List, ListItem, Typography, Card, CardContent, ListItemText, Button } from "@material-ui/core";
function Careers() {
  return (
    <div>
      <Container>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          At CCS, we believe that our success is driven by the exceptional talent and dedication of our team members. If
          you are passionate about IT staffing and consulting, thrive in a dynamic work environment, and are committed
          to delivering excellence, we invite you to explore career opportunities with us.
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Why Choose CCS?
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>
              Innovation: We foster a culture of innovation, staying at the forefront of the ever-evolving IT industry.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Collaboration: Our teams collaborate closely, sharing knowledge and expertise to achieve common goals.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Growth: We provide opportunities for professional growth and development to help you reach your full
              potential.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Diversity: We value diversity and inclusivity, believing that different perspectives drive innovation.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Client Focus: Our client-centric approach ensures that we deliver outstanding results and client
              satisfaction.
            </ListItem>
          </List>
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          <Typography variant="h5" component="h2">
            Current Openings
          </Typography>
          Explore our current job openings below. CCS is an equal opportunity employer, and we welcome candidates from
          all backgrounds to apply. We look forward to welcoming new talent to our team!
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" component="h2">
                Python Data Scientist
              </Typography>
              <Typography color="text.secondary">
                We are seeking a highly skilled Python Data Scientist to join our dynamic team. The ideal candidate will
                possess expertise in Python programming, with a strong foundation in data structures, algorithms, SQL,
                and Pandas. Additionally, proficiency in data science and machine learning concepts is crucial for this
                role.
              </Typography>
              <Typography color="text.secondary">
                Responsibilities:
                <ListItemText>
                  - Develop and maintain robust Python code for data analysis and machine learning tasks.
                </ListItemText>
                <ListItemText>- Utilize SQL and Pandas for data manipulation, querying, and analysis.</ListItemText>
                <ListItemText>
                  - Apply data science techniques to extract insights and drive decision-making.{" "}
                </ListItemText>
                <ListItemText>
                  - Build and deploy machine learning models for predictive analytics and pattern recognition.{" "}
                </ListItemText>
                <ListItemText>
                  - Collaborate with cross-functional teams to understand business requirements and translate them into
                  actionable data solutions.{" "}
                </ListItemText>
                <ListItemText>
                  - Stay updated with the latest advancements in data science, machine learning, and related fields.
                </ListItemText>
              </Typography>
              <Typography color="text.secondary">
                Requirements:
                <ListItemText>
                  - Proficiency in Python programming with a focus on data structures, algorithms, and efficient coding
                  practices.{" "}
                </ListItemText>
                <ListItemText>
                  - Strong knowledge of SQL and experience in querying databases for data extraction and analysis.{" "}
                </ListItemText>
                <ListItemText>- Expertise in Pandas for data manipulation and analysis. </ListItemText>
                <ListItemText>
                  - Solid foundation in data science principles and techniques, including statistical analysis, data
                  visualization, and exploratory data analysis.
                </ListItemText>
                <ListItemText>- Familiarity with machine learning algorithms and frameworks.</ListItemText>
                <ListItemText>- Interest and basic understanding of LLM is a plus. </ListItemText>
                <ListItemText>
                  - Excellent communication and collaboration skills. - Flexibility to work in different time zones.{" "}
                </ListItemText>
                <ListItemText>
                  - A minimum of 3 years of relevant work experience is preferred, but not mandatory.
                </ListItemText>
              </Typography>
              <Typography color="text.secondary">
                Benefits:
                <ListItemText>- Competitive salary</ListItemText>
                <ListItemText>- Flexible working hours</ListItemText>
                <ListItemText>- Opportunities for professional growth and development</ListItemText>
              </Typography>
              <Typography color="text.secondary">
                If you are passionate about leveraging Python for data-driven insights and making an impact through data
                science and machine learning, we encourage you to apply. Join us at CCS and be part of a team that
                drives innovation and excellence in IT.
              </Typography>
              <Typography color="text.secondary">
                To apply, please send your resume and cover letter to
                <Button color="text.secondary" href="mailto:kiran@coral-cs.com">
                  kiran@coral-cs.com
                </Button>
              </Typography>
            </CardContent>
          </Card>
        </Typography>
      </Container>
    </div>
  );
}

export default Careers;
